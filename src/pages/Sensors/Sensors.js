import React from 'react'
import { Text, View } from 'react-native'

function Sensors({ route }) {
  const { hubId } = route.params
  return (
    <View>
      <Text>Hub: {hubId}</Text>
    </View>
  )
}

export default Sensors
