// below is the syntax for fetching element(slider), we've defined
// fetching element through custom attribute - data-Lengthslider
const inputSlider = document.querySelector("[data-Lengthslider]");
const lengthDisplay = document.querySelector("[data-lenthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copymessage]");
const upperCaseCheck = document.querySelector("#upperCase");
const lowerCaseCheck = document.querySelector("#lowerCase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateButton = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={}[]|:;"<,>.?/';
// symbols string for generating random symbols from above.
// ----------------------------------------------------------

// initially setting these values
let password = "";
let passwordLength = 10;
let checkCount = 0;
// set strength color to grey;
setIndicator("#ccc");

// ----------------------------------------------------------
// functions we'll need for overall functioning of website - (modules we'll need)

// copyContent()
// handleSlider()
// generatePassword()
// setIndicator() -> circle color/Shadow
// getRandomInteger()
// getRandomUppercase()
// getRandomLowercase()
// getRandomNumbers()
// getRandomSymbols()
// colorStrength()

// ----------------------------------------------------------

// sets password length
// update UI on basis of PasswordLength
function handleSlider() {
  // setting slider's value initially at 10
  inputSlider.value = passwordLength;
  lengthDisplay.innerText = passwordLength;

  const min = inputSlider.min;
  const max = inputSlider.max;

  inputSlider.style.backgroundSize =
    ((passwordLength - min) * 100) / (max - min) + "% 100%";
}
handleSlider();

// ----------------------------------------------------------

function setIndicator(color) {
  indicator.style.backgroundColor = color;
  // shadow
  indicator.style.boxShdow = `0px 0px 12px 1px ${color}`;
}

// ----------------------------------------------------------

/* setting number from min to max */
function getRndInteger(min, max) {
  // only Math.random() will give you random no.s between 0 and 1
  // but if you do Math.random() * (max - min); it'll give you random no.s within you (max - min) range.
  // there is a possiblity that we'll get float no. - so we'll round off our math.random using math.floor()
  return Math.floor(Math.random() * (max - min) + min);
}

// ----------------------------------------------------------

function generateRandomNumber() {
  return getRndInteger(0, 9); // random numbers from 0 to 9 / referencing getRndInteger function
}

// ----------------------------------------------------------

function generateLowerCase() {
  return String.fromCharCode(getRndInteger(97, 123)); // random lowercase letters from 'a' to 'z' (provided ASCII values - 97 to 123)
  // and then converting them into characters using String.fromCharCode() method
}

// ----------------------------------------------------------

function generateUpperCase() {
  return String.fromCharCode(getRndInteger(65, 91)); // random uppercase letters from 'A' to 'Z' (provided ASCII values - 65 to 91)
  // and then converting them into characters using String.fromCharCode() method
}

// ----------------------------------------------------------

function generateSymbol() {
  const randomN = getRndInteger(0, symbols.length);
  return symbols.charAt(randomN);
}

// ----------------------------------------------------------

function calculateStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNum = false;
  let hasSym = false;
  if (upperCaseCheck.checked) hasUpper = true;
  if (lowerCaseCheck.checked) hasLower = true;
  if (numbersCheck.checked) hasNum = true;
  if (symbolsCheck.checked) hasSym = true;
  // The checked property sets or returns the checked state of a checkbox.
  // This property reflects the HTML checked attribute.

  if (hasUpper && hasLower && hasNum && hasSym && passwordLength >= 8) {
    setIndicator("#0f0");
  } else if (
    (hasLower || hasUpper) &&
    (hasNum || hasSym) &&
    passwordLength >= 6
  ) {
    setIndicator("#ff0");
  } else {
    setIndicator("#f00");
  }
}

// ----------------------------------------------------------

// Copy to Clipboard ?
// await navigator.clipboard.writeText (passwordDisplay.value) is a statement that
// uses the clipboard API to write the generated password to the clipboard.

// The writeText() method of the clipboard interface writes the provided text to the clipboard.
// It returns a Promise that resolves when the text has been successfully written to the clipboard.

// By using the await keyword before the navigator.clipboard.writeText (passwordDisplay.value) statement,
// the code waits until the Promise resolves before moving on to the next line of code.
// This ensures that the password is successfully written to the clipboard before any further actions are taken.

// ----------------------------------------------------------

async function copyContent() {
  try {
    await navigator.clipboard.writeText(passwordDisplay.value);
    // copying/writing data-passwordDisplay's value into clipboard
    copyMsg.innerText = "Copied";
  } catch (error) {
    copyMsg.innerText = "Failed";
  }
  // to make our copied message visible (will be in effect after we add active class in our css file)
  copyMsg.classList.add("active");

  setTimeout(() => {
    // removing our active class after 3 sec. using settimeout()
    copyMsg.classList.remove("active");
  }, 3000);
}

// ----------------------------------------------------------

// adding eventlistener to all checkboxes - will use allCheckBox function -

function handlecCheckBoxChange() {
  checkCount = 0;
  allCheckBox.forEach((checkbox) => {
    if (checkbox.checked) checkCount++;
  });

  // special condition
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
}

allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", handlecCheckBoxChange);
});

// ----------------------------------------------------------

// eventlistener on slider
inputSlider.addEventListener("input", (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

// ----------------------------------------------------------

// eventlistener on copy button
copyBtn.addEventListener("click", () => {
  if (passwordDisplay.value) copyContent();
});

// ----------------------------------------------------------

// function to shuffle password
function shufflePassword(array) {
  // Fischer Yates method for shuffling password
  // you can apply it on array, & it'll shuffle it
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let str = "";
  array.forEach((el) => (str += el));
  return str;
}

// ----------------------------------------------------------

generateButton.addEventListener("click", () => {
  // if none of the checkbox are selected
  if (checkCount <= 0) return;

  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
  // for finding new password

  // remove old password
  password = "";

  // include stuff mentioned in checkboxes
  // if (upperCaseCheck.checked) {
  //   password += generateUpperCase();
  // }
  // if (lowerCaseCheck.checked) {
  //   password += generateLowerCase();
  // }
  // if (numbersCheck.checked) {
  //   password += generateRandomNumber();
  // }
  // if (upperCaseCheck.checked) {
  //   password += generateSymbol();
  // }

  let funcnArr = [];

  if (upperCaseCheck.checked) funcnArr.push(generateUpperCase);

  if (lowerCaseCheck.checked) funcnArr.push(generateLowerCase);

  if (numbersCheck.checked) funcnArr.push(generateRandomNumber);

  if (symbolsCheck.checked) funcnArr.push(generateSymbol);

  // compulsory addition
  for (let i = 0; i < funcnArr.length; i++) {
    password = funcnArr[i]();
  }

  // remaining addition
  for (let i = 0; i < passwordLength - funcnArr.length; i++) {
    let randIndex = getRndInteger(0, funcnArr.length);
    password += funcnArr[randIndex]();
  }

  // shuffling password
  password = shufflePassword(Array.from(password));

  // showing password
  passwordDisplay.value = password;

  // calculate strength
  calculateStrength();

  //--------------------------------------------------------
});
