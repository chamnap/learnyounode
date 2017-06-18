var http = require('http');

var url  = process.argv[2];
http
  .get(url, function(response) {
    response.setEncoding('utf8');

    var stream = "";
    response.on('data', function(data) {
      stream += data;
    });
    response.on('error', console.error);
    response.on('end', function() {
      console.log(stream.length);
      console.log(stream);
    });
  })
  .on('error', console.error);