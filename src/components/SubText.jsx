/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/DarkThemeContext';
const SubText = ({navigation}) => {
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <View style={styles.privacyContainer}>
      <Text style={{fontFamily: 'Poppins-Regular'}}>
        By Continuing you agree to our
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
        <Text style={styles.termsText}>Terms</Text>
      </TouchableOpacity>{' '}
      <Text style={{fontFamily: 'Poppins-Regular'}}>and </Text>
      <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
        <Text style={styles.termsText}>Privacy Policy</Text>
      </TouchableOpacity>{' '}
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    privacyContainer: {
      color: theme === 'dark' ? '#ffffff' : '#000000',
      textAlign: 'center',
      fontSize: 14,
      paddingVertical: 20,
      fontWeight: 400,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 10,
      flexWrap: 'wrap',
      fontFamily: 'Poppins-Regular',
    },
    termsText: {
      color: '#379A35',
      fontFamily: 'Poppins-Regular',
    },
  });

export default SubText;
