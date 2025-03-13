import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {OtpInput} from 'react-native-otp-entry';
import {Controller, useFormContext} from 'react-hook-form';
import {validationRules} from '../utils/validation';
import {useDispatch, useSelector} from 'react-redux';
import {updateFormData} from '../redux/slices/formSlice';
import {ThemeContext} from '../context/DarkThemeContext';
const OtpBox = (
  // {Controller, control, setValue, name}
  {name},
) => {
  const {
    control,
    formState: {errors},
    setValue,
  } = useFormContext();
  // console.log('otpbox', errors[name]);
  const savedValue = useSelector(state => state.form.formData[name] || '');
  const dispatch = useDispatch();
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  // console.log('otp data', getValues(name));

  useEffect(() => {
    if (savedValue) {
      setValue(name, savedValue);
    } else {
      console.log('no cache data');
    }
  }, [savedValue, setValue, name]);
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
              onChange(text);
              dispatch(updateFormData({[name]: text}));
            }}
            value={value}
            theme={{
              pinCodeContainerStyle: styles.container,
              pinCodeTextStyle: styles.pinCodeText,
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
const getStyles = theme =>
  StyleSheet.create({
    container: {
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderColor: theme === 'dark' ? '#444' : '#A19B9B',
      borderRadius: 0,
      backgroundColor: theme === 'dark' ? '#121212' : '#FFFFFF',
    },
    pinCodeText: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 15,
      fontSize: 25,
      fontFamily: 'Poppins-Regular',
      color: theme === 'dark' ? '#d1d5db' : '#000000',
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      fontFamily: 'Poppins-Medium',
      paddingVertical: 5,
    },
  });

export default OtpBox;
