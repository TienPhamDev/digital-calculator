const calculator = document.querySelectorAll(".calculator")[0];
const calculatorBTN = calculator.children;


calculator.addEventListener("click", (e) => {
  for (let i = 0; i < calculatorBTN.length; i++) {
    
    if (e.target.textContent === calculatorBTN[i].name) {
      calculatorBTN[0].value += e.target.textContent;
    } 
  }
  if (e.target.textContent === "=") {
    const numString = calculatorBTN[0].value;
    
    let calculate = new Function('return ' + numString);
    calculatorBTN[0].value = calculate();
  }
  if (e.target.textContent === "AC") {
    calculatorBTN[0].value = "";
   }
 });