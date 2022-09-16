import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import IntroScreen from 'pages/Intro'
import { authenticate } from 'slices/app.slice'
import TabNavigator from '../components/Tabs'

import { InitialNavigator } from './Stacks/Stacks'
// import { HomeNavigator, ProfileNavigator } from './Stacks'

const Navigator = () => {
  const { checked, loggedIn, hub } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authenticate({ loggedIn: true }))
  }, [])

  // TODO: switch router by loggedIn state
  console.log('[##] loggedIn', loggedIn)

  return checked ? (
    <NavigationContainer>
      {hub?.length === 0 || hub === 1 ? <InitialNavigator /> : <TabNavigator />}
    </NavigationContainer>
  ) : (
    <IntroScreen />
  )
}

export default Navigator
