/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/DarkThemeContext';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
const Warning = ({title, icon}) => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      {icon}
      <Text style={{color: theme === 'dark' ? '#e5e7eb' : '#111111', fontFamily: 'Poppins-Regular'}}>
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
      paddingVertical: responsiveHeight(1),
      paddingHorizontal: responsiveWidth(6),
      backgroundColor: theme === 'dark' ? '#333333' : '#E8E5E5',
      borderRadius: 25,
    },
  });

export default Warning;
