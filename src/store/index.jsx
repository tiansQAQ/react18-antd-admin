import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './modules/menu'
import globalReducer from './modules/global'
const store = configureStore({
  // 合并多个slice
  reducer: {
    menu: menuReducer,
    global: globalReducer
  }
})
export default store
