/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  checked: false,
  loggedIn: false,
  hub: [],
  me: {},
}

// ------------------------------------
// Slice
// ------------------------------------

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    authenticate: (state, { payload }) => {
      state.loggedIn = payload.loggedIn
    },
    saveMe: (state, { payload }) => {
      state.me = payload.me
    },
    introDone: (state, { payload }) => {
      state.checked = payload.checked
    },
    addHub: (state, { payload }) => {
      state.hub = state.hub.push(payload.data)
    },
  },
})

export const { action } = appSlice
export const { authenticate, saveMe, introDone } = appSlice.actions

export default appSlice.reducer
