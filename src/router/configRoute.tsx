import React, { useContext } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import rootRoutes from './globalRoute'
import adminRoute from './adminRoute'
import appRoutes from './appRoute'
import { context } from '../store'
import { IRoute } from '../model'

let childRoutes = [
  appRoutes,
  adminRoute,
  rootRoutes,
]

const routes = [...childRoutes.filter(route => route.children && route.children.length > 0)]

function Router() {

  const { userinfo: { state: { isLogin, isAdmin } } } = useContext(context)

  const renderRoutes = (routes: IRoute[], contextPath: string = '/') => {
    const children: React.ReactElement[] = []

    const renderRoute = (item: IRoute, routeCtxPath: string) => {
      let newCtxPath = item.path ? `${routeCtxPath}/${item.path}` : routeCtxPath
      newCtxPath = newCtxPath.replace(/\/+/g, '/')

      if (item.component && item.children) {
        // -不是admin身份，左右路由跳转到web/home界面
        if (!isAdmin && newCtxPath.includes('admin')) {
          return children.push(
            <Route
              key={newCtxPath}
              path={newCtxPath}
              render={() => <Redirect to="/web/home"/>}
            />
          )
        }
        const childRoutes = renderRoutes(item.children, newCtxPath)
        const RouteComponent: any = item.component
        children.push(
          <Route
            key={newCtxPath}
            path={newCtxPath}
            render={props => <RouteComponent {...props}>{childRoutes}</RouteComponent>}
          />
        )
      } else if (item.component) {
        const RouteComponent: any = item.component
        children.push(
          <Route
            exact
            key={newCtxPath}
            path={newCtxPath}
            component={RouteComponent}
          />
        )
      } else if (item.children) {
        item.children.forEach(item => renderRoute(item, newCtxPath))
      } else {
        // 重定向
        console.log(9999, isLogin)
        children.push(
          <Route
            exact
            key="redirect"
            path="/"
            render={() => (
              isLogin
              ? <Redirect to="/web/home"/>
              : <Redirect to="/login"/>
            )}
          />
        )
      }
    }

    routes.forEach(item => renderRoute(item, contextPath))

    return <Switch>{children}</Switch>
  }

  const browserRoutes = renderRoutes(routes)

  return <BrowserRouter>{browserRoutes}</BrowserRouter>
}

export default Router
