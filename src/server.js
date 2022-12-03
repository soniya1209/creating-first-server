const http = require("http");

const port = 8081;

http
  .createServer((require, response) => {
    response.writeHead(200, { "content-Type": "text/html" });
    response.write("<h1>Hello, this is from my server</h1>");
    response.end();
  })
  .listen(port, () => {
    console.log(`Nodejs server started on port ${port}`);
  });
