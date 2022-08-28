import React from 'react'
import {
  View, Image, StyleSheet, TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'

import Screen from '../../components/Screen'
import Text from '../../components/Text/Text'
import colors from '../../theme/colors'
import images from '../../theme/images'
import scale from '../../utils/scale'
import AppIcon from '../../components/AppIcon/AppIcon'
import { ListItem } from '../../components/ListItem'

function InitialSensor({ navigation }) {
  const initialLists = [
    {
      id: 1,
      title: 'Choose a sensor to configure',
      subTitle:
        'Pick the sensor you woud like to configure, and switch it on. Make sure other sensors are off',
    },
    {
      id: 2,
      title: 'Set a Custom Name & Message',
      subTitle:
        "Decide what name to assign to this sensor, and  what custom SMS you's did like to receive when this specific sensor is triggered",
    },
    {
      id: 3,
      title: 'Scan & Add the sensor',
      subTitle:
        'Tap the "Scan & Add" button on next screen, and Hub will automatically detect and pair  with the sensor in range',
    },
  ]
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image source={images.sensor_1} style={styles.image} />
          <Image
            source={images.sensor_1}
            style={[styles.image, { flex: 2, height: scale(100) }]}
            fadeDuration={0}
          />
          <Image source={images.sensor_1} style={styles.image} />
        </View>
        <Text
          content="Sensors are added to the SmantGuard automatically one at a time. Before proceeding. please ensure that all the sensors are currently switched off"
          style={styles.text}
        />
      </View>
      {initialLists.map((item) => (
        <View key={item.id} style={styles.outerContainer}>
          <View style={styles.itemContainer}>
            <ListItem
              {...item}
              LeftIcon={(
                <AppIcon
                  baseStyle={styles.iconContainer}
                  text={item.id}
                  color={colors.white}
                  size={scale(20)}
                />
              )}
            />
          </View>
        </View>
      ))}
      <TouchableOpacity onPress={() => navigation.navigate('sensors')}>
        <View style={styles.start}>
          <Text content="Get Started" style={styles.startText} />
          <AppIcon iconName="angle-right" color={colors.darkBlue} size={18} />
        </View>
      </TouchableOpacity>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: colors.white,
  },
  header: {
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 3,
    padding: scale(15),
    paddingTop: scale(20),
    backgroundColor: colors.lightGray,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: scale(15),
  },
  image: {
    height: scale(70),
    flex: 1,
    borderRadius: 2,
  },
  text: {
    marginTop: scale(25),
    textAlign: 'center',
    fontSize: scale(12),
  },
  outerContainer: {
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 3,
  },
  itemContainer: {
    marginBottom: scale(10),
    padding: scale(12),
  },
  iconContainer: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(10),
  },
  start: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: scale(70),
  },
  startText: {
    fontSize: scale(16),
    color: colors.darkBlue,
    textTransform: 'uppercase',
    marginRight: scale(10),
  },
})

InitialSensor.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

InitialSensor.defaultProps = {
  navigation: { navigate: () => null },
}

export default InitialSensor
