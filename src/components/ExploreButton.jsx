import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const ExploreButton = ({title, type, id}) => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  // console.log("theme", theme);

  return (
    <TouchableOpacity
      onPress={() => {
        console.log('Pressed');
      }}
      style={[type === 'bg' ? styles.loginButton : styles.nonBgButton]}>
      <Text
        style={[
          type === 'bg' ? styles.loginButtonText : styles.nonBgButtonText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// const {width} = Dimensions.get('window');
// const {height} = Dimensions.get('window');

const getStyles = theme =>
  StyleSheet.create({
    // container: {
    //   height: height,
    // },
    loginButton: {
      width: responsiveWidth(85),
      // backgroundColor: '#379A35',
      backgroundColor: theme === 'dark' ? '#1A3D1A' : '#379A35',
      padding: responsiveHeight(1.5),
      borderRadius: 100,
    },
    loginButtonText: {
      // color: '#000000',
      color: theme === 'dark' ? '#7A7676' : '#000000',
      textAlign: 'center',
      fontSize: responsiveFontSize(2),
      fontFamily: 'Poppins-SemiBold',
    },
    nonBgButtonText: {
      // color: '#379A35',
      color: theme === 'dark' ? '#14532d' : '#379A35',
      textAlign: 'center',
      fontSize: responsiveFontSize(2),
      fontFamily: 'Poppins-SemiBold',
    },
    nonBgButton: {
      width: responsiveWidth(85),
      borderWidth: 4,
      // borderColor: '#379A35',
      borderColor: theme === 'dark' ? '#1A3D1A' : '#379A35',
      backgroundColor: theme === 'dark' ? 'black' : 'white',
      // backgroundColor: 'white',
      padding: responsiveHeight(1),
      borderRadius: 100,
      opacity: 0.7,
      cursor: 'auto',
    },
  });

export default ExploreButton;
