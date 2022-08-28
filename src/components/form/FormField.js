import { useFormikContext } from 'formik'
import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import colors from '../../theme/colors'
import scale from '../../utils/scale'
import Text from '../Text'

const FormField = ({
  icon,
  title,
  style,
  inputStyle,
  textAreaField,
  customPlaceholder,
  ...otherProps
}) => {
  const { values } = useFormikContext()

  return (
    <View style={[styles.container, style]}>
      <Text content={title} style={styles.title} />
      {customPlaceholder && !values?.message && (
        <Text content={customPlaceholder} style={styles.custom} />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
      {textAreaField && (
        <Text
          content={`${values?.message?.length || 0}/160`}
          style={styles.lengthLabel}
        />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 60,
    marginVertical: scale(10),
    marginHorizontal: scale(5),
    marginBottom: scale(8),
  },
  title: {
    color: '#5a5a5a',
    fontWeight: '700',
    marginBottom: 5,
  },
  textInput: {
    flex: 1,
    color: colors.darkGray,
    fontSize: 18,
    borderBottomColor: colors.inputBorder,
    borderBottomWidth: 2,
    textAlignVertical: 'top',
  },

  custom: {
    color: '#9c9c9c',
    fontSize: scale(16),
    fontWeight: '300',
    marginBottom: 10,
  },
  lengthLabel: {
    textAlign: 'right',
    fontWeight: '900',
  },
})

export default FormField
