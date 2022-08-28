import React from 'react'
import { StyleSheet, View } from 'react-native'

import Text from '../Text/Text'
import scale from '../../utils/scale'
import colors from '../../theme/colors'

function ListItem({
  title, subTitle, LeftIcon, RightIcon,
}) {
  return (
    <View style={styles.container}>
      {LeftIcon}
      {title && (
        <View style={styles.texts}>
          <Text style={styles.title} content={title} />
          <Text style={styles.subTitle} content={subTitle} />
        </View>
      )}
      {RightIcon}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  texts: {
    maxWidth: scale(260),
  },
  title: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: colors.gray,
    marginVertical: 4,
  },
  subTitle: {
    fontSize: scale(12),
    flexShrink: 1,
  },
})

export default ListItem
