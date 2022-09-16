import React from 'react'
import { StyleSheet, View } from 'react-native'
import sensors from '../../../assets/mock/sensors.json'
import Card from '../../components/Card/Card'

import Screen from '../../components/Screen'
import scale from '../../utils/scale'

function SensorList({ route }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        {sensors?.map((sensor) => (
          <View key={sensor.sensorId} style={styles.card}>
            <Card {...sensor} hubId={route.params?.hubId} />
          </View>
        ))}
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 0,
  },
  card: {
    width: '45%',
    margin: scale(8),
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 10,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: scale(10),
  },
})

export default SensorList
