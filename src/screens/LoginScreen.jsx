/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import ProgressContainer from '../components/ProgressContainer';
import Button from '../components/Button';
import SubText from '../components/SubText';
import MainText from '../components/MainText';
import BottomInput from '../components/BottomInput';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const LoginScreen = ({navigation}) => {
  // const [value, onChangeText] = useState('');
  const currentPage = useSelector(state => state.page.currentPage);
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <ProgressContainer
                currentPage={currentPage}
                navigation={navigation}
              />
              <MainText
                text1="Enter your Email Address"
                text2="We will Send you a Verification Code to Verify your Identity."
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
                <BottomInput name="email" placeholder="name@example.com" />

                <SubText navigation={navigation} />
              </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
              <Button
                title="Continue"
                navigation={navigation}
                path="Otp"
                id="email"
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

// const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: responsiveHeight(4),
  },
  // inputBox: {
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#A19B9B',
  //   paddingHorizontal: responsiveWidth(3),
  //   fontSize: 16,
  //   fontFamily: 'Poppins-Medium',
  // },
  inputContainer: {
    alignItems: 'center',
    gap: responsiveHeight(3),
  },
  textContainer: {
    gap: responsiveHeight(2),
    alignItems: 'center',
  },

  buttonContainer: {
    paddingBottom: responsiveHeight(2),
    backgroundColor: 'white',
  },
});

export default LoginScreen;
