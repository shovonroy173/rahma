/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
// import {nextPage, prevPage} from '../redux/PageSlice';
import OtpBox from '../components/OtpBox';
import Button from '../components/Button';
import {useState} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import SubTextOtp from '../components/SubTextOtp';
import MainText from '../components/MainText';

const OtpScreen = ({navigation}) => {
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
            text1="Enter the Verification Code Here"
            text2="A Verification Code Already Sent in your Email."
          />
        </View>
        <View style={styles.otpContainer}>
          <OtpBox value={value} onChangeText={onChangeText} />
          <SubTextOtp />
        </View>
      </View>

      <Button
        value={value}
        navigation={navigation}
        title="Verify Code"
        path="Phone"
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
  inputContainer: {
    gap: 60,
  },
  textContainer: {
    gap: 20,
  },
  otpContainer: {
    gap: 20,
  },
});

export default OtpScreen;
