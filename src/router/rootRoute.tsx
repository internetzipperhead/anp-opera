import Login from '../pages/Login'


export default {
  path: '',
  name: '根组件',
  children: [
    {path: 'login', name: '登录', component: Login}
  ]
}
