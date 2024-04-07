function eventList() {
  console.log("I have clicked on web page");
}

document.addEventListener("click", eventList);
document.removeEventListener("click", eventList);

const content = document.querySelector("#wrapper");

content.addEventListener("click", function (event) {
  console.log(event);
});

// preventDefault
let links = document.querySelectorAll("a");

let thirdlink = links[2];

thirdlink.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("happens");
});

/// ****************
let myDiv = document.createElement("div");

function paraStatus(event) {
  // console.log("I have clicked on para");
  console.log("Para " + event.target.textContent); // for maintaining individuality of para inside div
}
myDiv.addEventListener("click", paraStatus);
for (let i = 1; i <= 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is paragraph " + i;

  myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

/// *********
const ele = document.querySelector("#wrapper1");
ele.addEventListener("click", function (event) {
  if (event.target.nodeName === "SPAN") {
    console.log("Clicked on Span" + event.target.textContent);
  }
});
