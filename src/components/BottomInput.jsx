import {StyleSheet, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {TextInput} from 'react-native';
import {Text} from 'react-native';
import {Controller, useFormContext} from 'react-hook-form';
import {validationRules} from '../utils/validation';
import {useDispatch, useSelector} from 'react-redux';
import {updateFormData} from '../redux/slices/formSlice';
import {ThemeContext} from '../context/DarkThemeContext';

const BottomInput = (
  // {Controller, control, errors, watch, name, setValue}
  {name, placeholder},
) => {
  const {
    control,
    formState: {errors},
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
        rules={validationRules[name]}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={
              text => {
                onChange(text);
                dispatch(updateFormData({[name]: text}));
              }
            }
            value={value}
            style={styles.inputBox}
            placeholder={placeholder}
            placeholderTextColor={styles.placeholderColor}
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
    inputBox: {
      borderBottomWidth: 1,
      borderBottomColor: '#A19B9B',
      paddingHorizontal: 30,
      fontSize: 16,
      fontFamily: 'Poppins-Medium',
      color: theme === 'dark' ? '#d1d5db' : '#000000',
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      fontFamily: 'Poppins-Medium',
      paddingVertical: 5,
    },
    placeholderColor: theme === 'dark' ? '#888' : '#555',
  });

export default BottomInput;
