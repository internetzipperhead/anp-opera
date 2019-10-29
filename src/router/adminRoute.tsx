/**
 * 后台管理界面路由
*/
import LayoutAdmin from '../layout/TheLayoutAdmin'
import Home from '../pages/Admin/Home'
import About from '../pages/About'
import Test from '../pages/ZooKeeper/TestRouter'
import Refresh from '../components/TheRefresh'
import { NotFound, ServerError } from '../pages/40x-500'

export const adminMenuRoutes = [
  { path: 'home', name: '首页', icon: 'appstore', component: Home },
  { path: 'about', name: '关于', icon: 'info-circle', component: About }
]

export default {
  path: '/admin',
  name: 'admin',
  component: LayoutAdmin,
  children: [
    ...adminMenuRoutes,
    { path: 'refresh', name: '路由伪刷新', component: Refresh },
    { path: 'test', name: '测试学习', component: Test },
    { path: 'opera', name: '歌剧院', component: Test },
    { path: '500', name: '错误页', component: ServerError },
    { path: '*', name: '未知页', component: NotFound }
  ]
}
