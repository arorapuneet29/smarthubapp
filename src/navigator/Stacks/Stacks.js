import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'pages/Home'
import Profile from 'pages/Profile'
import IntroScreen from 'pages/Intro'
import { View } from 'react-native'
import AppBar from '../../components/AppBar/index'
import SelectHub from '../../pages/SelectHub/index'
import AddHub from '../../pages/AddHub'
import AddAHub from '../../pages/AddHub/AddAHub'
import Hub from '../../pages/Hub'
import ManageSensor from '../../pages/ManageSensor'
import AppIcon from '../../components/AppIcon/AppIcon'
import { InitialSensor, SensorList, AddSensor } from '../../pages/AddSensor'
import SensorDetails from '../../pages/SensorDetails/SensorDetails'
import SensorAppBar from '../../components/SensorAppBar/SensorAppBar'

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
      options={() => ({
        title: 'Home',
        // headerLeft: () => <HeaderLeft navigation={navigation} />,
        // header: () => (
        //   <AppBar navigation={navigation} title="Home" plus setting />
        // ),
        // headerRight: () => (
        //   <View style={{ marginRight: 13 }}>
        //     <AppIcon
        //       iconName="plus"
        //       color='red'
        //       onPress={() => navigation.navigate('initialSensor', { ...route.params })}
        //     />
        //   </View>
        // ),
      })}
    />
    <Stack.Screen
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
    />
    <Stack.Screen
      name="AddAHub"
      component={AddAHub}
      screenOptions={{
        header: ({ navigation }) => (
          <AppBar navigation={navigation} title="Add A Hub" back plus />
        ),
      }}
    />
    <Stack.Screen
      name="Hub"
      component={Hub}
      screenOptions={{
        header: ({ navigation }) => <AppBar navigation={navigation} />,
      }}
      options={({ route }) => ({
        title: route.params?.hubName,
      })}
    />
    <Stack.Screen
      name="ManageSensor"
      component={ManageSensor}
      options={({ navigation, route }) => ({
        title: 'Manage Sensor',
        headerRight: () => (
          <View style={{ marginRight: 13 }}>
            <AppIcon
              iconName="plus"
              onPress={() => navigation.navigate('initialSensor', { ...route.params })}
            />
          </View>
        ),
      })}
    />

    <Stack.Screen
      name="initialSensor"
      component={InitialSensor}
      options={{ title: 'Add A Sensor' }}
    />
    <Stack.Screen
      name="sensors"
      component={SensorList}
      options={{ title: 'Add A Sensor' }}
    />
    <Stack.Screen
      name="addsensor"
      component={AddSensor}
      options={({ route }) => ({
        title: route?.params?.sensorName ? 'Edit Sensor' : 'Add A Sensor',
      })}
    />
    <Stack.Screen
      name="sensor"
      component={SensorDetails}
      options={({ route }) => ({
        title: route.params?.sensorName,
        headerRight: () => <SensorAppBar />,
      })}
    />
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

export const InitialNavigator = () => (
  <Stack.Navigator
    initialRouteName="AddHub"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen name="AddHub" component={AddHub} />
    <Stack.Screen name="AddAHub" component={AddAHub} />
    <Stack.Screen name="Home" component={HomeNavigator} />
  </Stack.Navigator>
)
