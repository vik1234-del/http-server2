// HTTP methods
const http = require("http");

//Using switch/case to handle conflicting GET/PUT methods
const server = http.createServer((req, res) => {
  switch (req.method) {
    case "GET":
      switch (req.url) {
        case "/books":
          res.write("This is the URL for books using " + req.method);
          break;
        case "/books/author":
          res.write("Requesting author information using " + req.method);
          break;
        default:
          res.statusCode = 404;
          res.write("Not Found");
      }
      break;

    case "PUT":
      switch (req.url) {
        case "/books":
          res.write("Updating the details for books using " + req.method);
          break;
        case "/books/author":
          res.write("Changing author information using " + req.method);
          break;
        default:
          res.statusCode = 404;
          res.write("Not Found");
      }
      break;

    case "DELETE":
      switch (req.url) {
        case "/books":
          res.write("Books were deleted successfully using " + req.method);
          break;
        default:
          res.statusCode = 404;
          res.write("Not Found");
      }
      break;

    case "POST":
      switch (req.url) {
        case "/books/author":
          res.write("Updating author information using " + req.method);
          break;
        default:
          res.statusCode = 404;
          res.write("Not Found");
      }
      break;

    default:
      res.statusCode = 405;
      res.write("Method Not Allowed");
  }

  res.end();
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
