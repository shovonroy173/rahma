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

import {Provider} from 'react-redux';

import {screens} from './assets/data/data';
import {useForm, FormProvider} from 'react-hook-form';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeProvider} from './src/context/DarkThemeContext';

function App() {
  const Stack = createNativeStackNavigator();
  const [isLoading, setIsLoading] = useState(true);
  const [initialState, setInitialState] = useState(null);

  useEffect(() => {
    const loadNavigationState = async () => {
      try {
        const savedState = await AsyncStorage.getItem('navigationState');
        if (savedState) {
          setInitialState(JSON.parse(savedState));
        }
      } catch (error) {
        console.error('Failed to load navigation state:', error);
      } finally {
        setIsLoading(false);
        // console.log('out of loop');
      }
    };
    loadNavigationState();
  }, []);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      selectedOptions: {},
      selectedPersonalies: {},
      faceVerification: false,
    },
  });

  // Wait for AsyncStorage to load before rendering navigation
  if (isLoading) {
    return null; // or a loading spinner if needed
  }

  return (
    <FormProvider {...methods}>
      <NavigationContainer
        initialState={initialState}
        onStateChange={async state => {
          await AsyncStorage.setItem('navigationState', JSON.stringify(state));
        }}
        style={styles.container}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                {screens.map(item => (
                  <Stack.Screen
                    key={item.id}
                    name={item.name}
                    component={item.component}
                  />
                ))}
              </Stack.Navigator>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
