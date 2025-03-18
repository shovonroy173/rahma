/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {languages, translations} from '../../assets/data/data';
import {ThemeContext} from '../context/DarkThemeContext';

const StartScreen = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [items, setItems] = useState(languages);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/login-bg.webp')}
        style={styles.backgroundImage}>
        <View style={styles.loginContainer}>
          <View style={styles.languageContainer}>
            <View style={styles.languageItem}>
              <Icon name="language" size={24} color={theme === 'dark' ? '#6b7280' : '#f3f4f6'} />
              <DropDownPicker
                open={open}
                value={selectedLanguage}
                items={items}
                setOpen={setOpen}
                setValue={setSelectedLanguage}
                setItems={setItems}
                style={{
                  backgroundColor: 'transparent',
                  borderWidth: 0,
                  alignItems: 'center',
                }}
                dropDownContainerStyle={{
                  backgroundColor: 'transparent',
                  borderWidth: 0,
                }}
                containerStyle={styles.dropdownContainer}
                ArrowDownIconComponent={() => (
                  <Ionicons
                    name="chevron-down"
                    size={20}
                    color={theme === 'dark' ? '#27272a' : '#f3f4f6'}
                  />
                )}
                ArrowUpIconComponent={() => (
                  <Ionicons
                    name="chevron-up"
                    size={20}
                    color={theme === 'dark' ? '#27272a' : '#f3f4f6'}
                  />
                )}
                textStyle={{
                  color: theme === 'dark' ? '#27272a' : '#f3f4f6',
                  fontSize: responsiveFontSize(1.8),
                  fontFamily: 'Poppins-Regular',
                }}
              />
            </View>
            <FAIcon name="question-circle-o" size={24} color={theme === 'dark' ? '#6b7280' : '#f3f4f6'} />
          </View>
          <View style={styles.loginItems}>
            <Image source={require('../../assets/images/logo.webp')} />
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>
                {translations[selectedLanguage]}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.fbLoginButton}>
              <FAIcon name="facebook-square" size={24} color="white" />
              <Text style={styles.loginButtonText}>Connect With Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Continue With Email</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.googleLoginButton}>
              <Image source={require('../../assets/images/google.png')} />
              <Text style={styles.googleLoginButtonText}>
                Continue With Google
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.privacyContainer}>
              By Continuing you agree to our{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
              <Text style={styles.termsText}>Terms</Text>
            </TouchableOpacity>{' '}
            <Text style={styles.privacyContainer}>and</Text>{' '}
            <TouchableOpacity
              onPress={() => navigation.navigate('PrivacyPolicy')}>
              <Text style={styles.termsText}>Privacy Policy</Text>
            </TouchableOpacity>{' '}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: theme === 'dark' ? '#121212' : '#FFFFFF',
    },
    dropdownContainer: {
      width: responsiveWidth(30),
    },
    backgroundImage: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    languageContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: responsiveWidth(4),
    },
    languageItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    loginContainer: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: responsiveHeight(3.5),
      paddingHorizontal: responsiveWidth(2.5),
    },
    loginItems: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: responsiveHeight(2),
    },
    loginButton: {
      width: responsiveWidth(85),
      backgroundColor: theme === 'dark' ? '#1A3D1A' : '#379A35',
      padding: 10,
      borderRadius: 100,
    },
    loginButtonText: {
      color: theme === 'dark' ? '#131313' : '#f3f4f6',
      textAlign: 'center',
      fontSize: responsiveFontSize(2.2),
      fontFamily: 'Poppins-SemiBold',
    },
    fbLoginButton: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      width: responsiveWidth(85),
      backgroundColor: theme === 'dark' ? '#1e3a8a' : '#3682D4',
      padding: 10,
      borderRadius: 100,
    },
    googleLoginButton: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      width: responsiveWidth(85),
      padding: 10,
      borderRadius: 100,
    },
    googleLoginButtonText: {
      color: theme === 'dark' ? '#14532d' : '#374151',
      textAlign: 'center',
      fontSize: 18,
      fontFamily: 'Poppins-SemiBold',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      width: responsiveWidth(80),
      flexWrap: 'wrap',
    },
    privacyContainer: {
      color: theme === 'dark' ? '#374151' : '#000000',
      fontSize: 14,
      fontFamily: 'Poppins-Regular',
    },
    termsText: {
      color: theme === 'dark' ? '#66BB6A' : '#379A35',
      fontFamily: 'Poppins-Regular',
    },
  });

export default StartScreen;
