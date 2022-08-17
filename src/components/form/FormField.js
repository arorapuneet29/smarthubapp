import React from 'react'
import { View, TextInput } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import colors from '../../theme/colors'
import Text from '../Text'

const FormField = ({ icon, title, ...otherProps }) => (
  <View style={styles.container}>
    <Text content={title} style={styles.title} />
    <TextInput style={[styles.textInput]} {...otherProps} />
  </View>
)
const styles = ScaledSheet.create({
  container: {
    height: 50,
    borderBottomColor: colors.inputBorder,
    borderBottomWidth: 2,
    marginVertical: '15@s',
    marginHorizontal: '5@s',
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
