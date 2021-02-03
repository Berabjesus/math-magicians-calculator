import operate from './operate';

const calculate = (dataset, buttonName) => {
  if (!dataset) { return false; }
  let { total, next, operation } = dataset;
  
  if (isNaN(buttonName)) {
    switch (buttonName) {
      case '=':
        return next ? operate(total, next, operation) : total;
      case 'AC':
        total = null;
        next = null;
        operation = null;
        break;
      case '+/-':
        total *= -1;
        next *= -1;
        break;
      case '.':
        if (total.includes('.')) {
          return total;
        }
        total += buttonName;
        return total;
  
      case '÷': case 'x': case '+': case '-': case '%':
        total = operate(total, next, operation);
        break;
      default:
        total = null;
        break;
    }
  } else {
    console.log(total);
    
    total = buttonName
  }
  return {total: total, next: next, operation: operation};
};

export default calculate;
