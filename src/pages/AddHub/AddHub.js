import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const AddHub = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Add hub page</Text>
    <View style={{ flexDirection: 'column' }}>
      {' '}
      <View style={{ flexDirection: 'row' }}>
        <Text>{'\u2022'}</Text>
        <Text style={{ flex: 1, paddingLeft: 5 }}>
          insert an active sim card that can send/ receive sms
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        {' '}
        <Text>{'\u2022'}</Text>
        <Text style={{ flex: 1, paddingLeft: 5 }}>power on the hub</Text>{' '}
      </View>
      <View style={{ flexDirection: 'row' }}>
        {' '}
        <Text>{'\u2022'}</Text>
        <Text style={{ flex: 1, paddingLeft: 5 }}>third point</Text>{' '}
      </View>
    </View>
    <View>
      {/* <TextInput
        ref="mobileNo"
        keyboardType="numeric"
        style={[styles.textInput, { width: '100%' }]}
        placeholder="Enter mobile number"
        onChangeText={(value) => this.handleChange('mobileNo', num)}
      /> */}
    </View>

    <Button
      title="Add Hub"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
        navigation.navigate('Details', { from: 'Home' })
      }}
    />
  </View>
)

AddHub.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

AddHub.defaultProps = {
  navigation: { navigate: () => null },
}

export default AddHub
