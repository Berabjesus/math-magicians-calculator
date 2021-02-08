import React from 'react'
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
      <aside>
        <h2>Lets do some math!</h2>
      </aside>
      <div className='h-100 ml-auto calc-container'>
        <Display result={state.next ? state.next : state.total} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </section>
  );
};

export default Calculator