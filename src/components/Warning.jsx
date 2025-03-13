/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/DarkThemeContext';
const Warning = ({title, icon}) => {
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      {icon}
      <Text style={{color: theme === 'dark' ? '#E8E5E5' : '#111111'}}>
        {title}
      </Text>
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      padding: 20,
      backgroundColor: theme === 'dark' ? '#333333' : '#E8E5E5',
      borderRadius: 25,
    },
  });

export default Warning;
