/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  checked: false,
  loggedIn: false,
  hub: [
    {
      hubId: 312,
      hubName: 'hub_1',
      phoneNo: '46464664',
      serialNo: 'WE23KL',
      hubImageUrl: '',
      sensors: [],
    },
  ],
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
      const hubs = state.hub?.length === 0 ? [] : state.hub
      hubs.push(payload.data)
      state.hub = hubs
    },
    addSensor: (state, { payload }) => {
      const hubs = state.hub.filter((hub) => {
        let hubDetails
        if (hub.hubId === payload.data?.hubId) {
          const sensors = hub?.sensors || []
          sensors.push({ ...payload.data?.sensorDetails })

          hubDetails = hub
          hubDetails.sensors = sensors
        }
        return hubDetails || hub
      })
      state.hub = hubs
    },
    removeSensor: (state, { payload }) => {
      const hubs = state.hub.filter((hub) => {
        let hubDetails
        if (hub.hubId === payload.data?.hubId) {
          const sensors = hub?.sensors?.filter(
            (sensor) => sensor?.id !== payload.data?.sensorId,
          )
          hubDetails = hub
          hubDetails.sensors = sensors
        }
        return hubDetails || hub
      })
      state.hub = hubs
    },
  },
})

export const { action } = appSlice
export const {
  authenticate,
  saveMe,
  introDone,
  addHub,
  addSensor,
  removeSensor,
} = appSlice.actions

export default appSlice.reducer
