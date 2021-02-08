/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './display/navbar'
import Home from './display/home'
import Calculator from './display/calculator';
import Quote from './display/quote'
import Error from './display/error'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/calculator' component={Calculator} />
        <Route path='/quote' component={Quote}/>
        <Route path='*' component={Error}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
