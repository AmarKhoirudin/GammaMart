import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, About } from '../components/'
import Login from '../container/Login'
import Dashboard from '../components/dashboard/Dashboard'
import error404 from '../components/404/404'
import {
  Profile,
  Purchase,
  Sales,
  Stock,
  Chart,
  Table,
  Settings
} from '../components/dashboard/sideNav/index'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/about' component={About} />
        <Route path='/profile' component={Profile} />
        <Route path='/purchase' component={Purchase} />
        <Route path='/sales' component={Sales} />
        <Route path='/stock' component={Stock} />
        <Route path='/chart' component={Chart} />
        <Route path='/table' component={Table} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/settings' component={Settings} />
        <Route component={error404} />
      </Switch>
    </Router>
  )
}
export default Routes
