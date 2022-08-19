import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import * as Yup from 'yup'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Screen from '../components/common/Screen'
import { Text } from '../components/common'
import { AppFormField, Form } from '../components/form'
import colors from '../theme/colors'

function AddAHub({ route }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Hub name'),
  })
  const { phoneNo } = route.params
  return (
    <Screen style={styles.screen}>
      <View style={styles.sectionOne}>
        <MaterialCommunityIcons name="home" size={100} color={colors.gray} />
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.addPhoto} content="Tab to add a photo" />
        </TouchableOpacity>
      </View>

      <View style={styles.sectionTwo}>
        <View style={styles.content}>
          <Text content={phoneNo || '+91-942323232'} style={styles.phoneNo} />
          <Text content="Registered on 03/04/2022" style={styles.date} />
        </View>
        <View style={styles.form}>
          <Form
            initialValues={{ name: '' }}
            onSubmit={() => {
              console.log('Submitted')
            }}
            validationSchema={validationSchema}
          >
            <AppFormField
              title="Name"
              placeholder="Hub name here."
              autoCapitalize="none"
              autoCorrect={false}
              name="name"
              keyboardType="default"
            />
          </Form>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Text content="continue to add sensors" style={styles.continueText} />
      </TouchableOpacity>
    </Screen>
  )
}

const styles = ScaledSheet.create({
  screen: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  sectionOne: {
    backgroundColor: colors.grayBg,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '200@s',
  },
  addPhoto: {
    marginBottom: '15@s',
  },
  sectionTwo: {
    height: '350@s',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '15@s',
  },
  phoneNo: {
    fontSize: '20@s',
    color: 'black',
    letterSpacing: 2,
  },
  date: {
    fontSize: '12@s',
    marginVertical: '2@s',
  },
  form: {
    paddingHorizontal: '15@s',
  },
  continueText: {
    marginVertical: '10@s',
    fontSize: '16@s',
    textTransform: 'uppercase',
    fontWeight: '700',
    color: colors.continueText,
    textAlign: 'center',
  },
})

AddAHub.propTypes = {
  route: PropTypes.shape({
    serialNo: PropTypes.string,
    phoneNo: PropTypes.string,
  }),
}

AddAHub.defaultProps = {
  route: {
    serialNo: '',
    phoneNo: '',
  },
}

export default AddAHub
