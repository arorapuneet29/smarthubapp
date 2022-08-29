import { Asset } from 'expo-asset'

const images = {
  logo_sm: require('../../assets/images/logo-sm.png'),
  logo_lg: require('../../assets/images/logo-lg.png'),
  sensor_1: require('../../assets/images/sensors/sensor_1.png'),
  sensor_2: require('../../assets/images/sensors/sensor_2.png'),
  pic_1: require('../../assets/images/sensors/bedroom.jpg'),
  pic_2: require('../../assets/images/sensors/bedroom_2.jpg'),
  pic_3: require('../../assets/images/sensors/bedroom_3.jpg'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())

export default images
