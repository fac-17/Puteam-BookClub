// let input = document.querySelector(".form--input").value;
let xhr = new XMLHttpRequest();
// let url = `search=${input}`;

var filteredResponse;

const frontCall = searchInput => {
  var url = `query=${searchInput}`;
  xhr.onreadystatechange = () => {
    // console.log('readyState: ', xhr.readyState, 'status: ', xhr.status);
    if (xhr.readyState == 4 && xhr.status == 200) {
      filteredResponse = JSON.parse(xhr.responseText);
    } else {
      console.error(xhr.responseText);
    }
    return filteredResponse;
  };
  xhr.open("GET", url, false);
  xhr.send();
  return filteredResponse;
};
