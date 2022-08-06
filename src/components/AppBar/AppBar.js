import * as React from 'react'
import { Appbar } from 'react-native-paper'

function CustomAppBar({ navigation, back, title }) {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  )
}

export default CustomAppBar
