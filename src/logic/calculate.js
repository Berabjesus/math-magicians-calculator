/* eslint-disable no-unused-expressions */

import operate from './operate';

const stripLeadingZeros = number => {
  if (number) {
    if (number.toString().includes('.') || number === "You can't divide a number by zero") {
      return number.toString();
    }
    return parseFloat(number, 10).toString();
  }
  return null;
};

const calculate = (dataset, buttonName) => {
  if (!dataset) { return { total: null, next: null, operation: null }; }
  let { total, next, operation } = dataset;

  if (!parseInt(buttonName, 10) && buttonName !== '0') {
    if (!total) {
      return dataset;
    }
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
        if (!total && !next) {
          return false;
        }
        if (operation) {
          if (next.includes('.')) {
            return next;
          }
          next += buttonName;
        } else {
          if (total.includes('.')) {
            return total;
          }
          total += buttonName;
        }
        break;
      case '÷': case 'x': case '+': case '-':
        operation = buttonName;
        break;
      case '%':
        if (!total && !next) {
          return false;
        }

        if (next) {
          next = operate(next, '100', buttonName);
        } else {
          total = operate(total, '100', buttonName);
        }
        break;
      default:
        total = null;
        break;
    }
  } else if (operation && operation !== '=') {
    next ? next += buttonName : next = buttonName;
  } else if (operation === '=') {
    total = buttonName;
    operation = null;
  } else {
    total ? total += buttonName : total = buttonName;
  }

  return { total: stripLeadingZeros(total), next: stripLeadingZeros(next), operation };
};

export default calculate;
