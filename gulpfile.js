const browserSync = require('browser-sync').create();

function browsersync() {
    browserSync.init({
        server: { baseDir: './' },
        notify: false,
        online: true
    })
}

exports.browsersync = browsersync;
