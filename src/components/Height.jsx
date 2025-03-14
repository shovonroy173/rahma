/* eslint-disable react-native/no-inline-styles */
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const Height = ({item, name}) => {
  const {control, watch, setValue} = useFormContext();
  // console.log(item.ft.toFixed(1).split('.'));
  // console.log(watch('height'));
  const savedValue = useSelector(state => state.form.formData[name] || '');
  useEffect(() => {
    if (savedValue) {
      setValue(name, savedValue);
    } else {
      console.log('no cache data');
    }
  }, [savedValue, setValue, name]);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <TouchableOpacity
          style={styles.container}
          onPress={() => onChange(item)}
          onBlur={onBlur}
          value={value}>
          <Text
            style={[
              styles.text,
              watch(name)?.id === item?.id && styles.selectedText,
            ]}>{`${item?.cm} cm`}</Text>
          <Text
            style={{
              color: theme === 'dark' ? '#d1d5db' : '#111827',
            }}>
            -
          </Text>
          <Text
            style={[
              styles.text,
              watch(name)?.id === item?.id && styles.selectedText,
            ]}>{`${item?.ft.toFixed(1).split('.')[0]}'${
            item?.ft.toFixed(1).split('.')[1]
          }'' ft`}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 40,
    },
    text: {
      fontSize: responsiveFontSize(2),
      fontFamily: 'Poppins-SemiBold',
      padding: responsiveHeight(2),
      color: theme === 'dark' ? '#d1d5db' : '#111827',
    },
    selectedText: {
      borderRadius: 10,
      color: 'white',
      backgroundColor: theme === 'dark' ? '#1A3D1A' : '#379A35',
      padding: responsiveHeight(2),
    },
  });

export default Height;
