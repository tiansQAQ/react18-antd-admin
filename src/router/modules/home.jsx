/* 首页模块 */
import Home from '@/views/home'
import Layout from '@/layout'
const homeRouter = [
  {
    element: <Layout />,
    children: [
      {
        path: '/home/index',
        element: <Home />,
        meta: {
          requiresAuth: true,
          title: '首页',
          key: 'home'
        }
      }
    ]
  }
]
export default homeRouter
