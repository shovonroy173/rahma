import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import ProgressContainer from '../components/ProgressContainer';
import Button from '../components/Button';
import SubText from '../components/SubText';
import MainText from '../components/MainText';

const LoginScreen = ({navigation}) => {
  const [value, onChangeText] = useState('');
  const currentPage = useSelector(state => state.page.currentPage);
  return (
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
        <View>
          <TextInput
            onChangeText={text => onChangeText(text)}
            value={value}
            style={styles.inputBox}
            placeholder={'name@example.com'}
          />
          <SubText navigation={navigation} />
        </View>
      </View>
      <Button
        title="Continue"
        value={value}
        navigation={navigation}
        path="Otp"
      />
    </View>
  );
};

// const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#A19B9B',
    paddingHorizontal: 30,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  inputContainer: {
    gap: 40,
  },
  textContainer: {
    gap: 20,
  },
});

export default LoginScreen;
