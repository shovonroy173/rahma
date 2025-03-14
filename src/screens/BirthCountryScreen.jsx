/* eslint-disable dot-notation */
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
import React, {useContext, useEffect} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {Controller, useFormContext} from 'react-hook-form';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';

const BirthCountryScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  // const onCountrySelection = data => {
  //   console.log(data);
  // };
  // const Country = lazy(() => import('../components/Country'));

  const {control, getValues, setValue} = useFormContext();
  const savedValue = useSelector(
    state => state.form.formData['birthCountry'] || '',
  );
  useEffect(() => {
    if (savedValue) {
      setValue('birthCountry', savedValue);
    } else {
      console.log('no cache data');
    }
  }, [savedValue, setValue]);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

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
                <Controller
                  name="birthCountry"
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <CountryPicker
                      withModal={false}
                      withFilter
                      withFlag
                      withCallingCode
                      theme={theme === 'dark' && DARK_THEME}
                      onSelect={data => onChange(data?.name)}
                    />
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
      textAlign: 'center',
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#d1d5dbs' : '#000000',
    },
    date: {
      fontSize: responsiveFontSize(2),
      fontWeight: 600,
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      paddingVertical: responsiveHeight(1),
      color: theme === 'dark' ? '#d1d5db' : '#000000',
    },
    buttonContainer: {
      paddingBottom: responsiveWidth(2),
    },
  });
export default BirthCountryScreen;
