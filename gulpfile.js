const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");

gulp.task("hello", function (done) {
  console.log("Привет, мир!");
  done();
});

// Static server
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./*.html").on("change", browserSync.reload);
});

gulp.task("minify-css", () => {
  return gulp
    .src("css/*.css")
    .pipe(
      cleanCSS({
        compatibility: "ie8",
      })
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("minify-css", () => {
  return gulp
    .src("css/*.css")
    .pipe(
      cleanCSS({
          debug: true,
        },
        (details) => {
          console.log(`${details.name}: ${details.stats.originalSize}`);
          console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }
      )
    )
    .pipe(gulp.dest("dist"));
});

//.min-css
gulp.task("mincss", function () {
  gulp
    .src("css/*.css")
    .pipe(cssmin())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest("dist"));
});