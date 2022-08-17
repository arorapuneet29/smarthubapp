import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import * as Yup from 'yup'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Screen from '../../components/Screen'
import Text from '../../components/Text'
import { AppFormField, Form, SubmitForm } from '../../components/form'
import colors from '../../theme/colors'
import { addHub } from '../../slices/app.slice'
import store from '../../utils/store'

function AddAHub({ route, navigation }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Hub name'),
  })
  const { phoneNo, serialNo } = route.params

  const onSubmit = ({ name }) => {
    store.dispatch(addHub({ data: { phoneNo, serialNo, hubName: name } }))
    navigation.navigate('Home')
  }
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
            onSubmit={onSubmit}
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
            <SubmitForm
              title="continue to add sensors"
              btnText={styles.btnText}
              btnContainer={styles.btnContainer}
            />
          </Form>
        </View>
      </View>
      {/* <TouchableOpacity onPress={() => {}}>
        <Text content="continue to add sensors" style={styles.continueText} />
      </TouchableOpacity> */}
    </Screen>
  )
}

const styles = ScaledSheet.create({
  screen: {
    padding: 0,
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
  btnContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    marginTop: '130@s',
  },
  btnText: {
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
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

AddAHub.defaultProps = {
  route: {
    serialNo: '',
    phoneNo: '',
  },
  navigation: { navigate: () => null },
}

export default AddAHub
