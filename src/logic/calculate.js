import operate from './operate'

const calculate = ({total, next, operation}, buttonName) => {
  if(buttonName === '='){return total}
  total = buttonName === 'AC' ? (total = 0, next = 0, operation = '') : 
  buttonName === '+/-' ? (total *= -1, next *= -1) : 
  buttonName === '.' ? total += buttonName : 
  ['÷', 'x', '+', '-', '%'].some(()=>buttonName) ? operate(total, next, operation) : null
  return total
}

export default calculate
