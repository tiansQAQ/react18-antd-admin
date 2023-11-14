import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './modules/menu'
import globalReducer from './modules/global'
import breadcurmbReducer from './modules/breadcurmb'
import userReducer from './modules/user'
import tabReducer from './modules/tabs'
const store = configureStore({
  // 合并多个slice
  reducer: {
    menu: menuReducer,
    global: globalReducer,
    breadcurmb: breadcurmbReducer,
    user: userReducer,
    tab: tabReducer
  }
})
export default store
