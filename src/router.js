const fs = require("fs");
const path = require("path");


const router =  (request, response) => {
  const endpoint = request.url;

  if (endpoint === '/') {
    response.writeHead();
    response.end('');

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
