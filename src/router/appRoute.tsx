import Layout from '../components/TheLayout'
import Refresh from '../components/TheRefresh'
import Home from '../pages/Home'
import About from '../pages/About'
import { NotFound, ServerError } from '../pages/404-500'
import { Doutu, DoutuDetail } from '../pages/Doutu'

export const menuRoutes = [
  { path: 'home', name: '首页', icon: 'appstore', component: Home },
  { path: 'about', name: '关于', icon: 'info-circle', component: About }
]

export default {
  path: '/',
  name: 'home',
  component: Layout,
  children: [
    ...menuRoutes,
    { path: '', name: '跳转到登录页', icon: 'swap', component: null },
    { path: 'refresh', name: '路由伪刷新', component: Refresh },
    { path: 'doutu', name: '抖图', component: Doutu },
    { path: 'doutu/:id', name: '抖图详情', component: DoutuDetail },
    { path: '500', name: '错误页', component: ServerError },
    { path: '*', name: '未知页', component: NotFound }
  ]
}
