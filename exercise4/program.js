var fs = require('fs');

var filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, content) {
  if (err) {
    return console.log(err);
  }

  var lines = content.toString().split("\n").length - 1;
  console.log(lines);
});