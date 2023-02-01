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
    };

    clearAll() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = null;
    };

    displayNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    };

    computeExpression() {
        let results;
        const prev = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(curr)) { 
            return;
        } else if (this.operation === "÷" && this.currentOperand === "0") {
            alert("Can not divide by zero!");
            this.currentOperand.delete();
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
    };

    pickOperation(operation) {
        if (this.currentOperand === "") return;
        if (this.previousOperand !== "") {
            this.computeExpression();
        };
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    };

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const intDigits = parseFloat(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];
        let intDisplay;
        if (isNaN(intDigits)) {
            intDisplay = "";
        } else {
            intDisplay = intDigits.toLocaleString("en", {
                maximumFractionDigits: 0
            });
        }
        if (decimalDigits != null) {
            return `${intDisplay}.${decimalDigits}`;
        } else {
            return intDisplay;
        }
    }

    update() {
        this.currentOperandText.textContent = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandText.textContent = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandText.textContent = "";
        };
    };
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

equalsButton.addEventListener("click", button => {
    calculator.computeExpression();
    calculator.update();
});

allClearButton.addEventListener("click", button => {
    calculator.clearAll();
    calculator.update();
});

deleteButton.addEventListener("click", button => {
    calculator.delete();
    calculator.update();
});