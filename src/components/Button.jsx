import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {nextPage} from '../redux/PageSlice';
import {useFormContext} from 'react-hook-form';

const Button = ({navigation, title, path, id, phoneInput}) => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: {errors},
    watch,
    getValues,
  } = useFormContext();
  const onSubmit = data => {
    console.log('Form Submitted:', data);
    console.log('Date', data.calender.toLocaleDateString());
  };
  // console.log('watch', id, watch(id));
  // console.log('Button Errors', id, !!errors[id]);
  // console.log('Phone BUtton', getValues(id) );
  // console.log(
  //   'Phone Valid BUtton',
  //   phoneInput?.current?.isValidNumber(getValues(id)),
  // );
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('Pressed');
        // if (id === 'submit') {
        // }

        if (
          !!errors[id] ||
          !watch(id) ||
          phoneInput?.current?.isValidNumber(getValues('phone')) === false ||
          (id === 'user' && (!watch(id).firstName || !watch(id).lastName))
        ) {
          console.log('handle submit Error', errors[id]);
        } else {
          handleSubmit(onSubmit)();
          dispatch(nextPage());
          navigation.navigate(path);
        }
      }}
      style={[
        !!errors[id] ||
        !watch(id) ||
        phoneInput?.current?.isValidNumber(getValues('phone')) === false ||
        (id === 'user' && (!watch(id).firstName || !watch(id).lastName))
          ? styles.disabledButton
          : styles.loginButton,
      ]}>
      <Text style={styles.loginButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const {width} = Dimensions.get('window');
// const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  // container: {
  //   height: height,
  // },
  loginButton: {
    width: width - 50,
    backgroundColor: '#379A35',
    padding: 10,
    borderRadius: 100,
  },
  loginButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
    fontFamily: 'Poppins-SemiBold',
  },
  disabledButton: {
    width: width - 50,
    backgroundColor: '#379A35',
    padding: 10,
    borderRadius: 100,
    opacity: 0.7,
    cursor: 'auto',
  },
});

export default Button;
