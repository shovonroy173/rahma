/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {
  StyleSheet,
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  // StyleSheet,

  // View,
} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/redux/store';
import {screens} from './assets/data/data';
import { useForm, FormProvider } from 'react-hook-form';

function App() {
  const Stack = createNativeStackNavigator();
  const methods = useForm({ mode: 'onChange'});
  return (
    <FormProvider {...methods}>
    <NavigationContainer style={styles.container}>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}>
          {screens.map(item => (
            <Stack.Screen
              key={item.id}
              name={item.name}
              component={item.component}
            />
          ))}
        </Stack.Navigator>
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
