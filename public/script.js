// Event trigers on key input
document.querySelector(".form--input").addEventListener("keydown", function(e) {
  var searchInput = document.querySelector(".form--input").value;
  console.log(searchInput);
  frontCall(searchInput);
});

// Event triggers on form submit
document.querySelector(".form").addEventListener("submit", function(e) {
  e.preventDefault();
  var searchInput = document.querySelector(".form--input").value;
  apiCall(searchInput);
});
