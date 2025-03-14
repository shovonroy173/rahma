import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {Controller, useFormContext} from 'react-hook-form';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const FaceVerificationScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {control, watch} = useFormContext();
  // console.log('face', watch('faceVerification'));

  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>Private Photo Verification</Text>
      </View>
      <Controller
        control={control}
        name="faceVerification"
        render={({field: {onChange, onBlur, value}}) => (
          <TouchableOpacity
            onPress={() => {
              onChange(!watch('faceVerification'));
            }}
            style={styles.mainContainer}>
            <Image
              source={require('../../assets/images/faceverification.webp')}
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

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      padding: responsiveHeight(4),
    },
    title: {
      fontSize: responsiveFontSize(3.5),
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      color: theme === 'dark' ? '#d1d5db' : '#000000',
    },
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
    },
    text: {
      fontSize: responsiveFontSize(2),
      fontFamily: 'Poppins-Medium',
      color: theme === 'dark' ? '#d1d5db' : '#000000',

      textAlign: 'center',
    },
  });

export default FaceVerificationScreen;
