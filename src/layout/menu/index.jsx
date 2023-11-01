import React from 'react'
import { Menu as AntMenu } from 'antd'
import { useEffect, useState } from 'react'
import { getData } from '@/api/data'
import * as Icons from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from './components/Logo'
import './index.scss'
import { getMatched } from '@/utils/formatRouter'
import { setBreadcurmbs } from '@/store/modules/breadcurmb'
import { useDispatch } from 'react-redux'

export default function Menu() {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  // 菜单列表
  const [menuList, setMenuList] = useState([])

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
    setMenuList(menuDeepLoop(data))
    // 获取面包屑列表
    const breadcurmbs = getMatched(data)
    dispatch(setBreadcurmbs(breadcurmbs))
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
      <Logo />
      <AntMenu style={{ flex: '1', overflow: 'auto', transition: 'none' }} items={menuList} selectedKeys={selectedKeys} theme="dark" mode="inline" onClick={handleClickMenu} />
    </div>
  )
}
