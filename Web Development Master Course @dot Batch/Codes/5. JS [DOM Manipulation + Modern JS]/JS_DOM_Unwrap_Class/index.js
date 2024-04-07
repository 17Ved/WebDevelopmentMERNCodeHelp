const countValue = document.querySelector("#counter");

function increment() {
  let value = parseInt(countValue.innerText); // converting fetched string val. from counter to int, in order to increment it.
  value = value + 1;
  countValue.innerText = value;
}

function decrement() {
  let value = parseInt(countValue.innerText); // converting fetched string val. from counter to int, in order to decrement it.
  value = value - 1;
  countValue.innerText = value;
}
