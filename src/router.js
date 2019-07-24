const fs = require("fs");
const path = require("path");
const handlers = require("./handler")


const router =  (request, response) => {
  const endpoint = request.url;

  if (endpoint === '/') {
    handlers.handleHome(request, response);

  } else if (endpoint.indexOf('public') !== -1) {
  handlers.handlePublic(request, response, endpoint);

  } else {
    response.writeHead(404);
    response.end('404 Page not found');
  }

};








module.exports = router;
