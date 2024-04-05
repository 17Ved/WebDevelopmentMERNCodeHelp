console.log("Lets start");

// object creation
const rectangle = {
  length: 1,
  breadth: 10,

  draw: function () {
    // if you're using function inside object, then it is called as method
    // using dot(.) operator, we can access properties and methods of an object.
    console.log("draw function");
  },
};

// Creating Factory Function -
function createReactangle(inputlen, inputbreadth) {
  const rectangle = {
    length: inputlen,
    breadth: inputbreadth,

    draw: function () {
      // if you're using function inside object, then it is called as method
      // using dot(.) operator, we can access properties and methods of an object.
      console.log("draw function");
    },
  };
  return rectangle;
}

// object creation using Factory function
let rectObject = createReactangle(10, 17);
let rectObject1 = createReactangle(78, 56);
let rectObject2 = createReactangle(11, 62);

// Creating Constructor Function -
// In constructor function we follow a notation called as Pascal Notation.
// means -> first letter of every word is capital. -> NumberofStudents
// Constructor function is a function which is defining/initializing your properties/methods.

// We use "this" keyword in constructor function.
// 'this' is used to determine current object, that you're working on.

function Rectangle(inputlen, inputbreadth) {
  this.length = inputlen;
  this.breadth = inputbreadth;
  this.draw = function () {
    console.log("drawing");
  };
}

// object creation using constructor function
let rectObjectcons = new Rectangle(45, 78);
rectObjectcons.color = "SkyBlue"; // dynamically adding properties to the object.
console.log(rectObjectcons);

delete rectObjectcons.color; // dynamically deleting properties of the object.
console.log(rectObjectcons);

// -------------------
// primitive example
let a = 10;
let b = a;

a++;
console.log(a);
console.log(b);

// ----------------------
// reference type example
let m = { value: 10 };
let n = m;

m.value++;

console.log(m.value);
console.log(n.value);

// ----------------------
let t = 10;

function inc(t) {
  t++;
}

inc(t);
console.log(t);

// ----------------------

let p = { value: 10 };

function inc(p) {
  p.value++;
}

inc(p);
console.log(p.value);

// -----------------------
// For - In loop

let square = {
  length: 30,
  breadth: 90,
};

for (let key in square) {
  // keys are reflected through 'key' variable.
  // values are reflected through 'square[key]' variable.
  console.log(key, square[key]); // printing key value pair of square object.
}

// For - Of Loop  - generally applied on iterables - arrays, string, maps, nodelist
// for(let key of square){
//   console.log(key);
// }
// alternative for above for of loop
for (let key of Object.keys(square)) {
  // object.entries
  console.log(key);
}

// how to check if any property is in object or not
if ("breadth" in square) {
  console.log("present");
} else {
  console.log("absent");
}

// object cloning -
// iteration
// assign
// spread

// iteration
let src = {
  a: 10,
  b: 17,
  c: 30,
};

let destination = {};

for (let key in src) {
  destination[key] = src[key];
}
console.log(destination);

// assign(method)
let src1 = {
  l: 40,
  m: 20,
  n: 10,
};

let src2 = {
  p: 25,
  q: 10,
  r: 50,
};

let destination1 = Object.assign({}, src1);
// let destination1 = Object.assign({}, src1, src2); // we can also clone/copy multiple object into single object.
console.log(destination1);

// spread
let src3 = {
  u: 15,
  v: 90,
  w: 110,
};

let destination3 = { ...src3 };
console.log(destination3);
