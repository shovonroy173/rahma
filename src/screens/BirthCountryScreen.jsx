/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
// import Country from '../components/Country';
import {CountrySelection} from 'react-native-country-list';
import {Controller, useFormContext} from 'react-hook-form';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const BirthCountryScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  // const onCountrySelection = data => {
  //   console.log(data);
  // };
  const {control, getValues} = useFormContext();

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <ProgressContainer
              currentPage={currentPage}
              navigation={navigation}
            />

            <View style={styles.contentContainer}>
              <View>
                <Text style={styles.titleText}>Which country</Text>
                <Text style={styles.titleText}>Do you Born?</Text>
              </View>
              <View style={styles.countryContainer}>
                {/* <Country name="birthCountry" /> */}
                {/* <CountrySelection action={item => onCountrySelection(item)} /> */}
                <Controller
                  name="birthCountry"
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <CountrySelection action={item => onChange(item?.name)} />
                  )}
                />
                {getValues('birthCountry') && (
                  <Text style={styles.date}>
                    Place of Birth: {getValues('birthCountry')}
                  </Text>
                )}
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Continue"
              value={1}
              navigation={navigation}
              path="PresentCountry"
              id="birthCountry"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: responsiveHeight(4),
  },
  mainContainer: {
    display: 'flex',
    gap: responsiveWidth(2),
    alignItems: 'center',
  },
  contentContainer: {
    display: 'flex',
    gap: responsiveWidth(2),
    alignItems: 'center',
  },
  countryContainer: {
    width: width,
    height: responsiveHeight(55),
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: responsiveFontSize(3),
    fontWeight: 600,
    textAlign: 'center',
  },
  date: {
    fontSize: responsiveFontSize(2),
    fontWeight: 600,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    paddingVertical: responsiveHeight(1),
  },
  buttonContainer: {
    paddingBottom: responsiveWidth(2),
  },
});
export default BirthCountryScreen;
