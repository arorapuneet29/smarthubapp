import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { introDone } from 'slices/app.slice'

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native'

import AppIntroSlider from 'react-native-app-intro-slider'

const AppIntro = () => {
  const [showRealApp, setShowRealApp] = useState(false)

  const onDone = () => {
    setShowRealApp(true)
    dispatch(introDone({ checked: true }))
  }
  const onSkip = () => {
    setShowRealApp(true)
  }
  const dispatch = useDispatch()

  const RenderItem = ({ item }) => (
    <View
      style={{
        flex: 1,
        backgroundColor: item.backgroundColor,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 100,
      }}
    >
      <Text style={styles.introTitleStyle}>{item.title}</Text>
      <Image style={styles.introImageStyle} source={item.image} />
      <Text style={styles.introTextStyle}>{item.text}</Text>
    </View>
  )

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton
          onSkip={onSkip}
        />
      )}
    </>
  )
}

export default AppIntro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
    paddingHorizontal: 40,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 16,
    fontWeight: 'bold',
    width: 300,
  },
})

const slides = [
  {
    key: 's1',
    text: 'The SmartGuard suite is controlled from central Hub. Be sure to use an active SIM card to communicatewith Hub!',
    title: 'Welcome to your SmartGuard Hub!',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#3377b2',
  },
  {
    key: 's2',
    title: 'Get started by adding device here',
    text: 'Adding new device to expand your home security is as easy as 3 taps!',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#32b29b',
  },
  {
    key: 's3',
    title: 'Manage your sensors individually!',
    text: 'Have certain senrors stay vigilant for intruders while you are at home!',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#cb5b3c',
  },
]
