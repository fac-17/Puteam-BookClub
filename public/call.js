// let input = document.querySelector(".form--input").value;
let xhr = new XMLHttpRequest();
// let url = `search=${input}`;

const frontCall = (searchInput) => {
 var url = `search=${searchInput}`;
 console.log('search input: ', searchInput);
xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let frontObj = JSON.parse(xhr.responseText);
  } else {
    console.error(xhr.responseText);
  }

  }
  xhr.open("GET", url, true);
  xhr.send();

};
