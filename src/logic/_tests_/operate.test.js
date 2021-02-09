import operate from '../operate';

describe('operation Functionalities', () => {
  const [firstNum, secondNum] = [10, 20];

  it('should return "You cant divide a number by zero " warning when trying to devide a number by zero', () => {
    const result = operate(firstNum, 0, '÷');
    expect(result).toEqual("You can't divide a number by zero");
  });

  it('should return 200 "÷" is given as operator', () => {
    const result = operate(firstNum, secondNum, '÷');
    expect(result).toEqual(0.5);
  });

  it('should return 200 when "x" is given as operator', () => {
    const result = operate(firstNum, secondNum, 'x');
    expect(result).toEqual(200);
  });

  it('should return -10 when "-" is given as operator', () => {
    const result = operate(firstNum, secondNum, '-');
    expect(result).toEqual(-10);
  });

  it('should return 30 when "+" is given as operator.', () => {
    const result = operate(firstNum, secondNum, '+');
    expect(result).toEqual(30);
  });

  it('should return 200 when "%" is given as operator', () => {
    const result = operate(firstNum, 100, '%');
    expect(result).toEqual(0.10);
  });
});
