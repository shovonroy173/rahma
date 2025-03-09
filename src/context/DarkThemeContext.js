import React, {createContext, useState, useEffect} from 'react';
import {Appearance, AppState} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      setTheme(savedTheme || Appearance.getColorScheme());
    };

    loadTheme();

    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setTheme(colorScheme);
      AsyncStorage.setItem('theme', colorScheme);
    });

    const appStateListener = AppState.addEventListener('change', () => {
      setTheme(Appearance.getColorScheme());
    });

    return () => {
      subscription.remove();
      appStateListener.remove();
    };
  }, []);

  return (
    <ThemeContext.Provider value={{theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
