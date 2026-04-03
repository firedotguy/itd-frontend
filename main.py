from os import listdir, remove
from subprocess import run, PIPE
from datetime import datetime

from requests import get
from bs4 import BeautifulSoup


print('clear old scripts')
for file in listdir('raw'):
    remove('raw/' + file)
for file in listdir('decompiled'):
    remove('decompiled/' + file)

print('find base script')
possible_base_scripts = BeautifulSoup(get('https://xn--d1ah4a.com').text, 'html.parser').find_all('script')
base_script = None

for script in possible_base_scripts:
    if script.attrs.get('src'):
        print(f'found: {script.attrs['src']}', end='')
        base_script = get(f'https://xn--d1ah4a.com{script.attrs['src']}').text
        print(f', loaded {len(base_script.splitlines())} lines')
assert base_script, 'Base script not found'

print('extract all scripts', end='')
scripts = set()
for script in eval(base_script.split(')))=>i.map(i=>d[i])', 1)[0].split(',d=(m.f||(m.f=', 1)[-1]):
    if script.endswith('.js'):
        scripts.add(script.split('assets/')[-1])
print(f'\rextracted {len(scripts)} scripts')

for script in scripts:
    with open(f'raw/{script}', 'w') as fl:
        print(f'load {script}                      ', end='\r')
        fl.write(get(f'https://xn--d1ah4a.com/assets/{script}').text)
print('scripts loaded           ')

print('\ndecompile', end='')
run(['npx', '@wakaru/cli', 'unminify', 'raw/*.js', '-o', 'decompiled/', '-f'], check=True, shell=True, stdout=PIPE, stderr=PIPE)
print('\rdecompiled')

with open('last_check.txt', 'w') as fl:
    fl.write(datetime.now().isoformat())
