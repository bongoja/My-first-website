var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require('gulp-plumber');
var browserSync = require("browser-sync").create();

gulp.task("sass",function(){
  return gulp.src("scss/**/*.scss")
         .pipe(sass().on("error", sass.logError))
         .pipe(plumber())
         .pipe(gulp.dest("css"))
})
gulp.task("watch", function(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("scss/**/*.scss", ["sass"]);
  gulp.watch("scss/**/*.scss").on("change", browserSync.reload);

})

gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});
