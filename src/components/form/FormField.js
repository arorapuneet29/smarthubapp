import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import colors from '../../theme/colors'
import scale from '../../utils/scale'
import Text from '../Text'

const FormField = ({ icon, title, ...otherProps }) => (
  <View style={styles.container}>
    <Text content={title} style={styles.title} />
    <TextInput style={[styles.textInput]} {...otherProps} />
  </View>
)
const styles = StyleSheet.create({
  container: {
    height: 50,
    borderBottomColor: colors.inputBorder,
    borderBottomWidth: 2,
    marginVertical: scale(15),
    marginHorizontal: scale(5),
  },
  title: {
    color: colors.darkGray,
    fontWeight: '600',
  },
  textInput: {
    flex: 1,
    color: colors.darkGray,
    fontSize: 18,
    // fontFamily: Platform.OS == "android" ? "Roboto" : "",
  },
})

export default FormField
