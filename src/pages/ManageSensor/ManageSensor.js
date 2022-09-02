import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import AppIcon from '../../components/AppIcon'

import { ListItem, ItemSeparator } from '../../components/ListItem'
import colors from '../../theme/colors'
import images from '../../theme/images'
import scale from '../../utils/scale'
import Modal from '../../components/Modal/Modal'
import { removeSensor } from '../../slices/app.slice'
import store from '../../utils/store'
import ListItemEmpty from '../../components/ListItem/ListItemEmpty'

function ManageSensor({ route, navigation }) {
  const { hubId } = route.params
  const { hub } = useSelector((state) => state.app)
  const initial = { visible: false, content: {} }
  const [modal, setModal] = useState(initial)

  const hubDetails = hub?.filter((item) => item.hubId === hubId)
  const sensorList = hubDetails?.length > 0 ? hubDetails[0].sensors : []

  const onSensorRemove = (sensorId) => {
    const sensor = sensorList?.filter((item) => item?.sensorId === sensorId)

    if (sensor.length > 0) {
      const values = { ...modal }
      values.sensorId = sensorId
      values.visible = true
      values.content = {
        initial: {
          title: `Removing '${sensor[0]?.sensorName}'`,
          subTitle: sensor[0]?.slot,
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
          subTitle: sensor[0]?.sensorName,
          icon: 'check',
          nextScreen: 'ManageSensor',
        },
      }

      setModal(values)
    }
  }

  const onNavigate = () => {
    store.dispatch(
      removeSensor({
        data: {
          sensorId: modal?.sensorId,
          hubId,
        },
      }),
    )
    setModal(initial)
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

  const onEditSensor = (sensorId, closeMenu) => {
    closeMenu()
    const sensorDetails = sensorList?.filter(
      (sensor) => sensor?.sensorId === sensorId,
    )
    navigation.navigate('addsensor', {
      ...sensorDetails[0],
      editMode: true,
      hubId,
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={sensorList}
        keyExtractor={(item) => item.sensorId}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            {...item}
            hubId={hubId}
            title={item?.sensorName}
            subTitle={item?.model}
            onEdit={onEditSensor}
            onSensorRemove={onRemoveConfirm}
            onPress={() => navigation.navigate('sensor', { ...item, hubId })}
            LeftIcon={(
              <AppIcon
                baseStyle={styles.imageContainer}
                imageStyle={styles.image}
                imageUrl={images[item?.imageUrl]}
              />
            )}
            RightIcon
          />
        )}
        ListEmptyComponent={ListItemEmpty}
      />
      {modal.visible && (
        <Modal
          details={modal.content}
          onNavigate={onNavigate}
          modalVisible={modal.visible}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 20,
  },
  imageContainer: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    backgroundColor: colors.white,
    marginRight: scale(10),
    margin: scale(14),
    overflow: 'hidden',
    borderColor: colors.darkBlue,
    borderWidth: 2,
  },
  image: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    backgroundColor: colors.white,
    resizeMode: 'contain',
  },
})

export default ManageSensor
