/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
// import SplashScreen from 'react-native-splash-screen';

import {
  // Platform,
  StyleSheet,
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  // StyleSheet,

  // View,
} from 'react-native';

import {Provider, useSelector} from 'react-redux';

import {screens} from './assets/data/data';
import {useForm, FormProvider} from 'react-hook-form';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const Stack = createNativeStackNavigator();
  // const [initialRoute, setInitialRoute] = useState('Start');

  // useEffect(() => {
  //   const loadLastScreen = async () => {
  //     const savedScreen = await AsyncStorage.getItem('lastScreen');
  //     if (savedScreen) {
  //       setInitialRoute(savedScreen);
  //     }
  //   };
  //   loadLastScreen();
  // }, []);

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      selectedOptions: {},
      selectedPersonalies: {},
      // ...savedFormData,
    },
  });
  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     SplashScreen.hide();
  //   }
  // }, []);
  return (
    <FormProvider {...methods}>
      <NavigationContainer
        // onStateChange={async state => {
        //   if (state) {
        //     const currentRoute = state.routes[state.index].name;
        //     await AsyncStorage.setItem('lastScreen', currentRoute); // Save screen name
        //   }
        // }}
        style={styles.container}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                // gestureEnabled: false,
              }}
              // initialRouteName={initialRoute}
              >
              {screens.map(item => (
                <Stack.Screen
                  key={item.id}
                  name={item.name}
                  component={item.component}
                />
              ))}
            </Stack.Navigator>
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
});

export default App;
