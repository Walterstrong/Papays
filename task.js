console.log("1-case");

var x = 5;

function example() {
  var y = 10;
  var x = 0;
  console.log("x", x);
  console.log("y", y);
}

example();

console.log("outside scope", x);

console.log("----------------------");

console.log("2-case");

var a = 5;

if (true) {
  var a = 10;
  console.log("inside of condition", a);
}

console.log("outside scope", a);
