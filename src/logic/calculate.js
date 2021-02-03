import operate from './operate';

const calculate = (dataset, buttonName) => {
  if (!dataset) { return false; }
  let { total, next, operation } = dataset;

  if (!parseInt(buttonName, 10) && buttonName !== '0') {    
    switch (buttonName) {
      case '=':
        next && operation ? (total = operate(total, next, operation), next = null, operation = '=') : null;
        break;
      case 'AC':
        total = 0;
        next = null;
        operation = null;
        break;
      case '+/-':
        next ? next *= -1 : total *= -1;
        break;
      case '.':
        if (total.includes('.')) {
          return total;
        }
        total += buttonName;
        return total;

      case '÷': case 'x': case '+': case '-': 
        // operation ? total = operate(total, next, operation) :

        operation = buttonName;
        break;
      case '%':        
        total = operate(total, '100', buttonName)
        break;
      default:
        total = null;
        break;
    }
  } else if (operation && operation !== '=') {
    next ? next +=  buttonName : next = buttonName;
  } else if (operation === '=') {
    total = buttonName;
    operation = null;
  } else {
    total ? total += buttonName : total = buttonName;
  }
  console.log(total, next, operation);

  return { total: stripLeadingZeros(total), next: stripLeadingZeros(next), operation };
};

const stripLeadingZeros = number => {
  return number ? parseFloat(number, 10) : null
}
export default calculate;
