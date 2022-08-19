import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { colors } from 'theme'
import Text from './Text'

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

const styles = ScaledSheet.create({
  container: {
    paddingVertical: '15@s',
    paddingHorizontal: '20@s',
    alignItems: 'flex-start',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '6@s',
  },
  itemText: {
    fontSize: '12@s',
    textAlign: 'justify',
  },
  circle: {
    width: '15@s',
    height: '15@s',
    backgroundColor: colors.darkGray,
    borderRadius: '8@s',
    marginRight: '15@s',
  },
  content: {
    fontSize: '14@s',
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
