import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const MainText = ({text1, text2}) => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{text1}</Text>
      <Text style={styles.subText}>{text2}</Text>
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      display: 'flex',
      gap: responsiveHeight(2),
    },
    mainText: {
      fontSize: responsiveFontSize(3.5),
      textAlign: 'center',
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#f3f4f6' : '#111827',
    },
    subText: {
      fontSize: 16,
      textAlign: 'center',
      fontFamily: 'Poppins-Regular',
      color: theme === 'dark' ? '#9ca3af' : '#333333',
    },
  });

export default MainText;
