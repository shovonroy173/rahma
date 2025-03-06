/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {languages, translations} from '../../assets/data/data';

const StartScreen = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [items, setItems] = useState(languages);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/login-bg.png')}
        style={styles.backgroundImage}>
        <View style={styles.loginContainer}>
          <View style={styles.languageContainer}>
            <View style={styles.languageItem}>
              <Icon name="language" size={24} color="white" />
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
                }}
                dropDownContainerStyle={{
                  backgroundColor: 'transparent',
                  borderWidth: 0,
                }}
                containerStyle={styles.dropdownContainer}
                ArrowDownIconComponent={() => (
                  <Ionicons name="chevron-down" size={20} color="white" />
                )}
                ArrowUpIconComponent={() => (
                  <Ionicons name="chevron-up" size={20} color="white" />
                )}
                textStyle={{color: 'white'}}
                labelStyle={{color: 'white'}}
              />
            </View>
            <FAIcon name="question-circle-o" size={24} color="white" />
          </View>
          <View style={styles.loginItems}>
            <Image source={require('../../assets/images/logo.png')} />
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
              <Image source={require('../../assets/images/fb.png')} />
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
          <View>
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
                <Text style={styles.privacyText}>Privacy Policy</Text>
              </TouchableOpacity>{' '}
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
    // <View className="flex-1 items-center justify-center bg-blue-500">
    //   <Text className="text-red-500">Homesjvjhfnghb</Text>
    //   <Text className="text-red-500">Homes</Text>
    // </View>
  );
};

const {width} = Dimensions.get('window');

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 30,
  },
  dropdownContainer: {
    width: responsiveWidth(30),
    // backgroundColor: 'red'
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
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
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
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  loginItems: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  loginButton: {
    width: width - 50,
    backgroundColor: '#379A35',
    padding: 10,
    borderRadius: 100,
  },
  loginButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600,
  },
  fbLoginButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: width - 50,
    backgroundColor: '#3682D4',
    padding: 10,
    borderRadius: 100,
  },
  googleLoginButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: width - 50,
    padding: 10,
    borderRadius: 100,
  },
  googleLoginButtonText: {
    color: '#00000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: width - 100,
    flexWrap: 'wrap',
  },
  privacyContainer: {
    color: '#FFFFFF',
    // textAlign: 'center',
    fontSize: 14,
    fontWeight: 400,
  },
  termsText: {
    color: '#379A35',
  },
  privacyText: {
    color: '#379A35',
  },
};

export default StartScreen;
