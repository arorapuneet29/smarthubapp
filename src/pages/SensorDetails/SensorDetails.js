import React from 'react'
import {
  ImageBackground, StyleSheet, Switch, View,
} from 'react-native'
import { useSelector } from 'react-redux'

import AppIcon from '../../components/AppIcon'
import Screen from '../../components/Screen'
import Text from '../../components/Text'
import { updateSensor } from '../../slices/app.slice'
import colors from '../../theme/colors'
import images from '../../theme/images'
import sensorInfo from '../../utils/main'
import scale from '../../utils/scale'
import store from '../../utils/store'

function SensorDetails({ route }) {
  const { hub } = useSelector((state) => state.app)
  const { hubId, sensorId } = route.params

  const details = sensorInfo(hub, hubId, sensorId)

  const onChange = (field, value) => {
    const latestValue = { ...details }
    latestValue[field] = value
    store.dispatch(
      updateSensor({
        data: {
          hubId: route.params?.hubId,
          sensorDetails: { ...latestValue },
        },
      }),
    )
  }

  return (
    <Screen style={styles.container}>
      <ImageBackground
        style={styles.sensorImage}
        source={images[details?.bgImageUrl || 'pic_2']}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text content="Disarmed" style={styles.iconText} />
          <AppIcon iconName="lock" size={18} iconStyle={styles.bellIcon} />
        </View>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text content="Sensor Slot" />
          <Text content={details?.slot || '001'} style={styles.valueText} />
        </View>
        <View style={styles.content}>
          <Text content="Sensor Registered on" />
          <Text
            content={details?.registeredDate || '2022-02-22'}
            style={styles.valueText}
          />
        </View>
        <View style={styles.content}>
          <Text content="Sensor Model" />
          <Text content={details?.model || 'TX-231'} style={styles.valueText} />
        </View>

        <View style={[styles.content, { flexDirection: 'column' }]}>
          <Text content="Custom message" />
          <Text
            style={styles.message}
            content={
              details?.message
              || "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            }
          />
        </View>
        <View style={[styles.content, { flexDirection: 'column' }]}>
          <Text content="Control with Master Remote" style={styles.title} />
          <View style={styles.switchContainer}>
            <Text
              style={styles.switchText}
              content="This sensor is currently not being controled by the master remote"
            />
            <Switch
              value={details?.masterRemoteController}
              onChange={() => onChange(
                'masterRemoteController',
                !details.masterRemoteController,
              )}
              style={styles.switch}
              thumbColor={colors.darkBlue}
              trackColor={colors.darkBlue}
            />
          </View>
        </View>
        <View style={[styles.content, { flexDirection: 'column' }]}>
          <Text content="Permanently Arm this sensor?" style={styles.title} />
          <View style={styles.switchContainer}>
            <Text
              style={styles.switchText}
              content="This sensor is currently permanently disarmed, and will not  trigger if the amster remote is armed"
            />
            <Switch
              value={details?.armed}
              onChange={() => onChange('armed', !details.armed)}
              style={styles.switch}
              thumbColor={colors.darkBlue}
              trackColor={colors.darkBlue}
            />
          </View>
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: colors.white,
  },
  sensorImage: {
    height: scale(180),
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.15)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  bellIcon: {
    marginHorizontal: 10,
    marginBottom: scale(15),
  },
  iconText: {
    color: colors.lightGray,
    fontWeight: '400',
    marginBottom: scale(15),
  },
  contentContainer: {
    // padding:scale(15)
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(14),
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 2,
  },
  valueText: {
    fontSize: scale(16),
    fontWeight: '600',
    color: colors.black,
  },
  message: {
    marginVertical: 5,
    color: colors.black,
    fontWeight: '600',
    textAlign: 'left',
  },
  title: {
    color: colors.black,
    fontWeight: '600',
    fontSize: scale(16),
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchText: {
    width: '90%',
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    margin: 0,
  },
})

export default SensorDetails
