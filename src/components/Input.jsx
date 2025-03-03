import {TextInput, StyleSheet, View, Text, Dimensions} from 'react-native';
import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {validationRules} from '../utils/validation';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const Input = ({placeholder, name}) => {
  // const [value, onChangeText] = useState('');
  const {
    control,
    formState: {errors},
  } = useFormContext();
  // console.log(name?.split('.')[0], name?.split('.')[1]);
  const user = name?.split('.')[0];
  const sec = name?.split('.')[1];
  // console.log('validation', name, errors);

  return (
    <View>
      <Controller
        name={name}
        control={control}
        // rules={validationRules[name]}
        render={({field: {onChange, value}}) => (
          <TextInput
            onChangeText={text => onChange(text)}
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
