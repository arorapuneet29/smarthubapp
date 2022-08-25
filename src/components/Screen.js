import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, StyleSheet } from 'react-native'
import { colors } from 'theme'
import scale from '../utils/scale'

function Screen({ children, style }) {
  return <ScrollView style={[styles.container, style]}>{children}</ScrollView>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    padding: scale(20),
    flex: 1,
  },
})

Screen.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Screen
