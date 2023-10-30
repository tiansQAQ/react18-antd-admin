import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'
import { HashRouter } from 'react-router-dom'
import Router from '@/router'

// redux
import { Provider } from 'react-redux'
import store from '@/store'
function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <ConfigProvider locale={zhCN}>
          <Router />
        </ConfigProvider>
      </Provider>
    </HashRouter>
  )
}

export default App
