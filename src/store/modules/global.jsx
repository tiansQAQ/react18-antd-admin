// 全局配置

import { createSlice } from '@reduxjs/toolkit'

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    componentSize: 'middle' // antd 组件大小
  },
  reducers: {
    setComponentSize(state, { payload }) {
      state.componentSize = payload
    }
  }
})

export const { setComponentSize } = globalSlice.actions

export default globalSlice.reducer
