// 面包屑列表

import { createSlice } from '@reduxjs/toolkit'

const breadcurmbSlice = createSlice({
  name: 'breadcurmb',
  initialState: {
    breadcurmbs: {}
  },
  reducers: {
    setBreadcurmbs(state, { payload }) {
      state.breadcurmbs = payload
    }
  }
})

export const { setBreadcurmbs } = breadcurmbSlice.actions

export default breadcurmbSlice.reducer
