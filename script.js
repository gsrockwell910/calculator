const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const equalsButton = document.querySelector("[data-equals]");
const currentOperandText = document.querySelector("[data-current-operand]");
const previousOperandText = document.querySelector("[data-previous-operand]");

class Calculator {
    constructor(currentOperandText, previousOperandText) {
        this.currentOperandText = currentOperandText;
        this.previousOperandText = previousOperandText;
        this.clearAll();
     };

     delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
     }

     clearAll() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = null;
     }

     displayNumber(number) { 
        if (number === "." && this.currentOperand.includes(".")) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
     } 

     computeExpression() {
        let results;
        const prev = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(curr)) { 
            return;
        } else if (this.operation === "+") {
            results = prev + curr;
        } else if (this.operation === "-") {
            results = prev - curr;
        } else if (this.operation === "*") {
            results = prev * curr;
        } else if (this.operation === "÷") {
            results = prev / curr;
        };
        this.currentOperand = results;
        this.operation = null;
        this.previousOperand = "";
     }

      pickOperation(operation) {

      }

      getDisplayNumber(number) {

      }

      update() {

      }
};

const calculator = new Calculator(currentOperandText, previousOperandText);

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.displayNumber(button.textContent);
        calculator.update();
    })
})

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.pickOperation(button.textContent);
        calculator.update();
    })
})

allClearButton.addEventListener("click", button => {
    calculator.clearAll();
    calculator.update();
});

deleteButton.addEventListener("click", button => {
    calculator.delete();
    calculator.update();
});

equalsButton.addEventListener("click", button => {
    calculator.computeExpression();
    calculator.update();
});