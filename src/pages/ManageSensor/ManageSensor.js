import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import AppIcon from '../../components/AppIcon'
// import PropTypes from 'prop-types'

import { ListItem, ItemSeparator } from '../../components/ListItem'
import colors from '../../theme/colors'
import scale from '../../utils/scale'

function ManageSensor() {
  // const { hubId } = route.params
  return (
    <View style={styles.container}>
      <FlatList
        data={[]}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            {...item}
            LeftIcon={(
              <AppIcon
                baseStyle={styles.iconContainer}
                iconName="plus"
                color={colors.white}
                size={20}
              />
            )}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(10),
  },
})

// ManageSensor.propTypes = {
//   route: PropTypes.shape({params:{}})
// }

// ManageSensor.defaultProps = {
//   route: { params: {}},
// }

export default ManageSensor
