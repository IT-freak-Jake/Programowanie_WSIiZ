let display = document.getElementById('display');
let currentExpression = '';

function appendToDisplay(value) {
  currentExpression += value;
  display.innerText = currentExpression;
}

function clearDisplay() {
  currentExpression = '';
  display.innerText = '';
}

function deleteLastCharacter() {
  currentExpression = currentExpression.slice(0, -1);
  display.innerText = currentExpression;
}

function calculateResult() {
  try {
    let result = eval(currentExpression);
    currentExpression = String(result);
    display.innerText = currentExpression;
  } catch (error) {
    display.innerText = 'Error';
  }
}
