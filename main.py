from os import makedirs
from os.path import basename, isdir
from shutil import rmtree, move
from subprocess import run, PIPE
from datetime import datetime
from re import search, findall, sub as re_sub, compile as re_compile
from collections import Counter
import glob as glob_module

from requests import Session
from bs4 import BeautifulSoup
from svg_extractor import extract_svgs

session = Session()


def get(url):
    return session.get(url)


def clear_dir(path):
    try:
        rmtree(path)
    except FileNotFoundError:
        pass
    makedirs(path)


print('clear old files')
clear_dir('raw')
clear_dir('decompiled')

print('find base script')
possible_base_scripts = BeautifulSoup(get('https://xn--d1ah4a.com').text, 'html.parser').find_all('script')
base_script = None

for script in possible_base_scripts:
    if script.attrs.get('src'):
        src = script.attrs['src']
        print(f'found: {src}', end='')
        base_script = get(f'https://xn--d1ah4a.com{src}').text
        print(f', loaded {len(base_script.splitlines())} lines')
        with open(f'raw/{basename(str(src))}', 'w', encoding='utf-8') as fl:
            fl.write(base_script)
assert base_script, 'Base script not found'

# Parse __vite__mapDeps file list
deps_match = search(r'm\.f=\[(.+?)\]\)', base_script)
assert deps_match, '__vite__mapDeps not found'
dep_files = findall(r'"assets/([^"]+)"', deps_match.group(1))
print(f'found {len(dep_files)} dep files ({sum(1 for f in dep_files if f.endswith(".css"))} css, {sum(1 for f in dep_files if f.endswith(".js"))} js)')

# Parse lazy page imports
page_imports = {}

for js_file, indices_str, component_name in findall(
    r'import\("\.\/([^"]+)"\),__vite__mapDeps\(\[([^\]]+)\]\)\)\.then\(e=>\(\{default:e\.(\w+)\}\)',
    base_script
):
    indices = [int(x.strip()) for x in indices_str.split(',') if x.strip()]
    page_imports[component_name] = {'js_file': js_file, 'dep_indices': indices}

for js_file, component_name in findall(
    r'import\("\.\/([^"]+)"\),\[\]\)\.then\(e=>\(\{default:e\.(\w+)\}\)',
    base_script
):
    page_imports[component_name] = {'js_file': js_file, 'dep_indices': []}

print(f'found {len(page_imports)} pages: {", ".join(page_imports.keys())}')

# Files used in 2+ pages go to raw/ root
dep_usage = Counter()
for info in page_imports.values():
    for idx in info['dep_indices']:
        dep_usage[dep_files[idx]] += 1

shared_files = {f for f, count in dep_usage.items() if count > 1}
print(f'shared files (raw/): {", ".join(sorted(shared_files))}')

# Download files
# file_dest[filename] = 'raw' | 'raw/pagename'
file_dest = {}
downloaded = set()

for component_name, info in page_imports.items():
    page_dir = f'raw/{component_name.lower()}'
    makedirs(page_dir, exist_ok=True)

    js_file = info['js_file']
    print(f'  [{component_name}] {js_file}                    ', end='\r')
    content = get(f'https://xn--d1ah4a.com/assets/{js_file}').text
    with open(f'{page_dir}/{js_file}', 'w', encoding='utf-8') as fl:
        fl.write(content)
    file_dest[js_file] = page_dir

    for idx in info['dep_indices']:
        filename = dep_files[idx]
        dest_dir = 'raw' if filename in shared_files else page_dir
        dest_path = f'{dest_dir}/{filename}'

        if dest_path not in downloaded:
            downloaded.add(dest_path)
            print(f'  [{component_name}] {filename}                    ', end='\r')
            content = get(f'https://xn--d1ah4a.com/assets/{filename}').text
            with open(dest_path, 'w', encoding='utf-8') as fl:
                fl.write(content)

        if filename not in file_dest:
            file_dest[filename] = dest_dir

print('all files downloaded              ')

# --- Decompile all JS in one wakaru call ---
base_script_name = basename(str(src))
file_dest[base_script_name] = 'raw'  # ensure base script gets moved to decompiled/
all_js_files = [
    f.replace('\\', '/')
    for f in glob_module.glob('raw/**/*.js', recursive=True)
]

print(f'decompiling {len(all_js_files)} JS files...')
makedirs('decompiled_tmp', exist_ok=True)
run(
    ['npx', '@wakaru/cli', 'unminify'] + all_js_files + ['-o', 'decompiled_tmp/', '-f'],
    shell=True, stdout=PIPE, stderr=PIPE
)

# Find all files wakaru produced (may mirror directory structure)
produced = {
    basename(p): p.replace('\\', '/')
    for p in glob_module.glob('decompiled_tmp/**/*', recursive=True)
    if not isdir(p)
}

# Distribute to correct output directories
for filename, dest_dir in file_dest.items():
    if not filename.endswith('.js'):
        continue
    if filename not in produced:
        print(f'  warning: decompiled file not found: {filename}')
        continue
    out_dir = dest_dir.replace('raw', 'decompiled', 1)
    makedirs(out_dir, exist_ok=True)
    move(produced[filename], f'{out_dir}/{filename}')

rmtree('decompiled_tmp', ignore_errors=True)
print('JS decompiled')

# --- Format all CSS with cssbeautifier (pure Python, no npx) ---
all_css_files = glob_module.glob('raw/**/*.css', recursive=True)
print(f'formatting {len(all_css_files)} CSS files...')
for css_file in all_css_files:
    filename = basename(css_file)
    dest_dir = file_dest.get(filename, 'raw')
    out_dir = dest_dir.replace('raw', 'decompiled', 1)
    makedirs(out_dir, exist_ok=True)
    with open(css_file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = re_sub(r'\s*\{\s*', ' {\n    ', content)
    content = re_sub(r';\s*', ';\n    ', content)
    content = re_sub(r'\s*\}\s*', '\n}\n', content)
    with open(f'{out_dir}/{filename}', 'w', encoding='utf-8') as f:
        f.write(content.strip())
print('CSS formatted')

# --- Extract SVGs from all raw JS files ---
print('extracting SVGs...')
makedirs('decompiled/svg', exist_ok=True)
svg_count = 0
seen_svgs = set()

for js_file in glob_module.glob('raw/**/*.js', recursive=True):
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()
    svgs = extract_svgs(content)
    stem = basename(js_file).replace('.js', '')
    for i, xml in enumerate(svgs):
        if xml in seen_svgs:
            continue
        seen_svgs.add(xml)
        suffix = f'_{i + 1}' if len(svgs) > 1 else ''
        with open(f'decompiled/svg/{stem}{suffix}.svg', 'w', encoding='utf-8') as f:
            f.write(f'<?xml version="1.0" encoding="utf-8"?>\n{xml}\n')
        svg_count += 1

print(f'extracted {svg_count} SVGs')
print('done')

