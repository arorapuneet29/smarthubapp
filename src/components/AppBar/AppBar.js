// import * as React from 'react'
// import { Appbar } from 'react-native-paper'
// import FontIcon from 'react-native-vector-icons/FontAwesome5'
// import { StyleSheet, View } from 'react-native'
// import { colors } from 'theme'

// function CustomAppBar({
//   navigation, back, title, plus, setting,
// }) {
//   // console.log(object(FontIcon))
//   return (
//     <Appbar.Header style={styles.root}>
//       {back ? (
//         <Appbar.BackAction style={styles.icon} onPress={navigation.goBack} />
//       ) : null}
//       <Appbar.Content title={title} />
//       {plus ? (
//         <FontIcon
//           style={styles.icon}
//           name="home"
//           color={colors.white}
//           size={24}
//           onPress={() => {
//             navigation.navigate('AddHub')
//           }}
//           solid
//         />
//       ) : null}
//       {setting ? (
//         <View style={styles.icon}>
//           <FontIcon
//             name="home"
//             color={colors.white}
//             size={24}
//             onPress={navigation.goBack}
//             solid
//           />
//         </View>
//       ) : null}
//     </Appbar.Header>
//   )
// }

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   icon: {
//     marginRight: 20,
//     marginTop: 0,
//     marginBottom: 0,
//     padding: 0,
//   },
// })

// export default CustomAppBar
