import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import PhoneInput from 'react-native-phone-number-input';
import {validationRules} from '../utils/validation';
import {useDispatch, useSelector} from 'react-redux';
import {updateFormData} from '../redux/slices/formSlice';
import {ThemeContext} from '../context/DarkThemeContext';
const Phone = ({name, phoneInput}) => {
  const {
    control,
    formState: {errors},
    getValues,
    setValue,
  } = useFormContext();
  const savedValue = useSelector(state => state.form.formData[name] || '');
  const dispatch = useDispatch();

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
    <View>
      <Controller
        name={name}
        control={control}
        rules={validationRules?.phone}
        render={({field: {onChange, onBlur, value}}) => (
          <PhoneInput
            ref={phoneInput}
            defaultCode="US"
            layout="first"
            onBlur={onBlur}
            onChangeText={text => {
              //   phoneInput.current?.isValidNumber(text) &&
              onChange(text);
              dispatch(updateFormData({[name]: text}));
            }}
            onChangeCountry={country => {
              onChange(country.callingCode);
            }}
            value={value}
            containerStyle={styles.phoneContainer}
            textContainerStyle={styles.textContainer}
            codeTextStyle={styles.codeText}
            flagButtonStyle={styles.flagButton}
            textInputStyle={styles.codeText}
            // countryPickerButtonStyle={styles.flagContainer}
            // renderDropdownImage={() => null}
            autoFocus
          />
        )}
      />
      {errors[name] ? (
        <Text style={styles.errorText}>{errors[name]?.message}</Text>
      ) : phoneInput.current?.isValidNumber(getValues('phone')) === false ? (
        <Text style={styles.errorText}>Enter a valid phone number</Text>
      ) : null}
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    phoneContainer: {
      width: '100%',
      height: 50,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 10,
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
    },
    textContainer: {
      paddingVertical: 0,
      borderWidth: 1,
      borderColor: theme === 'dark' ? '#d1d5db' : '#4b5563',
      borderRadius: 10,
      backgroundColor: theme === 'dark' ? '#000000' : '#e5e7eb',
    },
    codeText: {
      fontSize: 16,
      color: theme === 'dark' ? '#d1d5db' : '#4b5563',
      fontFamily: 'Poppins-SemiBold',
    },
    flagButton: {
      borderWidth: 1,
      borderColor: theme === 'dark' ? '#d1d5db' : '#4b5563',
      borderRadius: 8,
      padding: 5,
      backgroundColor: theme === 'dark' ? '#000000' : '#e5e7eb',
    },

    errorText: {
      color: 'red',
      fontSize: 12,
      fontFamily: 'Poppins-Medium',
      paddingVertical: 5,
    },
  });

export default Phone;
