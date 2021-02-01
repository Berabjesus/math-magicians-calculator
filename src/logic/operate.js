import Big from 'big.js'

const operate = (numberOne, numberTwo, operation) => {
  if (parseInt(numberTwo, 10) === 0) {return "You can't divide a number by zero"}

  numberOne = Big(numberOne)
  numberTwo = Big(numberTwo)
  let result = ''
  result = operation === '÷' ? numberOne.div(numberTwo) : 
  operation === 'x' ? numberOne.times(numberTwo) : 
  operation === '+' ? numberOne.plus(numberTwo) : 
  operation === '-' ? numberOne.minus(numberTwo) :
  operation === '%' ? numberOne.div(100) : null
  
  return result.toNumber() 
}

export default operate