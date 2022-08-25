import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { colors } from 'theme'
import Text from '../Text'
import scale from '../../utils/scale'

function Listing({ itemLists }) {
  return (
    <View style={styles.container}>
      {itemLists?.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <View style={styles.circle} />
          <Text style={styles.itemText} content={item.content} />
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: scale(15),
    paddingHorizontal: scale(20),
    alignItems: 'flex-start',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(6),
  },
  itemText: {
    fontSize: scale(12),
    textAlign: 'justify',
  },
  circle: {
    width: scale(15),
    height: scale(15),
    backgroundColor: colors.darkGray,
    borderRadius: scale(8),
    marginRight: scale(15),
  },
  content: {
    fontSize: scale(14),
    color: colors.darkGray,
    fontWeight: '900',
  },
})

Listing.propTypes = {
  itemLists: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, content: PropTypes.string }),
  ),
}

Listing.defaultProps = {
  itemLists: [],
}
export default Listing
