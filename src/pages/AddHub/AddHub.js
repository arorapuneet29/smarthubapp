import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import * as Yup from 'yup'

import Text from '../../components/Text'
import Listing from '../../components/Listing'
import { AppFormField, Form, SubmitForm } from '../../components/form'
import Screen from '../../components/Screen'
import Modal from '../../components/Modal'
import colors from '../../theme/colors'
import scale from '../../utils/scale'

function AddHub({ navigation }) {
  const lists = [
    {
      id: 1,
      content:
        'Insert an active SIM card that can send/receive SMS (with sufficient credit) into the hub',
    },
    { content: 'Power on hub & let it boot', id: 2 },
    {
      id: 3,
      content:
        'Add the Phone No. of the SIM card in the Hub below, and press the "Add Hub" button.',
    },
  ]
  const [modalVisible, setModalVisible] = useState(false)
  const initial = { serialNo: '', phoneNo: '' }
  const [details, setDetails] = useState(initial)
  const [disable, setDisable] = useState(true)

  const validationSchema = Yup.object().shape({
    serialNo: Yup.string().required().label('Serial no.'),
    phoneNo: Yup.number().required().min(10).label('Phone no.'),
  })

  const onSubmit = ({ serialNo, phoneNo }) => {
    setModalVisible(!modalVisible)
    setDetails({ serialNo, phoneNo })
  }
  const onNavigate = (path) => {
    setModalVisible(false)
    navigation.navigate(path, { ...details })
  }

  return (
    <Screen>
      <Text
        style={styles.heading}
        content="Hubs are central base stations of SmartCard suit.To register a hub,please do the following"
      />
      <View style={styles.listContainer}>
        <Listing itemLists={lists} />
      </View>
      <Form
        initialValues={initial}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validate={({ serialNo, phoneNo }) => (serialNo && phoneNo ? setDisable(false) : setDisable(true))}
      >
        <AppFormField
          title="Hub Serial No."
          placeholder="×××× ×× ××××"
          autoCapitalize="none"
          autoCorrect={false}
          name="serialNo"
          keyboardType="default"
        />

        <AppFormField
          autoCapitalize="none"
          keyboardType="phone-pad"
          autoCorrect={false}
          title="Hub SIM Phone No."
          placeholder="+91 ×××× ×× ××××"
          name="phoneNo"
        />

        <SubmitForm
          title="Add Hub"
          isDisable={disable}
          btnContainer={!disable && styles.enableBtn}
          btnText={!disable && styles.btnText}
        />
      </Form>
      {modalVisible && (
        <Modal
          modalVisible={modalVisible}
          details={details}
          onNavigate={onNavigate}
        />
      )}
    </Screen>
  )
}

AddHub.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

AddHub.defaultProps = {
  navigation: { navigate: () => null },
}

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'justify',
    marginTop: scale(10),
  },
  enableBtn: {
    backgroundColor: colors.darkGray,
  },
  btnText: {
    color: 'white',
  },
})

export default AddHub
