import * as React from 'react'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Text from '../Text/Text'

function AppIcon({
  onPress,
  text,
  iconName,
  baseStyle,
  color = 'white',
  size = 15,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={baseStyle}>
        {iconName && (
          <FontIcon
            style={styles.icon}
            name={iconName}
            color={color}
            size={size}
          />
        )}
        {text && <Text style={{ fontSize: size, color }} content={`${text}`} />}
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  icon: {
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
  },
})

export default AppIcon
