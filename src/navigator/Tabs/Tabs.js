import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import * as PP from '@react-navigation/bottom-tabs'
import { colors } from 'theme'

// stack navigators
import { HomeNavigator, ProfileNavigator } from '../Stacks'

const Tab = createBottomTabNavigator()
console.log(PP, '--createBottomTabNavigator')
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Home':
            return (
              <FontIcon
                name="home"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          case 'SelectHub':
            return (
              <FontIcon
                name="address-book"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.lightPurple,
      inactiveTintColor: colors.gray,
      style: {
        backgroundColor: 'white',
        borderTopColor: 'gray',
        borderTopWidth: 1,
        paddingBottom: 5,
        paddingTop: 5,
      },
    }}
    initialRouteName="Home"
    swipeEnabled={false}
  >
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="SelectHub" component={ProfileNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
