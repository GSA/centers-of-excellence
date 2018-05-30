var gulp            = require('gulp'),
    tap             = require('gulp-tap'),
    responsive      = require('gulp-responsive');

gulp.task('img', function () {
  return gulp.src('/_images/**/*.{jpg,png,jpeg,gif,PNG,JPEG,JPG}')
    .pipe(tap(function (file) {
      console.log(file.path);
      var uid = get_image_uid(file.path);
      var format = get_image_format(file.path);
      var dimensions = sizeOf(file.path);
      fs.writeFile('dist/images/'+ uid +'.yml', get_image_data(uid, dimensions.width, dimensions.height, format));
    }))

});

// Set watch as default task
gulp.task('default', ['img']);
