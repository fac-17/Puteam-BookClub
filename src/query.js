// let script = require("../public/script.js");

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var searchInput = "lion"; //placeholder

var key = process.env.API_KEY;

function apiCall(inputValue) {
  var url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    key +
    "&query=" +
    inputValue;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let movieObj = JSON.parse(xhr.responseText);
      console.log("This is req:", movieObj);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

module.exports = { apiCall }
