import Login from '../pages/Login'
import Operation from '../pages/Website/Operation'
import { NotFound, ServerError } from '../pages/40x-500'

export default {
  path: '',
  name: '根组件',
  children: [
    { path: '/', name: 'default', component: null },
    { path: 'login', name: 'login', component: Login },
    { path: 'operation/:id', name: 'operationDetail', component: Operation },
    { path: '500', name: 'serverError', component: ServerError },
    { path: '*/*', name: 'notFound', component: NotFound },
  ]
}
