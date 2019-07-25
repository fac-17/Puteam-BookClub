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
