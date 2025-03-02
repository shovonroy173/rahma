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
  // console.log(!watch('height'));

  const totalInterests =
    watch('selectedOptions') || watch('selectedPersonalities')
      ? Object.values(watch(id) || {}).reduce(
          (sum, category) => sum + category?.length,
          0,
        )
      : 0;
  // console.log(watch(id), totalInterests);

  return (
    <TouchableOpacity
      onPress={() => {
        if (
          !!errors[id] ||
          !watch(id) ||
          phoneInput?.current?.isValidNumber(getValues('phone')) === false ||
          (id === 'user' && (!watch(id).firstName || !watch(id).lastName)) ||
          (id === 'selectedOptions' && Object.keys(watch(id)).length === 0) ||
          (id === 'selectedPersonalies' && Object.keys(watch(id)).length === 0)
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
        (id === 'user' && (!watch(id).firstName || !watch(id).lastName)) ||
        (id === 'selectedOptions' && Object.keys(watch(id)).length === 0) ||
        totalInterests === 0 ||
        (id === 'selectedPersonalies' && Object.keys(watch(id)).length === 0)
          ? styles.disabledButton
          : styles.loginButton,
      ]}>
      <Text style={styles.loginButtonText}>
        {(id === 'selectedOptions' && totalInterests !== 0) ||
        (id === 'selectedPersonalies' && totalInterests !== 0)
          ? `Select(${totalInterests})`
          : title}
      </Text>
    </TouchableOpacity>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
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
