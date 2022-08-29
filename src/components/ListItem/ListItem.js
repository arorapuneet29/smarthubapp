import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'

import Text from '../Text/Text'
import scale from '../../utils/scale'
import colors from '../../theme/colors'
import Menu from '../Menu'

function ListItem({
  title,
  subTitle,
  LeftIcon,
  RightIcon,
  onPress,
  onSensorRemove,
  ...otherProps
}) {
  return (
    <View style={styles.container}>
      <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
        <View style={styles.container}>
          {LeftIcon}
          {title && (
            <View style={styles.texts}>
              <Text style={styles.title} content={title} numberOfLines={1} />
              <Text style={styles.subTitle} content={subTitle} />
            </View>
          )}
        </View>
      </TouchableHighlight>
      {RightIcon && <Menu onRemove={onSensorRemove} {...otherProps} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  texts: {
    width: scale(240),
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
