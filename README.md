# NetNavi Core
[![Badge](https://img.shields.io/badge/WebbHub-NetNavi/nn--core-07d0eb.svg?style=flat-square)](https://code.webb.page/NetNavi/nn-core)

With this collection of modules, it should be relatively easy to create your own NetNavi.



## Requirements

- MongoDB
- Node.js and npm
- Sass



## Run

- `npm install`
- `npm start`
- visit `netnavi.local` in the browser

NOTE: I develop on macOS and this project requires admin privilege to run. On macOS, we use `sudo` and that's automatically included in the `npm start` command. If you're on Windows, you can edit the `package.json` file to remove that line. If you're on Linux, you're fine but this project might not run anyway, due to a module that hasn't been tested on your platform. I'll test Linux eventually.



## Background

### Emotion/Personality
- This one's tricky...in the anime/games, NetNavis installed with an "Emotion Program" were able to show personality and emotion. NetNavis without an Emotion Program were basically Mr Progs or assistant NetNavis for work-related tasks (maybe security bots as well). However, Mr Progs seemed to develop personality in later games, DESPITE STILL SPEAKING IN ALL CAPS.

### Hearing
- Voice recognition

### Sight
- Face/Image recognition

### Speech
- Voice synthesis
- Should be customizable

### Thought
- Elaborate `if`/`then`/`else` statements. That's all A.I. is these days, really.



## Scenarios

1) With **Hearing** and **Sight** activated, users could unlock their computers with their face or voice.

2) While working on a project, user could use **Speech** to tell NetNavi to look up something on the Internet. A background browser window would open with the result.

3) User could ask NetNavi for their **Thought**s on something. This would probably be restricted to comparing one thing to another, to start.
