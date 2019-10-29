import React, { useContext } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Login from '../pages/Login'
import Operation from '../pages/Website/Operation'
import LayoutAdmin from '../layout/TheLayoutAdmin'
import Layout from '../layout/TheLayoutApp'
import Home from '../pages/Admin/Home'
import Test from '../pages/ZooKeeper/TestRouter'

export default function router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/operation/:id" component={Operation}></Route>
        <Route path="/web" render={props =>
          <Layout {...props}>
            <Switch>
              <Route exact path="/web/home" component={Home}></Route>
              <Route exact path="/web/test">
                <Test></Test>
              </Route>
            </Switch>
          </Layout>
        } />
        <Route path="/admin" render={props =>
          <LayoutAdmin>
            <Switch>
              <Route path="/admin/home" component={Home}></Route>
              <Route path="/admin/test" component={Test}></Route>
            </Switch>
          </LayoutAdmin>
        } />
      </Switch>
    </BrowserRouter>
  )
}