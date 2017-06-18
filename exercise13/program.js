var http = require('http');
var url  = require('url');

var port = Number(process.argv[2]);

var parsetime = function(date) {
  return {
    "hour": date.getHours(),
    "minute": date.getMinutes(),
    "second": date.getSeconds()
  };
};

var unixtime = function(date) {
  return {
    "unixtime": Number(date)
  };
}

var server = http.createServer(function (request, response) {
  var hash = url.parse(request.url, true);
  var date = new Date(hash.query.iso);

  var result;
  if (hash.pathname == '/api/parsetime') {
    result = parsetime(date);
  }
  else if (hash.pathname == '/api/unixtime') {
    result = unixtime(date);
  }

  if(result) {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify(result));
  } else {
    response.writeHead(404);
    response.end('invalid endpoint\n');
  }
});
server.listen(port);