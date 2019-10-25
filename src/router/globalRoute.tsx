import Login from '../pages/Login'
import Operation from '../pages/Website/Operation'

export default {
  path: '',
  name: '根组件',
  children: [
    {path: 'login', name: '登录', component: Login},
    {path: 'operation/:id', name: '运维', component: Operation}
  ]
}
