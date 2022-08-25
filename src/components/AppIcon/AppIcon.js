import * as React from 'react'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from 'theme'

function AppIcon({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontIcon
        style={styles.icon}
        name="plus"
        color={colors.white}
        size={15}
      />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
  },
})

export default AppIcon
