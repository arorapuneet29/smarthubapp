import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'pages/Home'
import Profile from 'pages/Profile'
import IntroScreen from 'pages/Intro'
import Details from 'pages/Details'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import AppBar from '../../components/AppBar/index'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------
export const IntroNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Intro" component={IntroScreen} />
  </Stack.Navigator>
)
export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      // options={({ navigation }) => ({
      //   title: 'Home',
      //   headerLeft: () => <HeaderLeft navigation={navigation} />,
      //   headerTitle: () => <HeaderTitle />,
      // })}
      screenOptions={{
        header: (props) => <AppBar {...props} />,
      }}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      // navigation.navigate('Details', { from: 'Home' })
      // options={({ navigation }) => ({
      //   title: 'Home',
      //   headerLeft: () => <HeaderLeft navigation={navigation} />,
      //   headerTitle: () => <HeaderTitle />,
      // })}
      screenOptions={{
        header: ({ navigation }) => (
          <AppBar navigation={navigation} title="Details" back />
        ),
      }}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation }) => ({
        title: 'Profile',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details',
      }}
    />
  </Stack.Navigator>
)
