// adding hundred para

const t1 = performance.now();
for (let i = 1; i < 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para" + i;

  document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("This took " + (t2 - t1) + "ms");

// optimizing above code ------------------------------------------
const t3 = performance.now();
let myDiv = document.createElement("div");

for (let i = 1; i < 100; i++) {
  let element = document.createElement("p");
  element.textContent = "This is para" + i;

  myDiv.appendChild(element);
}

document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("This optimized code took " + (t4 - t3) + "ms");

// enhancing above code using document fragment --------------------

let fragment = document.createDocumentFragment();
for (let i = 1; i < 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para" + i;

  fragment.body.appendChild(newElement);
}
document.body.appendChild(fragment); // Single Reflow and Single Repaint

// ------------------------------------------------------------------
function addPara() {
  let para = document.createElement("p");
  para.textContent = "Js is Single Threaded Lang. ^_^ ";
  document.body.appendChild(para);
}

function appendNewMsg() {
  let para = document.createElement("p");
  para.textContent = "Waasssuuuupppp";
  document.body.appendChild(para);
}

addPara();
appendNewMsg();

// setTimeout -------------------------------------------------------
