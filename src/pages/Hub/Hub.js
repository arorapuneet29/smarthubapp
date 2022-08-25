import React from 'react'
import { Button } from 'react-native'

import Screen from '../../components/Screen'

function Hub({ route, navigation }) {
  const { hubId, sensors } = route.params
  return (
    <Screen>
      <Button
        title="Manage sensor"
        onPress={() => navigation.navigate('ManageSensor', { hubId, sensors })}
      />
    </Screen>
  )
}

export default Hub
