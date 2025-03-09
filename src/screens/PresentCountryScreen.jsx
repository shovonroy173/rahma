/* eslint-disable dot-notation */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import Country from '../components/Country';
import {Controller, useFormContext} from 'react-hook-form';
import {CountrySelection} from 'react-native-country-list';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const PresentCountryScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {control, getValues, setValue} = useFormContext();
  const savedValue = useSelector(
    state => state.form.formData['presentCountry'] || '',
  );
  useEffect(() => {
    if (savedValue) {
      setValue('presentCountry', savedValue);
    } else {
      console.log('no cache data');
    }
  }, [savedValue, setValue]);
  const theme = useContext(ThemeContext);
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
                <Text style={styles.titleText}>Do you Live?</Text>
              </View>
              <View style={styles.countryContainer}>
                <Country name="presentCountry" />
                {/* <CountrySelection action={item => onCountrySelection(item)} /> */}
                <Controller
                  name="presentCountry"
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <CountrySelection action={item => onChange(item?.name)} />
                  )}
                />
                {getValues('presentCountry') && (
                  <Text style={styles.date}>
                    Place of Living: {getValues('presentCountry')}
                  </Text>
                )}
              </View>
            </View>
          </View>
          <Button
            title="Continue"
            navigation={navigation}
            path="Rules"
            id="presentCountry"
          />
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
      color: theme === 'dark' ? '#ffffff' : '#000000',
    },
    date: {
      fontSize: responsiveFontSize(2),
      fontWeight: 600,
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      paddingVertical: responsiveHeight(1),
      color: theme === 'dark' ? '#ffffff' : '#000000',
    },
    buttonContainer: {
      paddingBottom: responsiveWidth(2),
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
    },
  });
export default PresentCountryScreen;
