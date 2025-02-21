import {View, StyleSheet, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import Button from '../components/Button';
import ProgressContainer from '../components/ProgressContainer';
import SubText from '../components/SubText';
import PhoneInput from 'react-native-phone-number-input';
import MainText from '../components/MainText';
import {useSelector} from 'react-redux';

const PhoneScreen = ({navigation}) => {
  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const currentPage = useSelector(state => state.page.currentPage);

  return (
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

        <View style={styles.subContainer}>
          <Text style={styles.label}>Enter Your Phone Number:</Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="BD"
            layout="first"
            onChangeText={text => setPhoneNumber(text)}
            containerStyle={styles.phoneContainer}
            textContainerStyle={styles.textContainer}
            codeTextStyle={styles.codeText}
            flagButtonStyle={styles.flagButton}
            // renderDropdownImage={() => null}
          />
          <SubText />
        </View>
      </View>
      <Button
        value={phoneNumber}
        navigation={navigation}
        path="Begin"
        title="Send a Verification Code"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  mainContainer: {
    display: 'flex',
    gap: 60,
  },
  subContainer: {
    display: 'flex',
    gap: 20,
  },
  label: {
    fontSize: 16,
  },
  phoneContainer: {
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  textContainer: {
    paddingVertical: 0,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  codeText: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
  },
  flagContainer: {
    backgroundColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  flagButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 5,
  },
});

export default PhoneScreen;
