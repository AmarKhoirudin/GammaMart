import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, About } from '../components/';
import Login from "../container/Login"
import Header from '../container/Header';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  );
};
export default Routes;
