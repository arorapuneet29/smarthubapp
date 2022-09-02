import { useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'

import colors from '../../theme/colors'
import scale from '../../utils/scale'
import Text from '../Text'

const FormField = ({
  icon,
  title,
  style,
  inputStyle,
  textAreaField,
  name,
  customPlaceholder,
  ...otherProps
}) => {
  const { values } = useFormikContext()
  const route = useRoute()
  const [defaultValue, setDefaultValue] = useState('')

  useEffect(() => {
    if (route.params[name]) {
      setDefaultValue(route.params[name])
    }
    return false
  }, [name])

  return (
    <View style={[styles.container, style]}>
      <Text content={title} style={styles.title} />
      {customPlaceholder && !defaultValue && !values?.message && (
        <Text content={customPlaceholder} style={styles.custom} />
      )}
      <TextInput
        style={styles.textInput}
        {...otherProps}
        defaultValue={defaultValue}
      />
      {textAreaField && (
        <Text
          content={`${values?.message?.length || defaultValue.length || 0}/160`}
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
    fontWeight: '600',
    marginBottom: 5,
  },
  textInput: {
    flex: 1,
    color: colors.darkGray,
    fontSize: scale(16),
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
    fontWeight: '700',
  },
})

export default FormField
