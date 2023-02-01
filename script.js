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

     }

     clearAll() {

     }

     displayNumber(number) { 

     } 

     computeExpression() {

     }

      pickOperation(operation) {

      }

      getDisplayNumber(number) {

      }

      update() {
        
      }

};