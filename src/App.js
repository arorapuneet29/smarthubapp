import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from 'utils/store'
import 'utils/ignore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider as PaperProvider } from 'react-native-paper'

// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
import Navigator from './navigator'

const App = () => {
  const [didLoad, setDidLoad] = useState(false)

  // assets preloading
  const handleLoadAssets = async () => {
    await Promise.all([...imageAssets, ...fontAssets])
    setDidLoad(true)
  }

  useEffect(() => {
    handleLoadAssets()
  }, [])
  const persistor = persistStore(store)

  return didLoad ? (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <Navigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  ) : (
    <View />
  )
}

export default App
