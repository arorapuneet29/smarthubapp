import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text as BaseText } from 'react-native'
import { colors } from 'theme'
import scale from '../../utils/scale'

function Text({ content, style, numberOfLines }) {
  return (
    <BaseText numberOfLines={numberOfLines} style={[styles.content, style]}>
      {content}
    </BaseText>
  )
}

const styles = StyleSheet.create({
  content: {
    fontSize: scale(14),
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
