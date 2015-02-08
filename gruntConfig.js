/**
 * -------------------------------------------------------
 * Change settings for your project here...
 *
 * Do not edit ./gruntInternals.js or ./gruntfile.js
 * unless you're bug-hunting ;)
 * -------------------------------------------------------
 */

var path = require( 'path' );

var config  = {
    // Folder paths.
    //
    // Unless you edit the file-structure of the original
    // template, you won't need to change these.
    paths: {
        source: 'src',
        development: 'build-dev',
        production: 'build-prod',
        js: path.join( 'res', 'js' ),
        css: path.join( 'res', 'css' )
    },

    // The filenames that Grunt will reference
    // and produce.
    //
    // Currently only supports one HTML page.
    filenames: {
        html: 'index.html',
        js: 'scripts.js',
        jsMin: 'scripts.min.js',
        cssMin: 'styles.min.css'
    },

    // Grunt module configuration.
    modules: {

        // Settings for the `clean` module.
        //
        // This removes the development and production
        // directories before rebuilding, ensuring that
        // any files removed between builds
        // aren't left in place.
        clean: {
            enabled: true,

            // What builds should the `clean` task clean up?
            builds: {
                development: true,
                production: true
            }
        },

        // Settings for the `Browserify` module.
        //
        // Only enable this if you're using Browserify
        // in your project.
        //
        //  - If you're not using Browserify, then Uglify will
        //    take care of copying over JS files from source dir
        //    to development dir.
        //  - If Uglify's development process isn't enabled, the raw JS
        //    files will be copied over instead and referenced
        //    in your HTML file.
        browserify: {
            enabled: true
        },

        // Settings for the `Uglify` module.
        //
        // The `options` objects are passed directly to Uglify,
        // so any options you put here must adhere to the
        // `grunt-contrib-uglify` spec.
        //
        // - Development:
        //   If development is enabled, then Uglify will
        //   concatenate your JS files into one. Whether it's
        //   pretty or not is up to you.
        //   Note that if Browserify is enabled, then Browserify,
        //   not Uglify, will do the concatenation operation.
        //   Browserify's output is then passed into Uglify.
        uglify: {
            development: {
                enabled: true,
                options: {
                    beautify: true
                }
            },
            production: {
                options: {
                    sourceMap: true,
                }
            }
        },

        // Settings for the `Live Reload` module.
        //
        // If `enabled` is true, then a live reload script will
        // be inserted into the version (development and/or production)
        // specified, using the given port number.
        //
        // This is only really useful if you're using the `watch` module
        // as well.
        liveReload: {
            development: {
                enabled: true,
                port: 35729
            },
            production: {
                enabled: false,
                port: 35730
            }
        },

        // Settings for the `Watch` module.
        //
        watch: {
            // Whether to spawn the watch process when running
            // the main Grunt command (`grunt`).
            enabled: true,

            // List file extensions the `watch` task should listen
            // for changes to.
            listenTo: [ 'html', 'css', 'js' ],

            spawn: true,

            // What builds should the watch task produce?
            builds: {
                development: true,
                production: true
            }
        },

        // Whether to spin-up local file servers for your project.
        //
        localServer: {
            development: {
                enabled: true,
                port: 8000
            },
            production: {
                enabled: true,
                port: 8001
            }
        }
    }
};

module.exports = config;