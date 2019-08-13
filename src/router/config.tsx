import rootRoutes from './rootRoute'
import appRoutes from './appRoute'

let childRoutes = [
  rootRoutes,
  appRoutes,
]

const routes = [
  ...childRoutes.filter(route => route.children && route.children.length > 0)
]

export default routes
