// let input = document.querySelector(".form--input");
let xhr = new XMLHttpRequest();

const frontCall = input => {
  let url = "/search=" + input;
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let frontObj = JSON.parse(xhr.responseText);
    } else {
      console.error(xhr.responseText);
    }
    xhr.open("GET", url, true);
    xhr.send();
  };
};

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
  console.log(movieObj);
}

apiCall(searchInput);
