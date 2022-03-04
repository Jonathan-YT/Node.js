const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('content-type', 'text/html');

  let path = './views/';
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      path += 'index.html';
      break;
    case '/about':
      res.statusCode = 200;
      path += 'about.html';
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('location', 'about');
      res.end();
    default:
      res.statusCode = 400;
      path += '404.html';
      break;
  }

  // send back to the browser an HTML file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requsts on port 3000');
});
