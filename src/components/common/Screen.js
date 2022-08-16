import React from 'react'
import PropTypes from 'prop-types'
import { ScaledSheet } from 'react-native-size-matters'
import { ScrollView } from 'react-native'
import { colors } from 'theme'

function Screen({ children, style }) {
  return <ScrollView style={[styles.container, style]}>{children}</ScrollView>
}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    paddingHorizontal: '15@s',
    paddingVertical: '25@s',
    flex: 1,
  },
})

Screen.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Screen
