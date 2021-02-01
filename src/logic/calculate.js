import operate from './operate';

const calculate = (dataset, buttonName) => {
  if (!dataset) { return false; }

  let { total, next, operation } = dataset;
  switch (buttonName) {
    case '=':
      return total;
    case 'AC':
      total = 0;
      next = 0;
      operation = '';
      break;
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '.':
      total += buttonName;
      break;
    case '÷': case 'x': case '+': case '-': case '%':
      total = operate(total, next, operation);
      break;
    default:
      total = '';
      break;
  }
  return total;
};

export default calculate;
