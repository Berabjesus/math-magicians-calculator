import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './page/navbar';
import Home from './page/home';
import Calculator from './page/calculator';
import Quote from './page/quote';
import Error from './page/error';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/quote" component={Quote} />
      <Route path="*" component={Error} />
    </Switch>
  </BrowserRouter>
);

export default App;
