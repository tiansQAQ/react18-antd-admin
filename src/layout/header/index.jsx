import { Layout as AntLayout } from 'antd'
import CollapseIcon from './components/CollapseIcon'
export default function Header() {
  const { Header } = AntLayout
  return (
    <Header style={{ backgroundColor: '#fff', padding: '0 20px' }}>
      <CollapseIcon />
    </Header>
  )
}
