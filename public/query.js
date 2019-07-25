// let script = require("./script.js");
// let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let searchInput = "lion"; //placeholder

let key = process.env.API_KEY;

function apiCall() {
  var xhr = new XMLHttpRequest();

  var url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    key +
    "&query=" +
    searchInput;

  console.log(url);
  xhr.onreadystatechange = function() {
    console.log("Ready State: ", xhr.readyState, " Status: ", xhr.status);
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("test");
      let movieObj = JSON.parse(xhr.responseText);
      //Code will run if req is successful
      console.log("This is req:", xhr.responseText);
    }
    xhr.open("GET", url, true);
    xhr.send();
    console.log("2This is req:", xhr.responseText);
  };
  xhr();
}

console.log(apiCall());
