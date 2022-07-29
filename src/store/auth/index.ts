import { createSlice } from '@reduxjs/toolkit'

export const TOKEN_TIME_OUT = 600 * 1000

export const authSlice = createSlice({
  name: 'authToken',
  initialState: {
    authenticated: false,
    accessToken: null,
    name: '',
    email: '',
  },
  reducers: {
    setAuth: (state, action) => {
      state.authenticated = true
      state.accessToken = action.payload.accessToken
      state.name = action.payload.name
      state.email = action.payload.email
    },
    initAuth: (state) => {
      state.authenticated = false
      state.accessToken = null
      state.name = ''
      state.email = ''
    },
    setToken: (state, action) => {
      state.accessToken = action.payload
      state.authenticated = true
    },
  },
})

export const authActions = { ...authSlice.actions }
export default authSlice.reducer
