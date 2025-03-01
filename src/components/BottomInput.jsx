import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import {Text} from 'react-native';
import {Controller, useFormContext} from 'react-hook-form';
import { validationRules } from '../utils/validation';

const BottomInput = (
  // {Controller, control, errors, watch, name, setValue}
  {name, placeholder},
) => {
  const {
    control,
    formState: {errors},
  } = useFormContext();
// console.log(validationRules.name);

  return (
    <View>
      <Controller
        name={name}
        control={control}
        rules={validationRules[name]}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={
              // text => {
              // setValue(name, text);
              onChange
            }
          // }
            value={value}
            style={styles.inputBox}
            placeholder={placeholder}
          />
        )}
      />
      {errors[name] && <Text style={styles.errorText}>{errors[name]?.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#A19B9B',
    paddingHorizontal: 30,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    paddingVertical: 5,
  },
});

export default BottomInput;
