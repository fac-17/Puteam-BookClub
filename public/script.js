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


// TEMPORARY FUNCTION TO POPULATE SUGESTIONS LIST
const tempChoices = ['ajllo', 'ajck', 'ajie', 'ajfhryg', 'ajdiauwfherufh']
const autoContainer = document.querySelector(".autocomplete");
const autoContainerItems = document.querySelector(".autocomplete-items");

for (let i=0; i<tempChoices.length; i++) {

  var newChoice = document.createElement('div')
  newChoice.textContent = tempChoices[i];
  newChoice.className = 'autocomplete-items'
  autoContainer.appendChild(newChoice);

}
