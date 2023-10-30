import { createSlice } from '@reduxjs/toolkit'

// 创建slice
export const counterSilce = createSlice({
  name: 'menu',
  initialState: { isCollapse: false }, // 定义state
  // 定义reducers
  reducers: {
    updateCollapse(state, { payload }) {
      state.isCollapse = payload
    }
  }
})

export const { updateCollapse } = counterSilce.actions

export default counterSilce.reducer
