import React from 'react';
import DatePicker from 'react-native-date-picker';
import {Controller, useFormContext} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';

const Calender = ({name}) => {
  const {control, getValues} = useFormContext();

  return (
    <View style={styles.container}>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
          <DatePicker
            date={value || new Date()}
            mode="date"
            theme="auto"
            onDateChange={date => {
              onChange(date);
              console.log('date', date.toLocaleDateString());
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

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  date: {
    fontSize: 20,
    fontWeight: 600,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Calender;
