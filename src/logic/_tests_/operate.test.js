import operate from '../operate';

describe('operation Functionalities', () => {
  // let [firstNum, secondNum, operation];

  it('should return "You cant divide a number by zero" warning when trying to devide a number by zero', () => {
    const result = operate(null, '+');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
