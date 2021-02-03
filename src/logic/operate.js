import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);
  let result;
  switch (operation) {
    case '÷':
      if (parseInt(secondNumber, 10) === 0) { return "You can't divide a number by zero"; }
      result = firstNumber.div(secondNumber);
      break;
    case 'x':
      result = firstNumber.times(secondNumber);
      break;
    case '+':
      result = firstNumber.plus(secondNumber);
      break;
    case '-':
      result = firstNumber.minus(secondNumber);
      break;
    case '%':      
      result = firstNumber.div(secondNumber);      
      break;
    default:
      result = null;
      break;
  }

  return result.toNumber();
};

export default operate;
