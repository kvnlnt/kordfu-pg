module.exports = {
    options: {
        stripBanners:true
    },
    libs: {
      src: ['modules/snapsvg/dist/snap.svg-min.js',
            'modules/jquery/jquery.min.js',
            'modules/lodash/dist/lodash.compat.min.js',
            'modules/teoria/dist/teoria.min.js',
            'modules/howler/howler.min.js',
            'modules/hammer/hammer.min.js',
            'modules/plukit/plukit.js',
            'modules/pickl/dist/pickl.min.js',
            'modules/tabulous/dist/tabulous.min.js',
            'modules/lucille/dist/lucille.js'],
      dest: 'phonegap/www/libs.js',
    },
}

