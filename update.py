from subprocess import run, PIPE
from datetime import time, datetime
from time import sleep

from scheduler import Scheduler

def update():
    run(['uv', 'run', 'main.py'], check=True, shell=True, stdout=PIPE)
    run(['git', 'add', '.'], shell=True, stdout=PIPE)
    run(['git', 'commit', '-m', f'autosave at {datetime.now().strftime('%d.%m %H:%M')}'], shell=True, stdout=PIPE)
    run(['git', 'push'], shell=True, stdout=PIPE)


update()

schedule = Scheduler()
schedule.hourly(time(0, 0), update)

while True:
    schedule.exec_jobs()
    sleep(10)