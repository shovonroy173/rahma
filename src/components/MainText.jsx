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
      // backgroundColor: theme === 'dark' ? '#121212' : '#ffffff',
    },
    mainText: {
      fontSize: responsiveFontSize(3.5),
      textAlign: 'center',
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#ffffff' : '#000000',
    },
    subText: {
      fontSize: 16,
      textAlign: 'center',
      fontFamily: 'Poppins-Regular',
      color: theme === 'dark' ? '#b3b3b3' : '#333333',
    },
  });

export default MainText;
