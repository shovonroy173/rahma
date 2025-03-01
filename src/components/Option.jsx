import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Controller, useFormContext} from 'react-hook-form';

const Option = ({item, index, id}) => {
  const {control, watch} = useFormContext();
  // console.log(watch(id));

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
    paddingHorizontal: 30,
    paddingVertical: 4,
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
