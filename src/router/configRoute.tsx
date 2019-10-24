import React, { useContext } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import rootRoutes from './globalRoute'
import appRoutes from './appRoute'
import { context } from '../store'
import { IRoute } from '../model'

let childRoutes = [
  rootRoutes,
  appRoutes,
]

const routes = [
  ...childRoutes.filter(route => route.children && route.children.length > 0)
]

function Router() {

  const { userinfo: { state: { isLogin } } } = useContext(context)

  const renderRoutes = (routes: IRoute[], contextPath: string) => {
    const children: React.ReactElement[] = []

    const renderRoute = (item: IRoute, routeCtxPath: string) => {
      let newCtxPath = item.path ? `${routeCtxPath}/${item.path}` : routeCtxPath
      newCtxPath = newCtxPath.replace(/\/+/g, '/')

      if (item.component && item.children) {
        const childRoutes = renderRoutes(item.children, newCtxPath)
        const ItemComp: any = item.component
        children.push(
          <Route
            key={newCtxPath}
            render={props => <ItemComp {...props}>{childRoutes}</ItemComp>}
          />
        )
      } else if (item.component) {
        let PView: any = item.component
        children.push(
          <Route
            exact
            key={newCtxPath}
            path={newCtxPath}
            render={props => {return <PView {...props} />}}
          />
        )
      } else if (item.children) {
        item.children.forEach(item => renderRoute(item, newCtxPath))
      } else {
        // 重定向
        children.push(
          <Route
            exact
            key="redirect"
            path="/"
            render={() => (
              isLogin
              ? <Redirect to="/home"/>
              : <Redirect to="/login"/>
            )}
          />
        )
      }
    }

    routes.forEach(item => renderRoute(item, contextPath))

    // console.log('children', children)
    return <Switch>{children}</Switch>
  }

  const browserRoutes = renderRoutes(routes, '/')

  return <BrowserRouter>{browserRoutes}</BrowserRouter>
}

export default Router
