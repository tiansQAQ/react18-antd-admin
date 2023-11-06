import { Layout as AntLayout } from 'antd'
import CollapseIcon from './components/CollapseIcon'
import ScreenFull from './components/ScreenFull'
import SizeSelect from './components/SizeSelect'
import Breadcrumb from './components/Breadcrumb'
import UserAvatar from './components/UserAvatar'

export default function Header() {
  const { Header } = AntLayout
  return (
    <Header style={{ backgroundColor: '#fff', padding: '0 20px' }} className="flex-center-between">
      <div className="header-left align-center">
        <CollapseIcon />
        <Breadcrumb />
      </div>
      <div className="header-right align-center">
        <ScreenFull />
        <SizeSelect />
        <UserAvatar />
      </div>
    </Header>
  )
}
