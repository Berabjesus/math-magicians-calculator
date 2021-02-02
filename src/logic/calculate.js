import operate from './operate';

const calculate = (dataset, buttonName) => {
  if (!dataset) { return false; }
  let { total, next, operation } = dataset;
  switch (buttonName) {
    case '=':
      return next ? total = operate(total, next, operation) : total;
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
      return total.includes('.') ? total : total += buttonName;
    case '÷': case 'x': case '+': case '-': case '%':
      total = operate(total, next, operation);
      break;
    default:
      total = null;
      break;
  }
  return total;
};

export default calculate;
