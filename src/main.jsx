// import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/styles/reset.scss'
import '@/styles/common.scss'
import App from './App.jsx'
import store from '@/store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // https://stackoverflow.com/questions/60329421/usedispatch-error-could-not-find-react-redux-context-value-please-ensure-the
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
)
