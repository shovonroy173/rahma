import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';

const Height = ({item}) => {
  const {control} = useFormContext();
  console.log(item.ft.toFixed(1).split('.'));

  return (
    <Controller
      name="height"
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <TouchableOpacity
          style={styles.container}
          onPress={() => onChange(item?.cm)}
          onBlur={onBlur}
          value={value}>
          <Text style={styles.text}>{`${item?.cm} cm`}</Text>
          <Text>-</Text>
          <Text style={styles.text}>{`${item?.ft.toFixed(1).split('.')[0]}'${
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
});

export default Height;
