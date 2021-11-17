const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");
// const decimal = document.querySelector(".decimal");

let firstValue = 0;
let operatorValue = 0;
let awaitingNextValue = false;

const sendNumberValue = (number) => {
  const displayValue = calculatorDisplay.textContent;
  calculatorDisplay.textContent =
    displayValue === "0" ? number : displayValue + number;
};

const addDecimal = () => {
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
};

const userOperator = (operator) => {
  const currentValue = Number(calculatorDisplay.textContent);
  if (!firstValue) {
    firstValue = currentValue;
  }
  operatorValue = operator;
  console.log("fistValue", firstValue);
  console.log("operator", operatorValue);
};

inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => userOperator(inputBtn.value));
  } else if (inputBtn.classList.contains("decimal")) {
    inputBtn.addEventListener("click", () => addDecimal());
  }
});

//reset display value
const resetAll = () => {
  firstValue = 0;
  operatorValue = 0;
  awaitingNextValue = false;
  calculatorDisplay.textContent = "0";
};
clearBtn.addEventListener("click", resetAll);

// decimal.addEventListener("click", decimalInput);
