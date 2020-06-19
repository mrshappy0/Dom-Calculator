console.log(document);
document.addEventListener("click", function(event) {
  let id = event.target.dataset.toggleId;
  if (!id) return;
  let elem = document.getElementById(id);

  elem.hidden = !elem.hidden;
});

let buttons = document.querySelector(".buttons");
let screen = document.querySelector("#screen");

let operand1 = "";
let operand2 = "";
let results = 0;
let operandBool = true;

buttons.addEventListener("click", event => {
  // console.log("hit", operand1)
  let buttonNumber = event.target.innerText;
  let buttonOperator = event.target.className;
  let equalsOrClear = event.target.id;

  if (operandBool && operand1 == "" && buttonOperator == "") {
    operand1 = buttonNumber;
    screen.innerText += operand1
    console.log("operand1", operand1);
  } else if (operandBool && operand1 != "" && buttonOperator == "") {
    operand1 += buttonNumber;
    screen.innerText = operand1
    console.log("after operand1", operand1);
  } else if (!operandBool && buttonOperator == "" && operand2 == "") {
    operand2 = buttonNumber;
    screen.innerText += operand2
    console.log("operand2", operand2);
  } else if (!operandBool && operand2 != "" && buttonOperator == "") {
    operand2 += buttonNumber;
    screen.innerText = operand2
    console.log("after operand2", operand2);
  } else if (buttonOperator == "operator" && equalsOrClear == "") {
    operandBool = false;
    operator = buttonNumber;
    screen.innerText += operator
    console.log("switch", operator);
  } else if (equalsOrClear == "equals") {
    console.log(equalsOrClear);
    parseInt(operand1) + parseInt(operand1);
    operand1 = parseInt(operand1);
    operand2 = parseInt(operand2);
    operand1 = calculateExpression(operator, operand1, operand2);
    console.log(typeof operand1)
    operand2 = "";
    operandBool = true;
    screen.innerText = operand1
  } else if (equalsOrClear == "clear") {
    console.log("hit");
    operand1 = "";
    operand2 = "";
    operandBool = true;
    screen.innerText = ""
  }
});

function calculateExpression(operator, operand1, operand2) {
  let results = 0;
  switch (operator) {
    case "+":
      results = operand1 + operand2;
      console.log(results);
      break;
    case "-":
      results = operand1 - operand2;
      console.log(results);
      break;
    case "÷":
      results = operand1 / operand2;
      console.log(results);
      break;
    case "x":
      results = operand1 * operand2;
      console.log(results);
      break;
    default:
      results = "Error!";
      break;
  }
  return results;
}
