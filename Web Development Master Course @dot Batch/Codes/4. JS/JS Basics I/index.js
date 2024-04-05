console.log("Hello there version 5.0");
// for comments

let a = 10;
// let a = 10;
let name1 = "lionel messi";
let bool = true;
console.log(a);
console.log(name1);
console.log(bool);

var c = 15;
// var c = 15;
console.log(c);

const number = 12;
// number = 17;
console.log(number);

let d;
console.log(d);

let n = 23; // example of dynamic typing
console.log(n);
n = "vedant";
n = 23.23;
console.log(n);

let names = ["vedant", "football", 10, 17]; // array
console.log(names);

// ternary operator - alternative of if/else condition
// Assigning values
let PMarks = 40;

// Ternary Operator
let result = PMarks > 47 ? "Pass" : "Fail";

console.log(result);

// operator precedence
console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36

let k;
let b;

console.log((k = b = 5));
// Expected output: 5

console.log(3 + 10 * 2); // 23
console.log(3 + 10 * 2); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order

// control statements
// if elseif else
let marks = 78;

if (marks > 90) {
  console.log("A");
} else if (marks >= 80) {
  console.log("B");
} else if (marks >= 70) {
  console.log("C");
} else if (marks >= 60) {
  console.log("D");
} else {
  console.log("E");
}

// switch case
let no = 2;
switch (no) {
  case 1:
    console.log("A");
    break;
  case 2:
    console.log("B");
    break;
  case 3:
    console.log("C");
    break;
  default:
    console.log("E");
    break;
}

// loops
for (let i = 0; i <= 5; i++) {
  console.log("vedant" + i);
}

let j = 0;
while (j < 5) {
  console.log("while", j);
  j++;
}

let m = 0;
do {
  console.log("dowhile", m);
  m++;
} while (m <= 5);

// for in loop
let square = {
  length: 30,
  breadth: 90,
};

for (let key in square) {
  console.log(key, square[key]);
}
