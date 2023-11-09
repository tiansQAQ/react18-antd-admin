// https://github.com/cornflourblue/react-18-redux-registration-login-example/tree/master
// https://vocus.cc/article/64ae5ad7fd8978000102017e
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { login as loginData } from '@/api/data'

const name = 'user'

const extraActions = createExtraActions()

const userSlice = createSlice({
  name,
  initialState: {
    token: null,
    loginLoading: false
  },
  reducers: {
    setToken(state, { payload }) {
      state.token = payload
    }
  },
  extraReducers(builder) {
    const { login,logout } = extraActions
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.token = payload.accessToken
      localStorage.setItem('accessToken', payload.accessToken)
    })
    builder.addCase(logout.fulfilled,() => {
      
    })
  }
})

function createExtraActions() {
  function login() {
    return createAsyncThunk(`${name}/login`, async (loginUser) => {
      const { data } = await loginData(loginUser)
      return data
    })
  }

  function logout() {
    return createAsyncThunk(`${name}/logout`,(myArg,{dispatch}) => {
      dispatch(userActions.setToken(null))
      localStorage.removeItem('accessToken')
    })
  }
 
  return {
    login: login(),
    logout:logout()
  }
}

export const userActions = { ...userSlice.actions, ...extraActions }

export default userSlice.reducer
