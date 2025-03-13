import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Controller, useFormContext} from 'react-hook-form';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSelector} from 'react-redux';
import {ThemeContext} from '../context/DarkThemeContext';

const Option = ({item, index, id}) => {
  const {control, watch, setValue} = useFormContext();
  // console.log(watch(id));
  const savedValue = useSelector(state => state.form.formData[id] || '');
  useEffect(() => {
    if (savedValue) {
      setValue(id, savedValue);
    } else {
      console.log('no cache data');
    }
  }, [savedValue, setValue, id]);

  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <Controller
      name={id}
      control={control}
      render={({field: {onChange, value}}) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionContainer,
            watch(id)?.id === item.id && styles.selectedOption,
          ]}
          onPress={() => {
            onChange(item);
          }}>
          <View>
            <Text
              style={[
                watch(id)?.id === item.id
                  ? styles.optionTextSelected
                  : styles.optionText,
              ]}>
              {item.title}
            </Text>
            {item?.subTitle && (
              <Text
                style={[
                  watch(id)?.id === item.id
                    ? styles.optionTextSelected2
                    : styles.optionText2,
                ]}>
                {item?.subTitle}
              </Text>
            )}
          </View>
          <Feather
            name="chevron-right"
            size={24}
            color={(watch(id)?.id === item.id && theme === 'dark') ? '#ffffff' : '#000000'}
          />
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
      backgroundColor: theme === 'dark' ? '#1C1C1C' : '#F3F2F2',
      borderRadius: 20,
      paddingHorizontal: responsiveWidth(5),
      paddingVertical: responsiveHeight(1),
      // color: theme === 'dark' ? '#CCCCCCC' : '#000000',
      height: responsiveHeight(8),
    },
    selectedOption: {
      backgroundColor: theme === 'dark' ? '#1A3D1A' : '#379A35',
      padding: responsiveHeight(1),
    },
    optionText: {
      fontSize: responsiveFontSize(1.8),
      fontFamily: 'Poppins-Medium',
      opacity: theme === 'dark' ? 0.5 : 0.6,

    },
    optionTextSelected: {
      fontSize: responsiveFontSize(1.8),
      fontFamily: 'Poppins-Medium',
      color: theme === 'dark' ? '#f1ecec' : '#ffffff',
      opacity: 1,

    },
    optionText2: {
      opacity: theme === 'dark' ? 0.5 : 0.6,

      fontFamily: 'Poppins-Regular',
    },
    optionTextSelected2: {
      color: theme === 'dark' ? '#f1ecec' : '#ffffff',

      fontFamily: 'Poppins-Regular',
    },
  });

export default Option;
