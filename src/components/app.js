/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = React.useState({ total: null, next: null, operation: null });

  const handleClick = buttonName => {
    setState(calculate(state, buttonName));
  };

  return (
    <>
      <Display result={state.next ? state.next : state.total} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
