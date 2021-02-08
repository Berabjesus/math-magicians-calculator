import calculate from '../calculate';

describe('Button Functionalities', () => {
  let state;

  beforeEach(() => {
    state = {
      total: '2',
      next: '3',
      operation: 'x',
    };
  });

  it('should return null for all values if state is null or not given', () => {
    const result = calculate(null, '+');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should return 0 for total and null for next and operation when AC is clicked', () => {
    const result = calculate(state, 'AC');
    expect(result).toEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });

  it('should return 6 when = is clicked', () => {
    const result = calculate(state, '=');
    expect(result).toEqual({
      total: '6',
      next: null,
      operation: '=',
    });
  });

  it('should return -3 for the next value', () => {
    const result = calculate(state, '+/-');
    expect(result).toEqual({
      total: '2',
      next: '-3',
      operation: 'x',
    });
  });

  it('should return 3. for the next value', () => {
    const result = calculate(state, '.');
    expect(result).toEqual({
      total: '2',
      next: '3.',
      operation: 'x',
    });
  });

  it('should return 0.3 for the next value', () => {
    const result = calculate(state, '%');
    expect(result).toEqual({
      total: '2',
      next: '0.03',
      operation: 'x',
    });
  });

  it('should return 6 for the total value', () => {
    const result = calculate(state, '=');
    expect(result).toEqual({
      total: '6',
      next: null,
      operation: '=',
    });
  });

  it('should return 5 for the total value', () => {
    state.operation = '+';
    const result = calculate(state, '=');
    expect(result).toEqual({
      total: '5',
      next: null,
      operation: '=',
    });
  });

  it('should return 0.6666666666666666 for the total value', () => {
    state.operation = '÷';
    const result = calculate(state, '=');
    expect(result).toEqual({
      total: '0.6666666666666666',
      next: null,
      operation: '=',
    });
  });

  it('should return -1 for the total value', () => {
    state.operation = '-';
    const result = calculate(state, '=');
    expect(result).toEqual({
      total: '-1',
      next: null,
      operation: '=',
    });
  });

  it('should return -1 for the total value', () => {
    state.operation = '-';
    const result = calculate(state, '=');
    expect(result).toEqual({
      total: '-1',
      next: null,
      operation: '=',
    });
  });
});
