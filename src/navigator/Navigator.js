import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import * as native from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import * as reduxx from 'react-redux'
import IntroScreen from 'pages/Intro'
import { authenticate } from 'slices/app.slice'

import DrawerNavigator from './Drawer'

const Navigator = () => {
  const { checked } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authenticate({ loggedIn: true }))
  }, [])

  // TODO: switch router by loggedIn state
  console.log('[##] reduxx', reduxx)

  return checked ? (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  ) : (
    <IntroScreen />
  )
}

export default Navigator
