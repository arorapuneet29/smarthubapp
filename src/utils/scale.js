import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const [shortDimension] = width < height ? [width, height] : [height, width]

const baseWidth = 350

const scale = (size) => (shortDimension / baseWidth) * size

export default scale
