import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'pages/Home'
import Profile from 'pages/Profile'
import IntroScreen from 'pages/Intro'
import AppBar from '../../components/AppBar/index'
import SelectHub from '../../pages/SelectHub/index'
// import AddHub from '../../pages/AddHub/AddHub'

// temp
import AddHub from '../../screens/AddHub'
import AddAHub from '../../screens/AddAHub'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
  headerTitleAlign: 'center',
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
      options={({ navigation }) => ({
        title: 'Home',
        // headerLeft: () => <HeaderLeft navigation={navigation} />,
        header: () => (
          <AppBar navigation={navigation} title="Home" plus setting />
        ),
      })}
    />
    {/* <Stack.Screen
      name="AddHub"
      component={AddHub}
      // navigation.navigate('Details', { from: 'Home' })
      // options={({ navigation }) => ({
      //   title: 'Home',
      //   headerLeft: () => <HeaderLeft navigation={navigation} />,
      //   headerTitle: () => <HeaderTitle />,
      // })}
      screenOptions={{
        header: ({ navigation }) => (
          <AppBar navigation={navigation} title="Add Hub" back plus />
        ),
      }}
    /> */}
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="SelectHub"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="SelectHub"
      component={SelectHub}
      options={({ navigation }) => ({
        title: 'Home',
        // headerLeft: () => <HeaderLeft navigation={navigation} />,
        header: () => (
          <AppBar
            navigation={navigation}
            title="Select your hub"
            back
            plus
            setting
          />
        ),
      })}
      // screenOptions={{
      //   header: ({ navigation }) => (
      //     <AppBar
      //       navigation={navigation}
      //       title="Select your hub"
      //       back
      //       plus
      //       setting
      //     />
      //   ),
      // }}
      // screenOptions={{
      //   header: (props) => <AppBar {...props} />,
      // }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      screenOptions={{
        header: ({ navigation }) => (
          <AppBar
            navigation={navigation}
            title="Select your hub"
            back
            plus
            setting
          />
        ),
      }}
    />
  </Stack.Navigator>
)

export const TempNavigator = () => (
  <Stack.Navigator
    initialRouteName="AddHub"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen name="AddHub" component={AddHub} />
    <Stack.Screen
      name="AddAHub"
      component={AddAHub}
      options={{ title: 'Add A Hub' }}
    />
  </Stack.Navigator>
)
