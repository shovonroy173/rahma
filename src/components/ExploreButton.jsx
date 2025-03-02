import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const ExploreButton = ({title, type, id}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('Pressed');
      }}
      style={[type === 'bg' ? styles.loginButton : styles.nonBgButton]}>
      <Text style={[type === 'bg' ? styles.loginButtonText : styles.nonBgButtonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const {width} = Dimensions.get('window');
// const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  // container: {
  //   height: height,
  // },
  loginButton: {
    width: responsiveWidth(85),
    backgroundColor: '#379A35',
    padding: responsiveHeight(1.5),
    borderRadius: 100,
  },
  loginButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontWeight: 600,
    fontFamily: 'Poppins-SemiBold',
  },
  nonBgButtonText: {
    color: '#379A35',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontWeight: 600,
    fontFamily: 'Poppins-SemiBold',
  },
  nonBgButton: {
    width: responsiveWidth(85),
    borderWidth: 4,
    borderColor: '#379A35',
    backgroundColor: 'white',
    padding: responsiveHeight(1),
    borderRadius: 100,
    opacity: 0.7,
    cursor: 'auto',
  },
});

export default ExploreButton;
