import { useFormikContext } from 'formik'
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import colors from '../../theme/colors'
import { Text } from '../common'

const SubmitForm = ({ title, style }) => {
  const { handleSubmit } = useFormikContext()
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText} content={title} />
        </View>
      </TouchableOpacity>
    </View>
  )
}
const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '14@s',
  },
  btnContainer: {
    height: '40@s',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.button,
    borderRadius: 10,
    width: '100@s',
  },
  btnText: {
    fontSize: '14@s',
    color: colors.gray,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
})

export default SubmitForm
