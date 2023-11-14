import { Outlet } from 'react-router-dom'
import { Layout as AntLayout } from 'antd'
import Tabs from './tabs'
import Menu from './menu'
import Header from './header'
import './index.scss'
import { useSelector } from 'react-redux'

export default function Layout() {
  const { Sider, Content, Footer } = AntLayout
  const { isCollapse } = useSelector((state) => state.menu)
  return (
    // 这里不用 Layout 组件原因是切换页面时样式会先错乱然后在正常显示，造成页面闪屏效果
    <div className="container">
      <Sider style={{ height: '100%', backgroundColor: '#001529', transition: 'all .2s' }} trigger={null} width={220} collapsed={isCollapse}>
        <Menu />
      </Sider>
      <AntLayout style={{ overflowX: 'hidden' }}>
        <Header />
        <Tabs />
        <Content>
          <Outlet />
        </Content>
        <Footer style={{ backgroundColor: '#fff' }}>Footer</Footer>
      </AntLayout>
    </div>
  )
}
