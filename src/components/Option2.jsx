import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const Option2 = ({item, name}) => {
  const {control, watch, setValue} = useFormContext();
  // console.log(watch('sect'));
  const savedValue = useSelector(state => state.form.formData[name] || '');
  useEffect(() => {
    if (savedValue) {
      setValue(name, savedValue);
    } else {
      console.log('no cache data');
    }
  }, [savedValue, setValue, name]);

  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value}}) => (
        <TouchableOpacity
          style={[
            styles.optionContainer,
            watch(name)?.id === item?.id && styles.selectedOption,
          ]}
          onPress={() => {
            onChange(item);
          }}>
          <View>
            <Text
              style={[
                styles.optionText,

                watch(name)?.id === item?.id && styles.optionTextSelected,
              ]}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const getStyles = theme =>
  StyleSheet.create({
    optionContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#1C1C1C' : '#e5e7eb',
      borderRadius: 10,
      paddingHorizontal: 30,
      paddingVertical: 10,
    },
    selectedOption: {
      backgroundColor: theme === 'dark' ? '#1A3D1A' : '#379A35',
      padding: responsiveHeight(1),
    },
    optionText: {
      fontSize: responsiveFontSize(2),
      fontFamily: 'Poppins-Medium',
      opacity: theme === 'dark' ? 0.5 : 0.6,
      color: theme === 'dark' ? '#1C1C1C' : '#111827',

    },
    optionTextSelected: {
      fontSize: responsiveFontSize(2),
      color: theme === 'dark' ? '#d1d5db' : '#ffffff',

      fontFamily: 'Poppins-SemiBold',
      opacity: 1,
    },
  });

export default Option2;
