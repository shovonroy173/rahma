import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

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

const styles = StyleSheet.create({
  optionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F3F2F2',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: '#000000',

  },
  selectedOption: {
    backgroundColor: '#379A35',

  },
  optionText: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Medium',
    opacity: 0.6,

  },
  optionTextSelected: {
    fontSize: responsiveFontSize(2),
    color: '#ffffff',
    fontFamily: 'Poppins-SemiBold',
    opacity: 1,

  },
});

export default Option2;
