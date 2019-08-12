import Login from '../pages/Login'
import { NotFound, ServerError } from '../pages/404-500'

const otherRoutes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/500',
    name: '500',
    component: ServerError
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

export default otherRoutes
