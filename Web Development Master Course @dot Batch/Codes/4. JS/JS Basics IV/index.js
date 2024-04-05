console.log("Hi there");

function run() {
  console.log("running function");
}
run();
// if you call your run function after function declaration
// or before declaration, it'll run.
// the process is called - Hoisting
// process of moving function declaration to the top of file
// this is done automatically by js engine while executing code.


// function assignment / Named function assignment
let stand = function walk() {
  console.log("walking");
};
// creating same function as above but assiging it to the variable
stand(); // now you cannot call this function using it's name, i.e. walk
// you've to use variable name to call it.
// hoisting can't be performed on function assignment
let jump = stand;
jump();

// Anonymous function assignment
let stand2 = function () {
  console.log("standing");
};
stand();

function sum(a, b) {
  console.log(arguments); // will print object
  return a + b;
}
// console.log(sum(1,2));

let ans = sum(1, 2, 3, 4, 5, 6);

function sum2(a, b) {
  let total = 0;
  for (let value of arguments) {
    // iterating through arguments that we've passed
    total = total + value; // and storing their total in total variable
  }
  return total;
}
let ans2 = sum2(3, 2, 5, 6, 9);
console.log(ans2);

// Rest operator(argument / parameter) -> (...)

function sm(num, num1, ...arguments) {
  console.log(arguments);
}
sm(1, 2, 3, 4, 5, 7); // makes an array of arguments

// after writing rest operator (argument), you cannot add any arguments further.
// rest parameter should be last parameter.

function sum3(...theArgs) {
  let total1 = 0;
  for (const arg of theArgs) {
    total1 = total1 + arg;
  }
  return total1;
}

console.log(sum3(1, 2, 3));

console.log(sum3(1, 2, 3, 4));

// Default parameters
function interest(p, r = 6, y = 9) {
  return (p * r * y) / 100;
}

console.log(interest(1000, 8));
// console.log(interest(1000, undefined, 8));

// suppose if user doesn't pass any value to the function,
// we want to use default value in such case so, we'll use default parameters

// we've a rule in default parameter that - if you decalre r = 6, then all parameter to it's right
// should be default parameter.

// getter and setter
/* let person = {
  fname : 'lionel',
  lname : 'messi'
};

console.log(person);

function fullname(){
  return `${person.fname} ${person.lname}`;
} */
// right now above function is read only function
// using getter method
let person = {
  fname: "lionel",
  lname: "messi",

  get fullname() {
    // getter implementation
    return `${person.fname} ${person.lname}`;
  },

  set fullname(value) {
    // setter implementation

    if (typeof value !== String) {
      throw new Error("You have not entered string value");
    }
    let parts = value.split(" "); // here our parts is now array
    this.fname = parts[0]; // so parts[0]
    this.lname = parts[1]; // and parts[1]
  },
};

// console.log(fullname());
// console.log(person.fullname);   // in this way you're calling getter method only

// now calling setter method
// person.fullname = ('Neymar Junior');
// console.log(person.fullname);

// error handling - try and catch block
// try contains code to run, and if any error happens in try block
// catch block catches that error and throws it.

try{
  person.fullname = true;       // line 144
}
catch(e){
  alert(e);
  // alert ('You entered wrong value');
}
console.log(person.fullname);


// scope

{
  // this code block will give you error
  let a = 17; // because lifetime of 'let' is within that codeblocks
}
// console.log(a);

{
  // this will print value of b
  var b = 10; // because lifetime of 'var' is throughout the file / function.
}
console.log(b);

function temp() {
  // this won't print c, 'cause c is outside of it's scope
  var c = 80;
}
console.log(c);
