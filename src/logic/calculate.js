import operate from './operate'

const calculate = ({total, next, operation}, buttonName) => {
  if(buttonName === '='){return total}
  buttonName === 'AC' ? (total = 0, next = 0, operation = '') : 
  buttonName === '+/-' ? (total *= -1, next *= -1) : 8
  buttonName === '.' ? total += buttonName : 
  ['÷', 'X', '+', '-', '%'].some(buttonName) ? operate(total, next, operation) : null
  return total
}

export default calculate
