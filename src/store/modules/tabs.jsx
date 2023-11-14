// 页签

import { createSlice } from '@reduxjs/toolkit'
import { HOME_URL } from '@/config'
const tabSlice = createSlice({
  name: 'tabs',
  initialState: {
    tabList: [{ title: '首页', path: HOME_URL }]
  },
  reducers: {
    setTabList(state, { payload }) {
      state.tabList = payload
    }
  }
})

export const { setTabList } = tabSlice.actions
export default tabSlice.reducer
