//example 1
// / const http = require('http');
//
// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<strong>Hello, Node!</strong>');
// });
// server.listen(3000);

// example 2
// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//example 3
const http = require('http');

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html');
//   http.get('http://wttr.in/~kharkov', (response) => {
//     if (response.statusCode !== 200) { res.end('<strong style="color:red">Error!</strong>'); }
//     else {   response.setEncoding('utf-8');
//       let result = '';
//       response.on('data', data => result += data);
//       response.on('end', () => res.end(result));
//     }
//   }); });

// 4
const server = http.createServer((req, res) => {
  console.log('test');
  console.log(req.headers); // заголовки запроса
  console.log(req.method); // метод запроса (put, get,  post итд)
  console.log(req.url); // содержит информацию об url
  res.end('Ok');
});

