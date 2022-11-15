const http = require('http');
const dt = require('./myDate')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end('Hello ghghWorld!');
  console.log(res.end);
}).listen(8080);
