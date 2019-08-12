import Login from '../pages/Login'
import { NotFound, ServerError } from '../pages/404-500'

const otherRoutes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/500',
    component: ServerError
  },
  {
    path: '*',
    component: NotFound
  }
]