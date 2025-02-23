import {View, StyleSheet, Text} from 'react-native';
import React, {useRef} from 'react';
import Button from '../components/Button';
import ProgressContainer from '../components/ProgressContainer';
import SubText from '../components/SubText';
import MainText from '../components/MainText';
import {useSelector} from 'react-redux';
import Phone from '../components/Phone';

const PhoneScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const phoneInput = useRef(null);

  // const {control} = useFormContext();
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
          <Phone name="phone" phoneInput={phoneInput} />

          <SubText />
        </View>
      </View>
      <Button
        navigation={navigation}
        path="Begin"
        title="Send a Verification Code"
        id="phone"
        phoneInput={phoneInput}
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
});

export default PhoneScreen;
