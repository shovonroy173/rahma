/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useContext, useRef} from 'react';
import Button from '../components/Button';
import ProgressContainer from '../components/ProgressContainer';
import SubText from '../components/SubText';
import MainText from '../components/MainText';
import {useSelector} from 'react-redux';
import Phone from '../components/Phone';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const PhoneScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const phoneInput = useRef(null);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <View style={styles.subContainer}>
              <ProgressContainer
                currentPage={currentPage}
                navigation={navigation}
              />
              <MainText
                text1="Please Enter your Phone Number"
                text2="We will Send you a Verification Code to Verify your Phone Number."
              />
            </View>
            <ScrollView
              style={styles.scrollContainer}
              contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: 20,
                gap: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              showsVerticalScrollIndicator={false}>
              <View>
                <Text style={styles.label}>Enter Your Phone Number:</Text>
                <Phone name="phone" phoneInput={phoneInput} />

                <SubText />
              </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
              <Button
                navigation={navigation}
                path="Otp2"
                title="Send a Verification Code"
                id="phone"
                phoneInput={phoneInput}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      padding: responsiveHeight(4),
    },
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: responsiveHeight(3),
    },
    subContainer: {
      display: 'flex',
      gap: responsiveHeight(2),
    },
    label: {
      fontSize: responsiveFontSize(2),
      fontFamily: 'Poppins-Regular',
      paddingBottom: 5,
      color: theme === 'dark' ? '#d1d5db' : '#000000',
    },

    buttonContainer: {
      paddingBottom: responsiveHeight(2),
      width: '100%',
      // backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
    },
  });

export default PhoneScreen;
