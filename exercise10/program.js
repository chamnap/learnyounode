var net      = require('net');
var strftime = require('strftime');

var now    = function() {
  return strftime('%Y-%m-%d %H:%M');
};

var port   = Number(process.argv[2]);
var server = net.createServer(function (socket) {
  socket.write(now() + "\n");
  socket.end();
});
server.listen(port);