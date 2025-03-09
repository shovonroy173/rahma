import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Controller, useFormContext} from 'react-hook-form';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSelector} from 'react-redux';

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
            color={watch(id)?.id === item.id ? '#ffffff' : '#000000'}
          />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DCD8D8',
    borderRadius: 20,
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(1),
    color: '#000000',
    height: responsiveHeight(8),
  },
  selectedOption: {
    backgroundColor: '#379A35',
  },
  optionText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins-Medium',
  },
  optionTextSelected: {
    fontSize: responsiveFontSize(1.8),
    color: '#ffffff',
    fontFamily: 'Poppins-Medium',
  },
  optionText2: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  optionTextSelected2: {
    color: '#ffffff',
    fontFamily: 'Poppins-Regular',
  },
});

export default Option;
