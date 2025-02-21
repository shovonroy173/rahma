import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const OtpBox = ({value, onChangeText}) => {
 return (
    <View style={styles.input}>
      <TextInput
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.inputBox}
      />
      <TextInput
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.inputBox}
      />
      <TextInput
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.inputBox}
      />
      <TextInput
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.inputBox}
      />
      <TextInput
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.inputBox}
      />
      <TextInput
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.inputBox}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    width: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#A19B9B',
    // paddingHorizontal: 30,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
});

export default OtpBox;
