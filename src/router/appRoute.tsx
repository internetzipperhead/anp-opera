import Layout from '../layout/TheLayoutApp'
import Refresh from '../components/TheRefresh'
import Home from '../pages/Admin/Home'
import About from '../pages/About'
import { NotFound, ServerError } from '../pages/40x-500'
import { Doutu, DoutuDetail } from '../pages/Website/Doutu'
import Test from '../pages/ZooKeeper/TestRouter'

export const menuRoutes = [
  { path: 'home', name: '首页', icon: 'appstore', component: Home },
  { path: 'about', name: '关于', icon: 'info-circle', component: About }
]

export default {
  path: '/web',
  name: 'home',
  component: Layout,
  children: [
    ...menuRoutes,
    // { path: '', name: '跳转到登录页', icon: 'swap', component: null },
    { path: 'refresh', name: '路由伪刷新', component: Refresh },
    { path: 'doutu', name: '抖图', component: Doutu },
    { path: 'doutu/:id', name: '抖图详情', component: DoutuDetail },
    { path: 'test', name: '测试学习', component: Test },
    { path: 'opera', name: '歌剧院', component: Test },
    { path: '500', name: '错误页', component: ServerError },
    { path: '*', name: '未知页', component: NotFound }
  ]
}
