

// Event triggers on form submit
document.querySelector(".form").addEventListener("submit", function(e) {
  e.preventDefault();
  var searchInput = document.querySelector(".form--input").value;
  apiCall(searchInput);
})
