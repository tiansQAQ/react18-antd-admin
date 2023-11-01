import { Layout as AntLayout } from 'antd'
import CollapseIcon from './components/CollapseIcon'
import ScreenFull from './components/ScreenFull'
import SizeSelect from './components/SizeSelect'
import Breadcrumb from './components/Breadcrumb'
export default function Header() {
  const { Header } = AntLayout
  return (
    <Header style={{ backgroundColor: '#fff', padding: '0 20px' }} className="flex-center-between">
      <div className="header-left flex-center">
        <CollapseIcon />
        <Breadcrumb />
      </div>
      <div className="header-right flex-center">
        <ScreenFull />
        <SizeSelect />
      </div>
    </Header>
  )
}
