from textual.app import App, ComposeResult
from textual import containers

from textual_diff_view import DiffView

with open(r'D:\projects\itd-frontend\decompiled\index-BRvFKh3J.js') as fl:
    f1 = fl.read()
with open(r'D:\projects\itd-frontend\old.js') as fl:
    f2 = fl.read()

class Hello(App):
    def compose(self) -> ComposeResult:
        with containers.VerticalScroll():
            yield DiffView("old.js", "new.js", f2, f1)


Hello().run()
