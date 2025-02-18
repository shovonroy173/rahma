/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  StyleSheet,
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  // StyleSheet,

  // View,
} from 'react-native';


import LoginScreen from './src/screens/LoginScreen';
import StartScreen from './src/screens/StartScreen';
// import { ProgressProvider } from './src/context/ProgressValueProvider';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import OtpScreen from './src/screens/OtpScreen';
import TermsScreen from './src/screens/TermsScreen';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen';
import PhoneScreen from './src/screens/PhoneScreen';





function App(){

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Provider store={store}>

      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="Phone" component={PhoneScreen} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#ffffff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
