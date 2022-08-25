import { useFormikContext } from 'formik'
import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../../theme/colors'
import scale from '../../utils/scale'
import Text from '../Text'

const SubmitForm = ({
  title, btnContainer, btnText, style, isDisable,
}) => {
  const { handleSubmit } = useFormikContext()
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={handleSubmit} disabled={isDisable}>
        <View style={[styles.btnContainer, btnContainer]}>
          <Text style={[styles.btnText, btnText]} content={title} />
        </View>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(14),
  },
  btnContainer: {
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.button,
    borderRadius: 10,
    width: scale(100),
  },
  btnText: {
    fontSize: scale(14),
    color: colors.gray,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
})

export default SubmitForm
