/* eslint-disable react-native/no-inline-styles */
/* eslint-disable dot-notation */
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useContext, useEffect} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import {lookingFor} from '../../assets/data/data';
import Option from '../components/Option';
import Button from '../components/Button';
import Slider from '@react-native-community/slider';
import {Controller, useFormContext} from 'react-hook-form';
import {updateFormData} from '../redux/slices/formSlice';
import {ThemeContext} from '../context/DarkThemeContext';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const LookingForScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {control, getValues, setValue} = useFormContext();
  const savedValue = useSelector(
    state => state.form.formData['lookingforage'] || '',
  );
  useEffect(() => {
    if (savedValue) {
      setValue('lookingforage', savedValue);
    } else {
      console.log('no cache data');
    }
  }, [savedValue, setValue]);

  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>Tell us Who you’re Looking for?</Text>
        <View>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Age</Text>
            <Text
              style={{
                color: theme === 'dark' ? '#d1d5db' : '#111827',
                fontFamily: 'Poppins-Regular',
              }}>{`${
              getValues('lookingforage')
                ? Math.floor(getValues('lookingforage'))
                : 'Not Selected'
            }`}</Text>
            <Text
              style={{
                color: theme === 'dark' ? '#d1d5db' : '#111827',
                fontFamily: 'Poppins-Regular',
              }}>
              18-51 Years
            </Text>
          </View>
          <Controller
            name="lookingforage"
            control={control}
            render={({field: {value, onChange}}) => (
              <Slider
                style={styles.slider}
                minimumValue={18}
                maximumValue={51}
                minimumTrackTintColor="#47A146"
                maximumTrackTintColor="#A8C6A8"
                value={value}
                onValueChange={text => {
                  console.log(text);
                  onChange(text);
                  updateFormData({['lookingforage']: text});
                }}
              />
            )}
          />
        </View>
        <View style={styles.mainContainer}>
          {lookingFor.map(item => (
            <Option key={item.id} item={item} id="looking" />
          ))}
        </View>
      </View>
      <Button
        title="Submit"
        navigation={navigation}
        path="Finish"
        id="looking"
      />
    </View>
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

      padding: 30,
    },
    topContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // padding: 30,
    },
    slider: {
      width: width - 60,
      height: 30,
    },
    mainContainer: {
      gap: 20,
      // paddingHorizontal: 30,
    },
    title: {
      fontSize: responsiveFontSize(3.5),
      marginBottom: 10,
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      color: theme === 'dark' ? '#d1d5db' : '#111827',
    },
  });

export default LookingForScreen;
