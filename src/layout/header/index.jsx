import { Layout as AntLayout } from 'antd'
import CollapseIcon from './components/CollapseIcon'
import ScreenFull from './components/ScreenFull'
export default function Header() {
  const { Header } = AntLayout
  return (
    <Header style={{ backgroundColor: '#fff', padding: '0 20px' }} className="flex-center-between">
      <div className="header-left">
        <CollapseIcon />
      </div>
      <div className="header-right">
        <ScreenFull />
      </div>
    </Header>
  )
}
