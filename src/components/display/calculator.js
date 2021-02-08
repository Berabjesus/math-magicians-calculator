import React from 'react';
import Display from '../calculator/display';
import ButtonPanel from '../calculator/button_panel';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [state, setState] = React.useState({ total: null, next: null, operation: null });

  const handleClick = buttonName => {
    setState(calculate(state, buttonName));
  };

  return (
    <section className="d-flex pt-3">
      <div className="h-100 mx-auto calc-container">
        <Display result={state.next ? state.next : state.total} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </section>
  );
};

export default Calculator;
