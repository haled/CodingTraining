//********************
//* UI Functions     *
//********************

  function clearDisplay() {
    document.getElementById('display').value = 0;
    clearState();
  }

  function numberClick(callingButton) {
    var currentDisplayValue = document.getElementById('display').value;
    if(currentDisplayValue === "0") {
      currentDisplayValue = callingButton.value;
    }
    else {
      currentDisplayValue += callingButton.value;
    }
    document.getElementById('display').value = currentDisplayValue;
  }

  function operatorClick(functionName) {
    if(!doingOperation) {
      activateOperation(functionName, document.getElementById('display').value);
      document.getElementById('display').value = 0;
    }
  }

  function enterClick() {
    currentDisplayValue = document.getElementById('display').value;
    document.getElementById('display').value = performOperation(currentDisplayValue).toString();
  }

//************************
//* Calculator Functions *
//************************
  var doingOperation = false;
  var operand1 = null;
  var operand2 = null;
  var operator = null;

  function clearState() {
    doingOperation = false;
    operand1 = null;
    operand2 = null;
    operator = null;
  }

  function activateOperation(operatorValue, operandValue) {
    if(!doingOperation) {
      operand1 = operandValue;
      operator = operatorValue;
      doingOperation = true;
    }
  }

  function performOperation(operand2Value) {
    var result = null;

    if(doingOperation) {
      operand2 = operand2Value;

      var fn = window[operator];
      result = fn(convertValue(operand1),convertValue(operand2));

      doingOperation = false;
    }
    else {
      result = operand2Value;
    }
    return result;
  }

  function convertValue(stringValue) {
    if(stringValue.indexOf('.') != -1) {
      return parseFloat(stringValue);
    }
    else {
      return parseInt(stringValue);
    }
  }

  function adder(a,b) {
    return a + b;
  }
  
  function subtractor(a,b) {
    return a - b;
  }

  function multiplier(a,b) {
    return a * b;
  }

  function divisor(a,b) {
    return a / b;
  }


