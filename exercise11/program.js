var http = require('http');
var fs   = require('fs');

var port = Number(process.argv[2]);
var path = process.argv[3];

var server = http.createServer(function (request, response) {
  var stream = fs.createReadStream(path);

  response.writeHead(200, { 'content-type': 'text/plain' });
  stream.pipe(response);
});
server.listen(port);