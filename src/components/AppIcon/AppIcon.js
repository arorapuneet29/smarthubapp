import * as React from 'react'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import {
  Image, StyleSheet, TouchableOpacity, View,
} from 'react-native'
import Text from '../Text/Text'

function AppIcon({
  onPress,
  text,
  iconName,
  baseStyle,
  iconStyle,
  color = 'white',
  size = 15,
  imageUrl,
  imageStyle,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[baseStyle, styles.container]}>
        {iconName && (
          <FontIcon
            style={[styles.icon, iconStyle]}
            name={iconName}
            color={color}
            size={size}
          />
        )}
        {imageUrl && (
          <Image style={imageStyle} source={imageUrl} resizeMode="cover" />
        )}
        {text && <Text style={{ fontSize: size, color }} content={`${text}`} />}
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
  },
})

export default AppIcon
