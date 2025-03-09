import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import PhoneInput from 'react-native-phone-number-input';
import {validationRules} from '../utils/validation';
import {useDispatch, useSelector} from 'react-redux';
import {updateFormData} from '../redux/slices/formSlice';
const Phone = ({name, phoneInput}) => {
  const {
    control,
    formState: {errors},
    getValues,
    setValue,
  } = useFormContext();
  // console.log('Phone', getValues('phone'));
  // console.log(
  //   'Phone Valid',
  //   phoneInput.current?.isValidNumber(getValues('phone')),
  // );
  const savedValue = useSelector(state => state.form.formData[name] || '');
  const dispatch = useDispatch();
console.log('phone otp', savedValue);

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
        rules={validationRules?.phone}
        render={({field: {onChange, onBlur, value}}) => (
          <PhoneInput
            ref={phoneInput}
            defaultCode="US"
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

const styles = StyleSheet.create({
  phoneContainer: {
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  textContainer: {
    paddingVertical: 0,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  codeText: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
  },
  flagContainer: {
    backgroundColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  flagButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 5,
  },

  errorText: {
    color: 'red',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    paddingVertical: 5,
  },
});

export default Phone;
