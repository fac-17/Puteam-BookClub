const fs = require("fs");
const path = require("path");

const handleHome = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");

  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { "content-type": "text/html" });
      response.end("<h1>Internal Server Error</h1>");
    } else {
      response.writeHead(200, { "content-type": "text/html" });
      response.end(file);
    }
  });
};


const handlePublic = (request, response, endpoint) => {
  const extension = path.extname(endpoint);

  const extensionType = {
    ".css" : "text/css",
    ".js"  : "application/javascript",
    ".ico" : "image/x-icon"
  };

  const filePath = path.join(__dirname, "..", "public", endpoint);

  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, {"content-type": "text/html"});
      response.end("<h1>Ooppppsssss, page ain't found</h1>")
    } else {
      response.writeHead(200, {"content-type": extensionType[extension]});
      response.end(file);
    }
  });
}

module.exports = { handleHome, handlePublic };
