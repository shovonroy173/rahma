import React, {useContext, useEffect} from 'react';
import DatePicker from 'react-native-date-picker';
import {Controller, useFormContext} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import { ThemeContext } from '../context/DarkThemeContext';

const Calender = ({name}) => {
  const {control, getValues, setValue} = useFormContext();
  const savedValue = useSelector(state => state.form.formData[name] || '');
  const today = new Date();
  const minDate = new Date(
    today.getFullYear() - 51,
    today.getMonth(),
    today.getDate(),
  );
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate(),
  );

  useEffect(() => {
    if (savedValue) {
      setValue(name, savedValue);
    } else {
      console.log('no cache data');
    }
  }, [savedValue, setValue, name]);
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
          <DatePicker
            date={value || maxDate}
            mode="date"
            theme="auto"
            minimumDate={minDate}
            maximumDate={maxDate}
            onDateChange={date => {
              onChange(date);
              // console.log('date', date.toLocaleDateString());
            }}
          />
        )}
      />
      {getValues(name) && (
        <Text style={styles.date}>
          Date of Birth: {getValues(name)?.toLocaleDateString()}
        </Text>
      )}
    </View>
  );
};

const getStyles = (theme)=> StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  date: {
    fontSize: 20,
    fontWeight: 600,
    fontFamily: 'Poppins-SemiBold',
    color: theme === 'dark' ? '#ffffff' : '#000000',

  },
});

export default Calender;
