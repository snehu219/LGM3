let display = document.getElementById('display');

function updateDisplay(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function deleteDigit() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let expression = display.value;
  let result = eval(expression);
  display.value = result;
}
