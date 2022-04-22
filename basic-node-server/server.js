const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
  if (req.url == "/" && req.method == 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Wellcome!</h1><hr><p>Please, go to my <a href="/home">Home page</a>!</p>')
  } else if (req.url == "/home" && req.method == 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1>Wellcome!</h1><hr><p>You is on my <strong>Home page</strong>!</p>")
  } else {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end('{"code":400,"message":"This page does not exists or method not allowed!"}')
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at   http://${hostname}:${port}/`);
});
