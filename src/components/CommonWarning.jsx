/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/DarkThemeContext';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const CommonWarning = ({title}) => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/warning.png')} />
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: responsiveFontSize(1.5),
          color: theme === 'dark' ? '#e5e7eb' : '#111111',
        }}>
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
      paddingVertical: responsiveHeight(2),
      paddingHorizontal: responsiveWidth(2),
      backgroundColor: theme === 'dark' ? '#1C1C1C' : '#F3F2F2',
      borderRadius: 10,
    },
  });

export default CommonWarning;
