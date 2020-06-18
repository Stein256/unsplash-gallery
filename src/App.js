import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { GalleryScreen, PictureScreen } from './screens'
import rootReducer from './reducers/rootReducer'

const Stack = createStackNavigator()
const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Gallery" headerMode="none">
                    <Stack.Screen name="Gallery" component={GalleryScreen} />
                    <Stack.Screen name="Picture" component={PictureScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App
