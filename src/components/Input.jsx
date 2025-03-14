import {TextInput, StyleSheet, View, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {updateFormData} from '../redux/slices/formSlice';
import {ThemeContext} from '../context/DarkThemeContext';

const Input = ({placeholder, name}) => {
  // const [value, onChangeText] = useState('');
  const {
    control,
    formState: {errors},
    setValue,
  } = useFormContext();
  // console.log(name?.split('.')[0], name?.split('.')[1]);
  const user = name?.split('.')[0];
  const sec = name?.split('.')[1];
  // console.log('validation', name, errors);
  const savedValue = useSelector(state => state.form.formData[name] || '');
  const dispatch = useDispatch();
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

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
        // rules={validationRules[name]}
        render={({field: {onChange, value}}) => (
          <TextInput
            onChangeText={text => {
              onChange(text);
              dispatch(updateFormData({[name]: text}));
            }}
            value={value}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={styles.placeholderColor}
          />
        )}
      />
      {Object.keys(errors).length > 0 && errors[user]?.[sec] && (
        <Text style={styles.errorText}>{errors[user]?.[sec]?.message}</Text>
      )}
    </View>
  );
};

export const getStyles = theme =>
  StyleSheet.create({
    input: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: theme === 'dark' ? '#555' : '#A19B9B',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      color: theme === 'dark' ? '#d1d5db' : '#000000',
      paddingHorizontal: 15,
      height: responsiveHeight(6),
      fontFamily: 'Poppins-Regular',
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      fontFamily: 'Poppins-Medium',
      paddingVertical: 5,
    },
    placeholderColor: theme === 'dark' ? '#888' : '#555',
  });
export default Input;
