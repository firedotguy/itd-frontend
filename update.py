from subprocess import run, PIPE
from datetime import timedelta, datetime
from time import sleep
from sys import argv

from scheduler import Scheduler

def update():
    run(['uv', 'run', 'main.py'], check=True, shell=True)
    run(['git', 'add', '.'], shell=True, stdout=PIPE)
    run(['git', 'commit', '-m', f'autosave at {datetime.now().strftime('%d.%m %H:%M')}'], shell=True, stdout=PIPE)
    run(['git', 'push'], shell=True, stdout=PIPE)

if '-s' in argv:
    update()

schedule = Scheduler()
schedule.cyclic(timedelta(hours=2), update)

while True:
    schedule.exec_jobs()
    sleep(10)