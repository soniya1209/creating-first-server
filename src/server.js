const http = require("http");
const port = 8081;

const toDoList = ["Complete node byte","Play Cricket"];
http
  .createServer((req, res) => {
    // callback function
    const { method, url} = req;
    console.log(method, url);
    req.end();
  })
  .listen(port, () => {
    console.log(`Nodejs server started on port ${port}`);
  });
