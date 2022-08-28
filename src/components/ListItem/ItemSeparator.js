import React from 'react'
import { StyleSheet, View } from 'react-native'

import colors from '../../theme/colors'

function ItemSeparator() {
  return <View style={styles.container} />
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray,
  },
})

export default ItemSeparator
