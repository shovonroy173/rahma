import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';

const Height = ({item, name}) => {
  const {control, watch} = useFormContext();
  // console.log(item.ft.toFixed(1).split('.'));
  // console.log(watch('height'));

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <TouchableOpacity
          style={styles.container}
          onPress={() => onChange(item)}
          onBlur={onBlur}
          value={value}>
          <Text style={[styles.text, watch(name)?.id === item?.id && styles.selectedText]}>{`${item?.cm} cm`}</Text>
          <Text>-</Text>
          <Text style={[styles.text, watch(name)?.id === item?.id && styles.selectedText]}>{`${item?.ft.toFixed(1).split('.')[0]}'${
            item?.ft.toFixed(1).split('.')[1]
          }'' ft`}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: 500,
  },
  selectedText: {
    borderRadius:10,
    color: 'white',
    backgroundColor: '#379A35',
    padding: 10,
  },
});

export default Height;
