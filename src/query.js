// let script = require("../public/script.js");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var searchInput = "lion"; //placeholder

// var key = process.env.API_KEY;

var key = '3a9c38adfc4ba4d10d8d9b90443f949d';


function apiCall(searchInput) {
  var url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    key +
    "&query=" +
    searchInput;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let movieObj = JSON.parse(xhr.responseText);
      console.log("This is req:", movieObj);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

apiCall(searchInput)
