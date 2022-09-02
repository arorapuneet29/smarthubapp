import React, { useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import * as Yup from 'yup'

import { useSelector } from 'react-redux'
import Screen from '../../components/Screen'
import Text from '../../components/Text'
import { AppFormField, Form, SubmitForm } from '../../components/form'
import scale from '../../utils/scale'
import colors from '../../theme/colors'
import Modal from '../../components/Modal'
import { addSensor, updateSensor } from '../../slices/app.slice'
import store from '../../utils/store'

function AddSensor({ navigation, route }) {
  const { name } = route.params
  const { hub } = useSelector((state) => state.app)
  const { height } = Dimensions.get('window')
  const validationSchema = Yup.object().shape({
    sensorName: Yup.string().required().label('Sensor Name').max(64),
    message: Yup.string().required().label('Custom message').max(160),
  })

  const initial = { visible: false, content: {} }

  const [modal, setModal] = useState(initial)
  const [sensor, setSensor] = useState()

  const onSubmit = ({ sensorName, message }) => {
    if (route.params?.editMode) {
      const details = { ...route.params }
      details.sensorName = sensorName
      details.message = message

      console.log('====================================')
      console.log(details)
      console.log('====================================')
      store.dispatch(
        updateSensor({
          data: {
            hubId: route.params?.hubId,
            sensorDetails: { ...details },
          },
        }),
      )

      navigation.goBack()
    } else {
      const values = { ...modal }
      values.visible = true
      values.content = {
        initial: {
          title: 'scanning for sensor',
          type: 'loading',
          endTime: 100,
          footerText: ['This might take a few mintutes', 'Please be patient.'],
        },
        afterCounter: {
          title: 'sensor added',
          subTitle: sensorName,
          icon: 'check',
          buttons: [
            {
              name: 'Add Another Sensor',
              url: 'initialSensor',
            },
            {
              name: 'Continue',
              url: 'ManageSensor',
            },
          ],
        },
      }

      setModal(values)
      setSensor({ sensorName, message, name })
    }
  }

  const onNavigate = (path) => {
    setModal(initial)
    const {
      sensorId, hubId, imageUrl, model, bgImageUrl, slot,
    } = route.params
    const { sensorName, message } = sensor
    const today = new Date()
    const date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
    store.dispatch(
      addSensor({
        data: {
          hubId,
          sensorDetails: {
            sensorId,
            imageUrl,
            bgImageUrl,
            model,
            message,
            sensorName,
            slot,
            registeredDate: date,
            armed: false,
            masterRemoteController: false,
            active: true,
          },
        },
      }),
    )

    const hubDetails = hub?.filter((item) => item.hubId === hubId)

    navigation.navigate(path, { hubId, sensors: hubDetails[0]?.sensors })
  }
  return (
    <Screen style={styles.screen}>
      <View style={[styles.form, { height: parseInt(height - 140, 10) }]}>
        <Form
          initialValues={{
            sensorName: route.params?.sensorName || '',
            message: route.params?.message || '',
          }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <View style={styles.sectionOne}>
            <AppFormField
              title="Sensor Name"
              placeholder="Front Door"
              autoCapitalize="none"
              autoCorrect={false}
              name="sensorName"
              keyboardType="default"
              style={{}}
            />
            <Text
              style={styles.label}
              content="This custom name will be used to identify the sensor as a registered through the app"
            />
          </View>
          <View style={styles.sectionTwo}>
            <AppFormField
              title="Custom SMS Message"
              customPlaceholder="Waring! An alarm has been triggered from sensor ID 1AHD-WSQ-9182"
              placeholder="Place return home immediately.You can switch off the alarm from the app"
              autoCapitalize="none"
              autoCorrect={false}
              multiline
              numberOfLines={10}
              textAreaField
              style={styles.message}
              maxLength={160}
              name="message"
              keyboardType="default"
            />
            <Text
              style={styles.label}
              content="This message will be sent out to all registered users when this sensor is triggered while the hub is Armed"
            />
          </View>
          <View style={styles.sectionThree}>
            <Text
              content="Make sure the sensor is powered on before procceding The sensor will add on slot 001"
              style={styles.messageTwo}
            />
            <SubmitForm
              title={
                route.params?.sensorName
                  ? 'Update Sensor'
                  : 'Scan & Add a sensor'
              }
              btnText={styles.btnText}
              btnContainer={styles.btnContainer}
            />
          </View>
        </Form>
      </View>
      {modal.visible && (
        <Modal
          onNavigate={onNavigate}
          details={modal.content}
          modalVisible={modal.visible}
        />
      )}
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 0,
  },
  form: { position: 'relative' },
  sectionOne: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    paddingHorizontal: scale(10),
  },
  sectionTwo: {
    paddingHorizontal: scale(10),
  },
  label: {
    paddingLeft: 5,
    marginTop: scale(10),
    paddingBottom: scale(20),
    fontWeight: '600',
    fontSize: scale(13),
  },
  message: {
    height: scale(150),
    marginTop: scale(10),
  },
  messageTwo: {
    fontWeight: '800',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  sectionThree: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  btnText: {
    textTransform: 'uppercase',
    color: colors.white,
    fontSize: scale(14),
  },
  btnContainer: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: colors.darkBlue,
    borderRadius: 7,
  },
})

export default AddSensor
