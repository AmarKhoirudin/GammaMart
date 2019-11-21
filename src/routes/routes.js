import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, About } from '../components/';
import Login from '../container/Login';
import Header from '../container/Header';
import Dashboard from '../components/dashboard/Dashboard';
import error404 from '../components/404/404';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/about' component={About} />
        <Route path='dashboard' component={Dashboard} />
        <Route component={error404} />
      </Switch>
    </Router>
  );
};
export default Routes;
