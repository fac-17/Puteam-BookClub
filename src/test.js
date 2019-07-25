const handler = require("./handler.js");
const test = require("tape");

test("Tape is working", function(t) {
  t.pass("tape is working");
  t.end();
});

test("Check filterResults returns an array", function(t) {
  const movieObj = {
    results: [
      { title: "lion king" },
      { title: "snow white" },
      { title: "shrek" }
    ]
  };
  const actual = Array.isArray(handler.filterResults(movieObj));
  const expected = true;
  t.equal(actual, expected, "Function should return an array");
  t.end();
});
