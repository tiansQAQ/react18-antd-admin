import React from 'react'
import { Menu as AntMenu } from 'antd'
import { useEffect, useState } from 'react'
import { getData } from '@/api/data'
import * as Icons from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import './index.scss'
export default function Menu() {
  // 菜单列表
  const [menuList, setMenuList] = useState([])

  const { pathname } = useLocation()
  const navigate = useNavigate()

  // 当前路由的pathname
  const [selectedKeys, setSelectedKeys] = useState([pathname])

  // pathname 改变时,重新设置当前菜单选中项
  useEffect(() => {
    setSelectedKeys([pathname])
  }, [pathname])

  /**
   * 递归处理后台返回菜单
   * @param {*} menuList
   * @returns menuFormat
   */
  const menuDeepLoop = (menuList = []) => {
    return menuList.map((item) => {
      // 菜单项标题,item的唯一标志,菜单图标,子菜单的菜单项,类型
      const menuFormat = { label: item.title, key: item.path, icon: React.createElement(Icons[item.icon]) }
      if (item.children) {
        menuFormat.children = menuDeepLoop(item.children)
      }
      return menuFormat
    })
  }
  // 获取菜单数据
  const getMenuData = async () => {
    const { data } = await getData()
    // console.log('data: ', data)
    setMenuList(menuDeepLoop(data))
  }
  useEffect(() => {
    getMenuData()
  }, [])

  // menu click 页面跳转
  const handleClickMenu = ({ key }) => {
    const route = searchRoute(key, menuList)
    console.log('route: ', route)
    navigate(key)
  }

  // 根据path查找指定对象
  const searchRoute = (path, routes) => {
    let route = {}
    for (let item of routes) {
      if (item.key === path) return item
      if (item.children) {
        const res = searchRoute(path, item.children)
        if (res && Object.keys(res).length) {
          route = res
        }
      }
    }
    return route
  }

  return (
    <div className="side-menu">
      <div className="side-menu-header flex align-center justify-center">side-menu-header</div>
      <AntMenu style={{ flex: '1', overflow: 'auto' }} items={menuList} selectedKeys={selectedKeys} theme="dark" mode="inline" onClick={handleClickMenu} />
    </div>
  )
}
