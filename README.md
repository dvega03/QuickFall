# Quick Fall

Game by
[Juan Diego Mendoza ](https://github.com/gituser) and [Daniel Vega Levy](https://github.com/dvega03).

Initial scaffolding generated with [generator-gamejam](https://github.com/belen-albeza/generator-gamejam/).

## :video_game:About this game:video_game:

**Quick Fall** is a fast-paced game in which you are a ball and you need to drop from platform to platform dodging spikes on your way down.

The ball bounces continuously and you can control the ball by moving it right and left. The only help you will get will be from power-ups. They appear randomly and give you temporary buffs: multipliers, slow time, meteorite, etc... The objective is to get the highest amount of points possible. 

The further you go the more points you get, so be ready to *fall* and *fail*...

## :camera:Screenshots:camera:

<img src="https://i.imgur.com/IukwArT.png" width="300" height="300"/>

*Work in progress*

----

## Installation

### Requirements

This games uses [gulp](http://gulpjs.com/) for building and tasks automation.

You can install gulp with npm:

```
npm install -g gulp
```

### Build

Clone this repository and install dependencies:

```
git clone dvega03/BallFall
cd BallFall
npm install
```

To **build** the game, run the `dist` task from the project root:

```
gulp dist
```

The `dist` folder will contain a build of the game. You can then start a local server that serves this directory statically to play the game in local:

```
npm install -g http-server
http-server dist
```

You can **clean up** the temporary files and the `dist` folder by running:

```
gulp clean
```

## Development

This project uses [Browserify](http://browserify.org) to handle JavaScript modules.

There is a task that will automatically run Browserify when a JavaScript file changes, and it will also reload the browser.

```
gulp run
```





You can deploy to **Github Pages** with the `deploy:ghpages` task, which will build the project and then push the `dist` folder in the `gh-pages` branch.

```
gulp deploy:ghpages
```

