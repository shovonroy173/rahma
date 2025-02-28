import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

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
    width: width - 50,
    backgroundColor: '#379A35',
    padding: 10,
    borderRadius: 100,
  },
  loginButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
    fontFamily: 'Poppins-SemiBold',
  },
  nonBgButtonText: {
    color: '#379A35',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
    fontFamily: 'Poppins-SemiBold',
  },
  nonBgButton: {
    width: width - 50,
    borderWidth: 4,
    borderColor: '#379A35',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 100,
    opacity: 0.7,
    cursor: 'auto',
  },
});

export default ExploreButton;
