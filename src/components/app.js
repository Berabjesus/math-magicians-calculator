import React from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
import calculate from '../logic/calculate';

const App = () => (
  <>
    <Display />
    <ButtonPanel />
  </>
);
calculate();
export default App;
