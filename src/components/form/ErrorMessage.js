import React from 'react'
import { StyleSheet, Text } from 'react-native'

const ErrorMessage = ({ error, touched }) => {
  if (!error || !touched) return null
  return <Text style={styles.container}>{error}</Text>
}
const styles = StyleSheet.create({
  container: {
    color: 'red',
    fontSize: 15,
    alignSelf: 'flex-start',
    marginLeft: 12,
  },
})

export default ErrorMessage
