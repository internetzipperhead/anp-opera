import Home from '../pages/Home'
import { Doutu, DoutuDetail } from '../pages/Doutu'

const appRoutes = [
  {
    path: 'home',
    name: 'home',
    component: Home
  },
  {
    path: 'doutu',
    name: 'doutu',
    component: Doutu,
    children: [
      {
        path: 'detail',
        name: 'doutuDetail',
        component: DoutuDetail
      }
    ]
  },
]

export default appRoutes
