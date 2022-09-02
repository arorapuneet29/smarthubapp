import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../../theme/colors'
import Text from '../Text'

function ListItemEmpty() {
  return (
    <View style={styles.container}>
      <Text style={styles.content} content="No sensor exist!" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  content: {
    backgroundColor: colors.lightGray,
    padding: 10,
  },
})

export default ListItemEmpty
