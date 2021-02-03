import operate from './operate';

const calculate = (dataset, buttonName) => {
  if (!dataset) { return false; }
  let { total, next, operation } = dataset;

  if (Number.isNaN(buttonName)) {
    switch (buttonName) {
      case '=':
        next && operation ? (total = operate(total, next, operation), next = null, operation = '=') : null;
        break;
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
        // operation ? total = operate(total, next, operation) :

        operation = buttonName;

        break;
      default:
        total = null;
        break;
    }
  } else {
    if (operation && operation !== '=') {
      next ? next += buttonName : next = buttonName;
    } else if(operation === '=') {
      total = buttonName
      operation = null
    } else{
      total ? total += buttonName : total = buttonName;
    }
  }
  console.log(total, next, operation);

  return { total, next, operation };
};

export default calculate;
