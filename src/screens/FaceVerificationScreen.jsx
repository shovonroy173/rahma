import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {Controller, useFormContext} from 'react-hook-form';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const FaceVerificationScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {control, watch} = useFormContext();
  // console.log('face', watch('faceVerification'));

  return (
    <View style={styles.container}>
      <ProgressContainer navigation={navigation} currentPage={currentPage} />
      <Text style={styles.title}>Private Photo Verification</Text>
      <Controller
        control={control}
        name="faceVerification"
        style={styles.mainContainer}
        render={({field: {onChange, onBlur, value}}) => (
          <TouchableOpacity
            onPress={() => {
              onChange(!watch('faceVerification'));
            }}>
            <Image
              source={require('../../assets/images/faceverification.png')}
            />
            <Text style={styles.text}>Put your Face in this Circle</Text>
          </TouchableOpacity>
        )}
      />
      <Button
        title="Start Verification"
        path="VerificationComplete"
        id="faceVerification"
        navigation={navigation}

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
    padding: responsiveHeight(4),
  },
  title: {
    fontSize: responsiveFontSize(3),
    fontWeight: 600,
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: responsiveFontSize(2),
    fontWeight: 500,
    textAlign: 'center',
  },
});

export default FaceVerificationScreen;
