var choices = [];

// Event trigers on key input
document.querySelector(".form--input").addEventListener("keyup", function(e) {
  var searchInput = document.querySelector(".form--input").value;
  choices = frontCall(searchInput);
  populateChoices();
});

// Event triggers on form submit
document.querySelector(".form").addEventListener("submit", function(e) {
  e.preventDefault();
  var searchInput = document.querySelector(".form--input").value;
  apiCall(searchInput);
});

// TEMPORARY FUNCTION TO POPULATE SUGESTIONS LIST
 // ["ajllo", "ajck", "ajie", "ajfhryg", "ajdiauwfherufh"];

const autoContainer = document.querySelector(".autocomplete");
const autoContainerItems = document.querySelector(".autocomplete-items");

const populateChoices = function() {

  while (autoContainer.firstChild) {
    autoContainer.removeChild(autoContainer.firstChild);
  }

  for (let i = 0; i < choices.length; i++) {

    var newChoice = document.createElement("a");
    newChoice.textContent = choices[i];
    newChoice.className = "autocomplete-items";
    newChoice.setAttribute("href", "http://www.lolonline.ca/image/cache/data/Screen%20Shot%202012-08-03%20at%2010.55.10%20AM-750x750.png");
    newChoice.setAttribute("target", "blank");
    autoContainer.appendChild(newChoice);
  }
}
