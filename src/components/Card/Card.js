import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import scale from '../../utils/scale'
import Text from '../Text'
import colors from '../../theme/colors'
import AppIcon from '../AppIcon'
import images from '../../theme/images'

function Card(props) {
  const {
    imageUrl, name, model, hubId,
  } = props
  const navigation = useNavigation()
  const randomId = parseInt(Math.random() * 1000, 10)
  return (
    <ImageBackground
      source={images[imageUrl]}
      style={styles.image}
      resizeMode="contain"
    >
      <View style={styles.textContainer}>
        <Text content={name} style={styles.sensorName} numberOfLines={1} />
        <Text content={model} />
      </View>
      <View style={styles.addHubBtn}>
        <Text content="Add this" style={styles.addHubText} />
        <AppIcon
          iconName="plus"
          onPress={() => navigation.navigate('addsensor', {
            ...props,
            hubId,
            sensorId: randomId,
          })}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    height: scale(190),
    backgroundColor: colors.white,
  },
  textContainer: {
    marginVertical: scale(5),
    marginHorizontal: scale(10),
  },
  sensorName: {
    color: 'black',
    fontSize: scale(16),
    fontWeight: '600',
  },
  addHubBtn: {
    backgroundColor: colors.darkBlue,
    height: scale(40),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  addHubText: {
    color: colors.white,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})

export default Card
