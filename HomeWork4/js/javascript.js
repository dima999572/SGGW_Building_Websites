class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = "";
  }

  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand += number;
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    if (
      isNaN(this.previousOperand) ||
      this.previousOperand == "" ||
      isNaN(this.currentOperand) ||
      this.currentOperand == ""
    )
      return;
    switch (this.operation) {
      case "%":
        this.currentOperand =
          parseFloat(this.previousOperand) % parseFloat(this.currentOperand);
        break;
      case "÷":
        this.currentOperand =
          parseFloat(this.previousOperand) / parseFloat(this.currentOperand);
        break;
      case "×":
        this.currentOperand =
          parseFloat(this.previousOperand) * parseFloat(this.currentOperand);
        break;
      case "-":
        this.currentOperand =
          parseFloat(this.previousOperand) - parseFloat(this.currentOperand);
        break;
      case "+":
        this.currentOperand =
          parseFloat(this.previousOperand) + parseFloat(this.currentOperand);
        break;
      default:
        return;
    }
    this.operation = "";
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    if (isNaN(number) || number == "") return "";
    return parseFloat(number)
      .toFixed(4)
      .replace(/[.]?0+$/, "")
      .toLocaleString();
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    this.previousOperandTextElement.innerText = this.getDisplayNumber(
      this.previousOperand
    );
    if (this.operation !== null) {
      this.previousOperandTextElement.innerText =
        this.getDisplayNumber(this.previousOperand) + " " + this.operation;
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
