var through = require('through');
var temple = require('temple');

module.exports = function(file) {
  var data = '';

  return through((function(buf) {
    if(/\.temple$/.test(file)){
      data += temple([file], true, true);
    }else{
      data += buf;
    }
  }), (function(cb) {
    this.push(data);
    return cb();
  }));
};
