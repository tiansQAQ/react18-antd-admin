import { Outlet } from 'react-router-dom'
import { Layout as AntLayout } from 'antd'
import Tabs from './tabs'
import './index.scss'
import Menu from './menu'
export default function Layout() {
  const { Sider, Content, Header, Footer } = AntLayout
  return (
    // 这里不用 Layout 组件原因是切换页面时样式会先错乱然后在正常显示，造成页面闪屏效果
    <div className="container">
      <Sider style={{ height: '100%' }}>
        <Menu />
      </Sider>
      <AntLayout>
        <Header style={{ backgroundColor: '#fff' }}>Header</Header>
        <Tabs />
        <Content>
          <Outlet />
        </Content>
        <Footer style={{ backgroundColor: '#fff' }}>Footer</Footer>
      </AntLayout>
    </div>
  )
}
