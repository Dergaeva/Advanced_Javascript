const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type','text/html');

  if (/jpg|png|gif|jpeg|js/.test(req.url)) {
    fs.readFile(req.url.replace('/',''), (err, data) => {
      if (err) { res.end(); throw new Error('Error while reading file: ' + err); }
      else {
        res.end(data);
      }
    });
    return;
  }

  fs.readFile('index.html', 'utf-8', (err, data) => {
    if (err) {
      res.end('<strong>Error!</strong>');
      throw new Error('Error while reading index.html');
    }
    else {
      const time = new Date();
      res.end(data.replace('</body>',`<p>${time}</p></body>`));
    }
  });
});

server.listen(5000, () => {
  console.log('Server is listening on port: 5000');
});