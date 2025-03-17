import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/DarkThemeContext';
import Octicons from 'react-native-vector-icons/Octicons';

const Filter = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
        <Octicons
          name="multi-select"
          size={24}
          color={theme === 'dark' ? '#e5e7eb' : '#f3f4f6'}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Explore</Text>
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      // height: 60,
      gap: 80,
      paddingVertical: 20,
      paddingHorizontal: 40,
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
    },
    title: {
      fontSize: 25,
      textAlign: 'center',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
      fontFamily: 'Poppins-SemiBold',
    },
  });

export default Filter;
