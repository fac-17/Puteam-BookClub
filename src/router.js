const fs = require("fs");
const path = require("path");
const handlers = require("./handlers")


const router =  (request, response) => {
  const endpoint = request.url;

  if (endpoint === '/') {
    handlers.handleHome(request, response);

  } else if () {
    response.writeHead();
    response.end('');

  } else if () {


  } else {
    response.writeHead(404);
    response.end('404 Page not found');
  }


};








module.exports = router;
