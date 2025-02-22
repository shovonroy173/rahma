import {TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Controller, useFormContext} from 'react-hook-form';

const Input = ({placeholder, name}) => {
  // const [value, onChangeText] = useState('');
  const {control} = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value}}) => (
        <TextInput
          onChangeText={text => onChange(text)}
          value={value}
          style={styles.input}
          placeholder={placeholder}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#A19B9B',
    paddingHorizontal: 15,
  },
});

export default Input;
