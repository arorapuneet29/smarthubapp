import React, { useState } from 'react'
import { StyleSheet, Switch, View } from 'react-native'
import {
  Menu as BaseMenu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'

import store from '../../slices/store'
import colors from '../../theme/colors'
import scale from '../../utils/scale'
import AppIcon from '../AppIcon'
import Text from '../Text/Text'
import { updateSensor } from '../../slices/app.slice'

function Menu({
  onRemove, onEdit, sensorId, ...otherProps
}) {
  const [open, setOpen] = useState(false)
  const onChange = (field, value) => {
    const latestValue = { ...otherProps, sensorId }
    latestValue[field] = value
    store.dispatch(
      updateSensor({
        data: {
          hubId: otherProps?.hubId,
          sensorDetails: { ...latestValue },
        },
      }),
    )
  }

  const onClose = () => setOpen(!open)
  return (
    <View style={styles.container}>
      <BaseMenu opened={open} onBackdropPress={onClose}>
        <MenuTrigger>
          <AppIcon
            iconStyle={styles.rightIcon}
            iconName="ellipsis-v"
            color={colors.gray}
            size={scale(16)}
            onPress={onClose}
          />
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.options}>
          <MenuOption
            style={styles.option}
            onSelect={() => onEdit(sensorId, onClose)}
          >
            <AppIcon
              iconStyle={styles.icon}
              color={colors.gray}
              iconName="pencil-alt"
            />
            <Text content="Edit" style={styles.optionText} />
          </MenuOption>
          <MenuOption style={styles.option} onSelect={() => onRemove(sensorId)}>
            <AppIcon
              iconStyle={styles.icon}
              color={colors.gray}
              iconName="trash-alt"
            />
            <Text content="Remove" style={styles.optionText} />
          </MenuOption>
          <MenuOption style={styles.option}>
            <AppIcon
              iconStyle={styles.icon}
              color={colors.gray}
              iconName="mobile"
            />
            <Text content="master control" style={styles.optionText} />
            <Switch
              value={otherProps?.masterRemoteController}
              onChange={() => onChange(
                'masterRemoteController',
                !otherProps.masterRemoteController,
              )}
              style={styles.switch}
              thumbColor={colors.darkBlue}
              trackColor={colors.darkBlue}
            />
          </MenuOption>
        </MenuOptions>
      </BaseMenu>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  rightIcon: {
    marginHorizontal: scale(10),
  },
  options: {
    flex: 1,
  },

  icon: {
    marginRight: scale(10),
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 2,
  },
  optionText: {
    fontSize: scale(12),
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    margin: 0,
  },
})

export default Menu
