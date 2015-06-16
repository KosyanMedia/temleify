var through = require('through');
var temple = require('temple-wat');

module.exports = function(file) {
  if(!/\.temple$/.test(file)) return through();
  var data = '', stream = through(write, end);
  return stream;

  function write(buf, enc, next) {
    data += temple(file, true, true);
  }

  function end() {
    stream.queue(data);
    stream.queue(null);
  }
};
