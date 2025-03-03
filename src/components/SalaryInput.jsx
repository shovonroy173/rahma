import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Controller, useFormContext} from 'react-hook-form';
import {validationRules} from '../utils/validation';

const SalaryInput = ({name, placeholder}) => {
  const {
    control,
    formState: {errors},
  } = useFormContext();
  const user = name?.split('.')[0];
  const sec = name?.split('.')[1];

  return (
    <View>
      <Controller
        name={name}
        control={control}
        rules={validationRules[name]}
        render={({field: {onChange, value}}) => (
          <TextInput
            onChangeText={text => onChange(text)}
            value={value}
            style={styles.input}
            placeholder={placeholder}
          />
        )}
      />

      <Text style={styles.errorText}>
        {Object.keys(errors).length > 0 &&
          errors[user]?.[sec] &&
          errors[user]?.[sec]?.message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: responsiveWidth(35),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#A19B9B',
    paddingHorizontal: 15,
    height: responsiveHeight(6),
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    paddingVertical: 5,
  },
});

export default SalaryInput;
