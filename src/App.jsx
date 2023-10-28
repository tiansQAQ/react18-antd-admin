import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'
import { HashRouter } from 'react-router-dom'
import Router from '@/router'
function App() {
  return (
    <HashRouter>
      <ConfigProvider locale={zhCN}>
        <Router />
      </ConfigProvider>
    </HashRouter>
  )
}

export default App
