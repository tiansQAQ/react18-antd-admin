import { useRoutes, Navigate } from 'react-router-dom'
import Login from '@/views/login'

/* Router Modules */
import homeRouter from './modules/home'
import proTable from './modules/proTable'

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
  ...homeRouter,
  ...proTable,
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
