var path = require('path');
var fs   = require('fs');

module.exports = function(directory, extension, callback) {
  extension = "." + extension;

  fs.readdir(directory, function(err, list) {
    if(err) {
      return callback(err);
    }

    list = list.filter(function(file) {
      return extension == path.extname(file);
    });

    callback(null, list);
  });
};