import React from 'react'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'

import otherRotues from './otherRoute'
import appRoutes from './appRoute'
import Layout from '../components/TheLayout'
import Home from '../pages/Home'

const history = createBrowserHistory()


const router = () => (
  <Router history={history}>
      <Route path="/" component={Layout}>
        <Route path='home' component={Home}></Route>
      </Route>
    {/* <Switch>
      {
        appRoutes.map(route => <Route exact path={route.path} key={route.name} component={route.component} />)
      }
      {
        otherRotues.map(route => <Route path={route.path} key={route.name} component={route.component} />)
      }
    </Switch> */}
  </Router>
)

export default router
