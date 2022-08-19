import React from 'react'
import PropTypes from 'prop-types'
import { Text as BaseText } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { colors } from 'theme'

function Text({ content, style }) {
  return <BaseText style={[styles.content, style]}>{content}</BaseText>
}

const styles = ScaledSheet.create({
  content: {
    fontSize: '14@s',
    color: colors.darkGray,
    fontWeight: '500',
  },
})

Text.propTypes = {
  content: PropTypes.string,
  style: PropTypes.shape({}),
}

Text.defaultProps = {
  content: '',
  style: {},
}

export default Text
