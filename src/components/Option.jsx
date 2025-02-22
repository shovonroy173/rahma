import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Controller, useFormContext} from 'react-hook-form';

const Option = ({item, index, handleSelect, selectedOptions}) => {
  const {control , watch} = useFormContext();
console.log(watch('idType'));

  return (
    <Controller
      name="idType"
      control={control}
      render={({field: {onChange, value}}) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionContainer,
            selectedOptions === index && styles.selectedOption,
          ]}
          onPress={() => {
            handleSelect(index);
            onChange(item.id);
          }}>
          <View>
            <Text
              style={[
                selectedOptions === index
                  ? styles.optionTextSelected
                  : styles.optionText,
              ]}>
              {item.title}
            </Text>
            {item?.subTitle && (
              <Text
                style={[
                  selectedOptions === index
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
            color={selectedOptions === index ? '#ffffff' : '#000000'}
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
    paddingHorizontal: 30,
    paddingVertical: 5,
    color: '#000000',
    height: 70,
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
  optionText2: {
    color: '#000000',
  },
  optionTextSelected2: {
    color: '#ffffff',
  },
});

export default Option;
