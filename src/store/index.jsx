import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './modules/menu'
const store = configureStore({
  // 合并多个slice
  reducer: {
    menu: menuReducer
  }
})
export default store
