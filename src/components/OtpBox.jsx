import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {OtpInput} from 'react-native-otp-entry';
import {Controller, useFormContext} from 'react-hook-form';
import {validationRules} from '../utils/validation';
const OtpBox = (
  // {Controller, control, setValue, name}
  {name},
) => {
  const {
    control,
    formState: {errors},
  } = useFormContext();
  console.log('otpbox', errors[name]);
  return (
    <View>
      <Controller
        name={name}
        control={control}
        rules={validationRules[name]}
        render={({field: {onChange, onBlur, value}}) => (
          <OtpInput
            onBlur={onBlur}
            numberOfDigits={6}
            onTextChange={text => {
              // setValue(name, text);
              onChange(text);
            }}
            value={value}
            theme={{
              pinCodeContainerStyle: styles.container,
            }}
          />
        )}
      />
      {errors[name] && (
        <Text style={styles.errorText}>{errors[name]?.message}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#A19B9B',
    borderRadius: 0,
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },

  errorText: {
    color: 'red',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    paddingVertical: 5,
  },
});

export default OtpBox;
