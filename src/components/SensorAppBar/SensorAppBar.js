import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { removeSensor } from '../../slices/app.slice'
import sensorInfo from '../../utils/main'
import store from '../../utils/store'
import AppIcon from '../AppIcon'
import Modal from '../Modal/Modal'

function SensorAppBar() {
  const navigation = useNavigation()
  const { hub } = useSelector((state) => state.app)

  const route = useRoute()
  const initial = { visible: false, content: {} }
  const [modal, setModal] = useState(initial)

  const details = sensorInfo(hub, route.params?.hubId, route.params?.sensorId)

  const onSensorRemove = (sensorId) => {
    const sensor = { ...route.params }
    const values = { ...modal }
    values.sensorId = sensorId
    values.visible = true
    values.content = {
      initial: {
        title: `Removing '${sensor?.sensorName}'`,
        subTitle: sensor?.slot,
        specialKey: 'removeSensor',
        type: 'wifi',
        endTime: 100,
        footerText: [
          'This might take a few mintutes',
          'Please be do not close the app during this time.',
        ],
      },
      afterCounter: {
        title: 'sensor removed',
        subTitle: sensor?.sensorName,
        icon: 'check',
        nextScreen: 'ManageSensor',
      },
    }

    setModal(values)
  }

  const onRemoveConfirm = (sensorId) => {
    const values = { ...modal }
    values.visible = true
    values.content = {
      initial: {
        title: 'Are You Sure ?',
        type: 'confirm',
        bodyText: [
          'Once a sensor has been disconnected from the Hub.it will not trigger the siren even if it is powered on.',
          'You will have to re-register the sensor to use it again',
        ],
        accept: {
          name: "Yes,I'm sure",
          onPress: () => onSensorRemove(sensorId),
        },
        reject: {
          name: 'No, go back',
          onPress: () => setModal(initial),
        },
      },
    }
    setModal(values)
  }

  const onNavigate = () => {
    store.dispatch(
      removeSensor({
        data: {
          sensorId: modal?.sensorId,
          hubId: route.params?.hubId,
        },
      }),
    )
    setModal(initial)
    navigation.navigate('ManageSensor')
  }

  return (
    <>
      <View style={styles.container}>
        <AppIcon
          iconName="pencil-alt"
          onPress={() => navigation.navigate('addsensor', {
            ...details,
            editMode: true,
            hubId: route.params?.hubId,
          })}
        />
        <AppIcon
          iconName="trash-alt"
          onPress={() => onRemoveConfirm(route.params?.sensorId)}
        />
      </View>
      {modal.visible && (
        <Modal
          details={modal.content}
          onNavigate={onNavigate}
          modalVisible={modal.visible}
        />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    right: 15,
    width: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default SensorAppBar
