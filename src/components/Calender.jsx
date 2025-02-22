import React from 'react';
import DatePicker from 'react-native-date-picker';
import {Controller, useFormContext} from 'react-hook-form';

const Calender = ({name}) => {
  const {control} = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value}}) => (
        <DatePicker
          date={value || new Date()}
          mode="date"
          onDateChange={date => {
            onChange(date);
            console.log('date', date.toLocaleDateString());
          }}
        />
      )}
    />
  );
};

export default Calender;
