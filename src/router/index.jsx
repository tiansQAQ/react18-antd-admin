import { useRoutes, Navigate } from 'react-router-dom'
import Login from '@/views/login'
import UserCenter from '@/views/userCenter'
import Layout from '@/layout'
/* Router Modules */
import homeRouter from './modules/home'
import proTable from './modules/proTable'
import nestMenu from './modules/nestMenu'
const rootRouter = [
  {
    path: '/',
    element: <Navigate to="/home/index" />
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login'
    }
  },

  {
    element: <Layout />,
    children: [
      {
        path: '/userCenter',
        element: <UserCenter />,
        meta: {
          requiresAuth: false,
          title: '个人中心',
          key: 'userCenter'
        }
      }
    ]
  },

  ...homeRouter,
  ...proTable,
  ...nestMenu,
  {
    path: '*',
    element: <Navigate to="/404" />
  }
]

// 路由列表对象
const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
