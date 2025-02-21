import { TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Input = ({placeholder}) => {
      const [value, onChangeText] = useState('');
  return (
    <TextInput
                  onChangeText={text => onChangeText(text)}
                  value={value}
                  style={styles.input}
                  placeholder={placeholder}
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
