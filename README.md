Grunt Front-End Template
========================

### What? ###
It's a project template that uses Grunt to make life easier. Taking a source directory (`./src/`), Grunt will produce a development version (the one you test in your browsers whilst building), and a production version (the one you whack on a server for the public).

It currently uses:

* [grunt-browserify](https://github.com/jmreidy/grunt-browserify)
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
* [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
* [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
* [grunt-html-build](https://github.com/spatools/grunt-html-build)
* [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
* [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
* [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)

Browserify is optional. If you aren't using Browserify in your project, just turn off the browserify#enabled setting in `./gruntConfig.js`


### Why? ###
I'm lazy. Isn't that enough?


### How? ###
* Clone this repo, and `cd` into the directory.
* `npm install`
* Alter [`./gruntConfig.js`]() to suit.
* `grunt`
* Start coding your project


### The Future ###
* Add support for LESS/SASS.
* Add unit-testing support.