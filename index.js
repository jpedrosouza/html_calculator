var input = document.getElementById("input");

var getFirstValue = false;
var operation = "";
var val1 = 0;
var val2 = 0;

document.getElementById("multiplication").addEventListener("click", () => {
  getValue("multiplication");
});

document.getElementById("subtraction").addEventListener("click", () => {
  getValue("subtraction");
});

document.getElementById("addition").addEventListener("click", () => {
  getValue("addition");
});

document.getElementById("division").addEventListener("click", () => {
  getValue("division");
});

document.getElementById("calculate").addEventListener("click", () => {
  calculate();
});

function getValue(chosed_operation_button) {
  if (!getFirstValue) {
    operation = chosed_operation_button;
    val1 = parseInt(input.value, 10);
    input.value = "";
    getFirstValue = true;
  } else {
    val2 = parseInt(input.value, 10);
    calculate();
  }
}

function calculate() {
  var result = 0;

  if (getFirstValue) {
    val2 = parseInt(input.value, 10);
  }

  switch (operation) {
    case "multiplication":
      result = val1 * val2;
      break;
    case "subtraction":
      result = val1 - val2;
      break;
    case "addition":
      result = val1 + val2;
      break;
    case "division":
      result = val1 / val2;
      break;
  }

  getFirstValue = false;

  input.value = result;
}
