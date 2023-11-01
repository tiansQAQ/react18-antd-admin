import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { formatMatch } from '@/utils/formatRouter'
import { Breadcrumb as BreadcrumbAnt } from 'antd'
// 面包屑导航
export default function Breadcrumb() {
  const { pathname } = useLocation()
  const { breadcurmbs } = useSelector((state) => state.breadcurmb)

  if (!breadcurmbs[pathname]) {
    return <></>
  }
  // 是否是首页
  const isHome = (route) => {
    return ['/home/index', '/'].indexOf(route.path) !== -1
  }
  const currentBreadcurmb = formatMatch(breadcurmbs[pathname]) || []
  // 添加首页
  if (!isHome(currentBreadcurmb[0])) {
    currentBreadcurmb.unshift({ path: '/home/index', title: '首页' })
  }

  const itemRender = (item, params, items) => {
    const last = items.indexOf(item) === items.length - 1
    const home = isHome(item)
    // 只有首页可点击
    if (last) {
      return <span>{item.title}</span>
    } else {
      if (home) {
        return <Link to={item.path}>{item.title}</Link>
      } else {
        return <span>{item.title}</span>
      }
    }
  }
  return <BreadcrumbAnt items={currentBreadcurmb} itemRender={itemRender} />
}
