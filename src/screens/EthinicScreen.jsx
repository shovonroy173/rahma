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
import React, {useContext} from 'react';
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


const EthinicScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  // const onCountrySelection = data => {
  //   console.log(data);
  // };
  const {control, getValues} = useFormContext();
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
                <Text style={styles.titleText}>What's your</Text>
                <Text style={styles.titleText}>Ethinic group?</Text>
              </View>
              <View style={styles.countryContainer}>
                {/* <Country name="birthCountry" /> */}
                {/* <CountrySelection action={item => onCountrySelection(item)} /> */}
                <Controller
                  name="ethinic"
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
                {getValues('ethinic') && (
                  <Text style={styles.date}>
                    Ethinic Group: {getValues('ethinic')}
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
              path="Education"
              id="ethinic"
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
      fontSize: responsiveFontSize(3.5),
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      color: theme === 'dark' ? '#d1d5db' : '#111827',
    },
    date: {
      fontSize: responsiveFontSize(2),
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      paddingVertical: responsiveHeight(1),
      color: theme === 'dark' ? '#d1d5db' : '#111827',
    },
    buttonContainer: {
      paddingBottom: responsiveWidth(2),
    },
  });

export default EthinicScreen;
