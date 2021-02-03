import React from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    this.setState(state => calculate(state, buttonName));
  }

  render() {
    return (
      <>
        <Display result={this.state.total ? this.state.total : this.state.next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
