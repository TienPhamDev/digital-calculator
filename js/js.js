const calculator = document.querySelectorAll(".calculator")[0];
const calculatorBTN = calculator.children;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
calculator.addEventListener("click", (e) => {
  for (let i = 0; i < calculatorBTN.length; i++) {
    
    if (e.target.textContent === calculatorBTN[i].name) {
      calculatorBTN[0].value += e.target.textContent;
    } 
  }
  if (e.target.textContent === "=") {
    const numString = calculatorBTN[0].value;
    
  }
  if (e.target.textContent === "AC") {
    calculatorBTN[0].value = 0;
   }
 });