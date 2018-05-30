var gulp            = require('gulp'),
    responsive      = require('gulp-responsive');
var $               = require('gulp-load-plugins')();

gulp.task('img', function () {
  return gulp.src('_images/**/*.{jpg,png,jpeg,gif}')
    .pipe($.responsive({
      // Resize all images to 100 pixels wide and add suffix -thumbnail
      '**/*': [{
        width: 200,
        rename: {
          suffix: '_w200',
          extname: '.png',
        },
      }, {
        width: 200,
        grayscale: true,
        rename: {
          suffix: '_w200bw',
          extname: '.png',
        },
      }, {
        // Empty case to produce a copy of the original
      }],
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 80,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Zlib compression level of PNG output format
      compressionLevel: 6,
      // Strip all metadata
      withMetadata: false,
      skipOnEnlargement: true,
    }))
    .pipe(gulp.dest('dist'));
});

// Set watch as default task
gulp.task('default', ['img']);
