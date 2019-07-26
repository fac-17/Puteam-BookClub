// let input = document.querySelector(".form--input").value;
let xhr = new XMLHttpRequest();
// let url = `search=${input}`;

const frontCall = searchInput => {
  var url = `query=${searchInput}`;
  xhr.onreadystatechange = () => {
    // console.log('readyState: ', xhr.readyState, 'status: ', xhr.status);
    if (xhr.readyState == 4 && xhr.status == 200) {
      var filteredResponse = JSON.parse(xhr.responseText);
      console.log('Calls come home: ', filteredResponse);
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};
