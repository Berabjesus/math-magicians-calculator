const Big = require('big.js')

const operate = (numberOne, numberTwo, operation) => {
  numberOne = Big(numberOne)
  numberTwo = Big(numberTwo)
  
}

operate(12.5345345345345,33,'-')
