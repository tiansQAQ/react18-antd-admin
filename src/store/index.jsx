import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './modules/menu'
import globalReducer from './modules/global'
import breadcurmbReducer from './modules/breadcurmb'

const store = configureStore({
  // 合并多个slice
  reducer: {
    menu: menuReducer,
    global: globalReducer,
    breadcurmb: breadcurmbReducer
  }
})
export default store
