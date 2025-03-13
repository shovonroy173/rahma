import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {useDispatch} from 'react-redux';
import {nextPage} from '../redux/PageSlice';
import {useFormContext} from 'react-hook-form';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';
// import {useAddUserMutation} from '../redux/slices/userSlice';
// import {resetFormData} from '../redux/slices/formSlice';

const Button = ({navigation, title, path, id, phoneInput}) => {
  const dispatch = useDispatch();
  // const [addUser] = useAddUserMutation();
  const {
    handleSubmit,
    formState: {errors},
    watch,
    getValues,
    // reset,
  } = useFormContext();
  // const onSubmit = async data => {
  //   try {
  //     console.log('Form Submitted:', data);
  //     console.log(
  //       'Date:',
  //       data.calender ? data.calender.toLocaleDateString() : 'No date selected',
  //     );

  //     const response = await addUser(data).unwrap();
  //     console.log('User added:', response);
  //     reset(); // Clears react-hook-form state
  //     dispatch(resetFormData());
  //   } catch (error) {
  //     console.error('Error adding user:', error);
  //   }
  // };
  const onSubmit = data => {
    console.log('Form Submitted:', data);
    console.log(
      'Date:',
      data.calender ? data.calender.toLocaleDateString() : 'No date selected',
    );
  };
  // console.log(!watch('calender'));

  const totalInterests =
    watch('selectedOptions') || watch('selectedPersonalities')
      ? Object.values(watch(id) || {}).reduce(
          (sum, category) => sum + category?.length,
          0,
        )
      : 0;
  // console.log(watch(id), totalInterests);
  const isDisabled =
    !!errors[id] ||
    !watch(id) ||
    phoneInput?.current?.isValidNumber(getValues('phone')) === false ||
    (id === 'user' && (!watch(id).firstName || !watch(id).lastName)) ||
    (id === 'selectedOptions' &&
      (Object.keys(watch(id)).length === 0 || totalInterests === 0)) ||
    (id === 'selectedPersonalies' &&
      (Object.keys(watch(id)).length === 0 || totalInterests === 0));

  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      onPress={() => {
        if (isDisabled) {
          console.log('handle submit Error', errors[id]);
        } else {
          if (path === 'BottomNavigator') {
            handleSubmit(onSubmit)();
          }
          // handleSubmit(onSubmit)();

          dispatch(nextPage());
          navigation.navigate(path);
        }
      }}
      style={[isDisabled ? styles.disabledButton : styles.loginButton]}>
      <Text style={styles.loginButtonText}>
        {(id === 'selectedOptions' && totalInterests !== 0) ||
        (id === 'selectedPersonalies' && totalInterests !== 0)
          ? `Select(${totalInterests})`
          : title}
      </Text>
    </TouchableOpacity>
  );
};
const getStyles = theme =>
  StyleSheet.create({
    loginButton: {
      width: responsiveWidth(84),
      backgroundColor: theme === 'dark' ? '#1A3D1A' : '#379A35',
      padding: responsiveHeight(1),
      borderRadius: 100,
    },
    loginButtonText: {
      color: theme === 'dark' ? '#E5E5E5' : '#FFFFFF',
      textAlign: 'center',
      fontSize: responsiveFontSize(2.5),
      fontFamily: 'Poppins-SemiBold',
    },
    disabledButton: {
      width: responsiveWidth(84),
      backgroundColor: theme === 'dark' ? '#1A3D1A' : '#379A35',
      padding: responsiveHeight(1),
      borderRadius: 100,
      opacity: 0.6,
      cursor: 'auto',
    },
  });

export default Button;
