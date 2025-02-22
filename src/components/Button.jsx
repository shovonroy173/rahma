import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {nextPage} from '../redux/PageSlice';
import {useFormContext} from 'react-hook-form';

const Button = ({navigation, title, path, id}) => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: {errors},
  } = useFormContext();
  const onSubmit = data => {
    // setCredentials((prev)=> ({prev, ...data}));
    // console.log('Form Submitted:', getValues());
    console.log('Form Submitted:', data);
    console.log('Date', data.calender.toLocaleDateString());
  };
  //   const [value, setValue] = useState(watch(id));
  //  console.log(value , value[id]);
  //  console.log('watch' , watch(id));
  console.log('errors', id, errors[id]);

  return (
    // <View style={styles.container}>
    <TouchableOpacity
      onPress={() => {
        console.log('Pressed');
        // if (id === 'submit') {
        handleSubmit(onSubmit)();
        // }
        if (!errors[id] || errors[id] === undefined) {
          dispatch(nextPage());
          navigation.navigate(path);
        }
      }}
      style={[
        !errors[id] || errors[id] === undefined
          ?   styles.loginButton
          : styles.disabledButton,
      ]}>
      <Text style={styles.loginButtonText}>{title}</Text>
    </TouchableOpacity>
    // </View>
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
