import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';

const Option2 = ({item , name} ) => {
  const {control, watch} = useFormContext();
  // console.log(watch('sect'));

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
    backgroundColor: '#E8E5E5',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: '#000000',
  },
  selectedOption: {
    backgroundColor: '#379A35',
  },
  optionText: {
    fontSize: 18,
  },
  optionTextSelected: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default Option2;
