var path = require('path');
var fs   = require('fs');

var directory = process.argv[2];
var extension = "." + process.argv[3];

fs.readdir(directory, function(err, list) {
  if(err) {
    return;
  }

  for(var i=0; i<list.length; i++) {
    if (extension == path.extname(list[i])) {
      console.log(list[i]);
    }
  }
});