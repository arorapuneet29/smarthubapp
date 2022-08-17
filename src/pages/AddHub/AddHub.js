// import React from 'react'
// import PropTypes from 'prop-types'
// import {
//   StyleSheet, Text, View, StatusBar,
// } from 'react-native'
// import Button from 'components/Button'
// import { colors } from 'theme'

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: colors.lightGrayPurple,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
// })

// const AddHub = ({ navigation }) => (
//   <View style={styles.root}>
//     <StatusBar barStyle="light-content" />
//     <Text style={styles.title}>Add hub page</Text>
//     <View style={{ flexDirection: 'column' }}>
//       {' '}
//       <View style={{ flexDirection: 'row' }}>
//         <Text>{'\u2022'}</Text>
//         <Text style={{ flex: 1, paddingLeft: 5 }}>
//           insert an active sim card that can send/ receive sms
//         </Text>
//       </View>
//       <View style={{ flexDirection: 'row' }}>
//         {' '}
//         <Text>{'\u2022'}</Text>
//         <Text style={{ flex: 1, paddingLeft: 5 }}>power on the hub</Text>{' '}
//       </View>
//       <View style={{ flexDirection: 'row' }}>
//         {' '}
//         <Text>{'\u2022'}</Text>
//         <Text style={{ flex: 1, paddingLeft: 5 }}>third point</Text>{' '}
//       </View>
//     </View>
//     <View>
//       {/* <TextInput
//         ref="mobileNo"
//         keyboardType="numeric"
//         style={[styles.textInput, { width: '100%' }]}
//         placeholder="Enter mobile number"
//         onChangeText={(value) => this.handleChange('mobileNo', num)}
//       /> */}
//     </View>

//     <Button
//       title="Add Hub"
//       color="white"
//       backgroundColor={colors.lightPurple}
//       onPress={() => {
//         navigation.navigate('Details', { from: 'Home' })
//       }}
//     />
//   </View>
// )

// AddHub.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func,
//   }),
// }

// AddHub.defaultProps = {
//   navigation: { navigate: () => null },
// }

// export default AddHub

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import * as Yup from 'yup'

import Text from '../../components/Text'
import Listing from '../../components/Listing'
import { AppFormField, Form, SubmitForm } from '../../components/form'
import Screen from '../../components/Screen'
import Modal from '../../components/Modal'

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
        initialValues={details}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
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

        <SubmitForm title="Add Hub" />
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

const styles = ScaledSheet.create({
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'justify',
    marginTop: '10@s',
  },
})

export default AddHub
