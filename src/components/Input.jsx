import {TextInput, StyleSheet, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {updateFormData} from '../redux/slices/formSlice';

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
          />
        )}
      />
      {Object.keys(errors).length > 0 && errors[user]?.[sec] && (
        <Text style={styles.errorText}>{errors[user]?.[sec]?.message}</Text>
      )}
    </View>
  );
};

// const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  input: {
    // width: width,
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

export default Input;
