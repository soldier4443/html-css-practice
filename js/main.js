var colors = ["red", "blue", "green"];
// Same as above
// var colors = new Array('red', 'blue', 'green');
colors[3] = "yellow";
colors.push("purple");
// alert(colors);

var numbers = [5, 77, 6, "Seven"];
// alert(numbers);
numbers.sort();
// alert(numbers.length + ' ' + numbers);

// loop, conditional
for (var i = 0; i < 10; i++) {
  console.log("This is loop: " + i);
}

var numbers = [22, 33, 44, 124];
numbers.forEach(number => {
  if (number % 2 !== 0) {
    console.log(number - 1);
  }
});

numbers.forEach(number => {
  if (number % 2 == "0") {
    console.log(number * 2);
  }
});

// switch
var fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("I don't like bananas...");
    break;

  case "apple":
    console.log("I love bananas");
    break;

  default:
    console.log("Whatever... nevermind!");
    break;
}



// Object Literal
var person = {
  firstName: "John",
  lastName: "Lauman",
  age: 23,
  children: ["Brian", "Amanda"],
  address: {
    street: "428 Jam st.",
    city: "New york"
  },
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());


function Fruit(name, color, shape) {
  this.name = name;
  this.color = color;
  this.shape = shape;
  this.describe = function() {
    return name + " is " + color + " and " + shape + " shaped.";
  };
}


var apple = new Fruit('apple', 'red', 'round');

console.log(apple.describe());