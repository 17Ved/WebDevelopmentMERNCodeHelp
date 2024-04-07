// example of synchronous code
function sync() {
  console.log("first");
}

sync();

console.log("second");

// example of asynchronous code ----------------------

setTimeout(function () {
  // lastly this line
  console.log("settimeout function");
}, 3000);

function sync2() {
  // sync2 will execute first
  console.log("first");
}
sync2();

console.log("third"); // then this line

// Promise -------------------------------

let myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("I am inside promise");
  }, 5000);
  resolve(2855); // here we're explicitly saying that promise is resolved
  reject(new Error("Throwing Errorrrr!!!")); // explicitly rejecting promise and returning error
});

let myPromise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("I am inside promise1");
  }, 3000);
  resolve(2855); // here we're explicitly saying that promise is resolved
  reject(new Error("Throwing Errorrrr!!!")); // explicitly rejecting promise and returning error
});
console.log("First");

// then() & catch() method on promise -
let myPromise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("I am inside promise2");
  }, 6000);
  resolve(341341); //- then executes for resolve
  reject(new Error("Unknown Error Occured"));
});

myPromise2.then((value) => {
  console.log(value);
});
myPromise2.catch((error) => {
  console.log(error);
});

// executing 1 promise after another one.
let prom1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("SetTimeout inside prom1");
  }, 2000);
  resolve(true);
});

prom1
  .then(() => {
    let prom2 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log("SetTimeout inside prom2");
      }, 3000);
      resolve("Prom 2 resolved successfully");
    });
    return prom2;
  })
  .then((value) => console.log(value));

// async and await
async function abcd() {
  return 17;
}

async function utility() {
  let mhweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Maharashtra is Cool");
    }, 10000);
  });

  let Gjweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Gujarat is Hot");
    }, 20000);
  });

  let mw = await mhweather;
  let gw = await Gjweather; // this line won't get executed until above line executes successfully.

  return [mw, gw];
}

// Fetch API -------------------(GET call / retrieving data)
// fetch api returns a promise.

async function util() {
  let content = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let output = await content.json(); // converting fetched data into json format.
  console.log(output);
}
util();

// (POST call / sending data - pushing data)

async function helper() {
  let options = {
    method: "POST",
    body: JSON.stringify({
      // converting json into string
      title: "Football", // data
      body: "Messi's Left Foot", // data
      userId: 10, // data
    }),
    headers: {
      // headers are - additional information sending (can't send inside body) / authentication and more.
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  // sending '//data' on below server - https://jsonplaceholder.typicode.com/posts
  let cont = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let respnse = cont.json();
  return respnse;
}

async function utili() {
  let ans = await helper();
  console.log(ans);
}

utili();

// closures -
// let name = "Safari";
function init() {
  let name = "mozilla"; // name is a local variable created by init
  function displayName() {
    // let name = "Chrome";
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable decalred in the parent function
  }
  displayName();
}
init();

// closure example 2 -
function outer() {
  let a = 5;
  function inner1() {
    let a = 3;
    console.log(a);
    function inner2() {
      let a = 7;
      console.log(a);
      function inner3() {
        console.log(a);
      }
      inner3();
    }
    inner2();
  }
  inner1();
}
// outer();
const ans = outer();
ans();
