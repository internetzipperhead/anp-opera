/**
 * 后台管理界面路由
*/
import Home from '../pages/Admin/Home'
import About from '../pages/About'

export const adminmenuroutes = [
  { path: 'home', name: '首页', icon: 'appstore', component: Home },
  { path: 'about', name: '关于', icon: 'info-circle', component: About }
]

const adminRoutes = [
  ...adminmenuroutes
]

export default adminRoutes
