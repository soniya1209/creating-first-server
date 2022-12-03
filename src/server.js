const http = require("http");
const port = 8081;

const toDoList = ["Complete node byte", "Play Cricket"];
http
  .createServer((req, res) => {
    // callback function
    const { method, url } = req;

    if (url === "/todos") {
      if (method === "GET") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(toDoList.toString());
      }
    }else {
      res.writeHead(501);
    }

    res.end();
  })
  .listen(port, () => {
    console.log(`Nodejs server started on port ${port}`);
  });
