import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
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

const SelectHub = ({ navigation }) => {
  const { hub } = useSelector((state) => state.app)
  return hub.length > 0 ? (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>hub list here</Text>
      <Button
        title="Add new hub"
        color="white"
        backgroundColor={colors.lightPurple}
        onPress={() => {
          navigation.navigate('AddHub', { from: 'Home' })
        }}
      />
    </View>
  ) : (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>No hub is been added</Text>
      <Button
        title="Add new hub"
        color="white"
        backgroundColor={colors.lightPurple}
        onPress={() => {
          navigation.navigate('AddHub', { from: 'Home' })
        }}
      />
    </View>
  )
}

SelectHub.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

SelectHub.defaultProps = {
  navigation: { navigate: () => null },
}

export default SelectHub
