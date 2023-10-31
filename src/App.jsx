import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'
import { HashRouter } from 'react-router-dom'
import Router from '@/router'
// redux
import { useSelector } from 'react-redux'

function App() {
  const { componentSize } = useSelector((state) => state.global)

  return (
    <HashRouter>
      <ConfigProvider locale={zhCN} componentSize={componentSize}>
        <Router />
      </ConfigProvider>
    </HashRouter>
  )
}

export default App
