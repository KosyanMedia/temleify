# Templeify

###Install

```bash
npm install temple-watify --save-dev
```

###Example:

gulpfile.js:

```javascript
var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('scripts', function() {
  gulp.src('script.js', { read: false })
    .pipe(browserify({
      transform: ['temple-watify']
    }))
    .pipe(gulp.dest('.tmp'))
});
```

script.js:

```javascript
window.temple_utils = require('temple');
pool = temple_utils.pool(require('./template.temple'));

template = pool.get('template');
document.body.appendChild(template[0]);
```
