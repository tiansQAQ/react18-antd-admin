// 路由守卫组件

import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { HOME_URL } from '@/config'
const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

export default function Permission(props) {
  const { token } = useSelector((state) => state.user)
  const { pathname } = useLocation()

  if (token) {
    // 如果是登录页面,跳转到首页
    if (pathname.trim() === '/login') {
      return <Navigate to={HOME_URL} replace />
    }
    return props.children
  } else {
    if (whiteList.indexOf(pathname) !== -1) {
      return props.children
    }

    return <Navigate to="login" replace />
  }
}
