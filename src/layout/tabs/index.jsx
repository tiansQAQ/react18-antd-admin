import { Tabs as AntTabs } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getData } from '@/api/data'
import { searchRoute } from '@/utils/formatRouter'
import { setTabList } from '@/store/modules/tabs'
import { useDispatch, useSelector } from 'react-redux'
import { HOME_URL } from '@/config'
import { deepCopy } from '@/utils'
import './tabs.scss'
// 路由标签
export default function Tabs() {
  const dispatch = useDispatch()
  const { tabList } = useSelector((state) => state.tab)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [activeValue, setActiveValue] = useState(pathname)

  // 临时数据
  const [tempData, setTempData] = useState([])

  useEffect(() => {
    getMenuData()
  }, [])
  // 获取菜单数据
  const getMenuData = async () => {
    const { data } = await getData()
    setTempData(data)
  }

  useEffect(() => {
    addTab()
  }, [pathname, tempData])

  const addTab = () => {
    // 根据pathname找到route对象
    const currentRoute = searchRoute(pathname, tempData)
    if (!currentRoute) return

    const copyTabList = deepCopy(tabList)

    // 如果没有在setList里
    const index = tabList.findIndex((item) => item.path === currentRoute.path)
    if (index === -1) {
      copyTabList.push(currentRoute)
    }
    dispatch(setTabList(copyTabList))
    setActiveValue(pathname)
  }

  const handleChange = (path) => {
    navigate(path)
  }
  const onEdit = (targetKey, action) => {
    if (action === 'remove') {
      // 首页不能删除
      if (targetKey === HOME_URL) return

      // 如果删除的是当前pathname
      if (targetKey === pathname) {
        // 跳转到下一个pathname
        const index = tabList.findIndex((item) => item.path === targetKey)
        const nextTab = tabList[index + 1] || tabList[index - 1] || { path: HOME_URL }
        navigate(nextTab.path)
      }
      // 设置删除后的tabList
      const newTabList = tabList.filter((item) => item.path !== targetKey)
      dispatch(setTabList(newTabList))
    }
  }

  const formatItems = () => {
    return tabList.map((item) => {
      return { label: item.title, key: item.path }
    })
  }

  return (
    <div className="tabs bg-white">
      <AntTabs activeKey={activeValue} onChange={handleChange} onEdit={onEdit} items={formatItems()} size="small" type="editable-card" hideAdd />
    </div>
  )
}
