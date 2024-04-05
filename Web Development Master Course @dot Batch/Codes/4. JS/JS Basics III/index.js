// primitive string example
let firstname = "messi";
console.log(firstname);
// typeof lastname
// 'string'
// If you use dot operator after primitive string, then JS will interpret it internally as object
// e.g. - firstname.

// object string example
let lastname2 = new String("Messi");
console.log(lastname2);
// typeof lastname2
// 'object'
// Here we're using String constructor function to create string object.

let message = "This is my first message";
let words = message.split(" ");
console.log(words);

// Template literal
// Traditional way below
let meg = "This is my \n first message";
let meg2 = 'This is my "first message"';
console.log(meg);
console.log(meg2);

// Using backticks - `` - template literal
let meg3 = `this is my 
template literal 
message`;
console.log(meg3);

let meg4 = `This is my firstname - ${firstname}`;
console.log(meg4);

// Date and time -

let date = new Date(); // current date and time
console.log(date);

let date2 = new Date("September 5 2001 06:00"); // current date and time
console.log(date2);

// new Date(year,month,day,hours)
let date3 = new Date(2001, 8, 5, 6);
console.log(date3);

date3.setFullYear(2000);
console.log(date3);

// Arrays -

let arrays = [4, 2, 1, 9, 2, "vedant", 92.91];

// Insertion in array -
// 3 ways - at the end, in the middle, in the beginning
arrays.push(78); // at the end
arrays.unshift(17); // beginning
arrays.splice(4, 0, 30); // in the middle - here (4,0,30) -> 4 is, at which index you want to insert, 0 is delete count, 30 element u want to insert.

console.log(arrays);

// array searching -
console.log(arrays.indexOf(30));
// if any element is not present in an array - then it's index will returned as -> -1

// check if any number exist in an array or not
if (arrays.indexOf(30) != -1) {
  // not good practice
  console.log("present");
} else {
  console.log("absent");
}

// good practice
console.log(arrays.includes(78));

console.log(arrays.indexOf(9, 2));
// here 9 is the element you want to search and 2 - determines that from 2nd index we want to search our value.

// Array of objects example -
let courses = [
  { roll: 10, name: "messi" },
  { roll: 17, name: "vedant" },
];
console.log(courses);

// we can't find index of this array objects by indexOf method -
console.log(courses.indexOf({ roll: 10, name: "messi" }));

// use includes method - but not good practice
console.log(courses.includes({ roll: 10, name: "messi" }));

// we use callback - functions for reference types - it's a good practice
let cor = courses.find(function (course) {
  return course.name === "messi";
});
console.log(cor);

// we can also use arrow function to make it more redable -
let cor2 = courses.find((course) => course.roll === 17);
console.log(cor2);

// Removing array elements
let arr = [4, 2, 1, 9, 2, "vedant", 92.91];

console.log(arr);
arr.pop(); // to remove last/end element of an array
arr.shift(); // to remove starting/beginning element of an array
arr.splice(2, 1); // here 2 is the index of element u want to delete, and 1 is no. of element you want to delete after that(2nd in this case) index.

console.log(arr);

// Emptying the array .
let no = [4, 2, 1, 9, 2, 92.91, 17, 30];
no2 = no; // if you do this operation - assigns your no array to no2, it'll print all elements, because we're working on reference types (so address will get stored)
console.log(no);
// no = [];    // this is one method to empty your array, by assigning that array to empty array, but not recommended.(line 122)
// console.log(no);
// console.log(no2);

// best practice to follow for emptying array is to use - .length = 0;
no.length = 0;
console.log(no);
console.log(no2);

// also using splice method you can empty whole array
// splice(from starting index 0, to last index - array.length)
no.splice(0, no.length);
console.log(no);

// Combining & Slicing Arrays
let first = [1, 2, 3, 4];
let second = [7, 8, 9];

let res = first.concat(second); // combining
console.log(res);

// slice method -
// slice(starting index, all elements excluding ending index)
let ser = res.slice(2, 4);
// let ser = res.slice(2);     // this line will slice all elements from 2nd index & print it.
// let ser = res.slice();          // this is called full slicing . all elements will get printed
console.log(ser);

// combining and slicing on objects -
let player = [
  //1st object
  { roll: 10, name: "messi" },
  { roll: 17, name: "KDB" },
];

let player2 = [
  //2nd object
  { roll: 7, name: "ronaldo" },
  { roll: 10, name: "neymar" },
];

let final = player.concat(player2);
console.log(final);

// let sl = final.slice(0,3);
// let sl = final.slice(2);
let sl = final.slice();
console.log(sl);

// Spread Operator - for concatenating purpose
let ar = [4, 5, 6, 7];
let br = [10, 20, 30];

let combine = [...ar, ...br]; // you can also insert element in this like below
// let combine = [...ar, true, 'l', ...br, 'm'];
console.log(combine);

let another = [...combine];
console.log(another);

// Iterating an Array
let arra = [90, 80, 70, 60, 50];
for (let i of arra) {
  // for-of
  console.log(i);
}

arra.forEach(function (i) {
  // for-each (for each loop needs callback function)
  console.log(i);
});

arra.forEach((i) => console.log(i)); // same above using arrow function

// Joining Arrays
let nums = [1, 2, 3, 4, 5];
const joined = console.log(nums.join(","));

// split method
let msgs = "This is my test message to everyone";
let parts = msgs.split(" "); // splitting on a basis of spaces, when there is a space - split that word
console.log(parts);

// sort array and reverse
let numsz = [34, 78, 11, 20, 22];
numsz.sort();
console.log(numsz);
numsz.reverse();
console.log(numsz);

// Filtering Arrays
// filter method - takes callback function
let nop = [1, 3, 4, -6, -9, -1];
// let filtered = nop.filter(function(val){
//   return val <= 0;
// });

let filtered = nop.filter((val) => val <= 0); // above filter function using arrow method
console.log(filtered);

// Mapping Arrays
// map method  -> maps each element of array to something else.
let po = [4, 5, 6, 7, 8, 10];
let items = po.map(function (val) {
  return "student_no" + val;
});
console.log(items);

// let items = po.map(val => 'student_no' + val);  // above map using arrow method

// Mapping with objects -
let yo = [10, 4, 7, -9, -1, -3];
// let fil = yo.filter((val) => val >= 0);
// let itm = fil.map(function (num) {
//   return { val: num };
// });

// let itm = fil.map(num => {val: num});  // above map of objects using arrow method

// chaining concept
let itm = yo
  .filter((val) => val >= 0)
  .map((num) => {
    val: num;
  });

console.log(itm);

// In above chaining example -
// first we are applying filter function on 'yo' array,
// then on that filtered array which is stored in 'fil' variable,
// we're applying .map method
// so it goes like yo -> filter method applied -> map method applied on filter method

// Reducing an array
let a = [1, 2, 3, 4, 5];
let total = 0;

for (let value of a) {
  total = total + value;
}
console.log(total);

let totalsum = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
// here the 0 determines the initialized value of accumulator (accumulator = 0)
// if we don't write '0' there, then -> your accumulator will point to first value of array
// and currentValue will point to the second value of array - so output, will be same in both cases.

// if we map the functioning of this accumulator and currentValue
// then accumulator = total and currentValue = value
// refer to the example - on line 354
console.log(totalsum);
