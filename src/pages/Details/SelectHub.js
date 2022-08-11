// import React from 'react'
// import PropTypes from 'prop-types'
// import { StyleSheet, Text, View, StatusBar } from 'react-native'
// import Button from './node_modules/components/Button'
// import { colors } from './node_modules/theme'

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

// const SelectHub = ({ route, navigation }) => {
//   const from = route?.params?.from
//   return (
//     <View style={styles.root}>
//       <StatusBar barStyle="light-content" />
//       <Text style={styles.title}>{`Details (from ${from})`}</Text>
//       <Button
//         title="Go Back"
//         color="white"
//         backgroundColor={colors.pink}
//         onPress={navigation.goBack}
//       />
//     </View>
//   )
// }

// SelectHub.propTypes = {
//   route: PropTypes.shape({
//     params: PropTypes.shape({ from: PropTypes.string }),
//   }),
//   navigation: PropTypes.shape({
//     goBack: PropTypes.func,
//   }),
// }

// SelectHub.defaultProps = {
//   route: { params: { from: '' } },
//   navigation: { goBack: () => null },
// }

// export default SelectHub
