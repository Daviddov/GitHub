const http = require('http');
// const url = new URL('https://www.example.com/p/a/t/h?query=string')
const server =http.createServer((req, res) => {
  if ( req.url === '/'){
    res.write('Hello World')
    res.statusCode = 304
  
    res.end()
  }

  if ( req.url === '/api/courses'){
    res.write(JSON.stringify([1, 2, 3]))
    res.statusCode = 304
    res.end()
  }

})

server.on('connection',(socket) => {console.log('connection')} )

server.listen(3000)

console.log('listinig to port 3000');