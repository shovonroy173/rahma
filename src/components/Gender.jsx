import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const Gender = ({item}) => {
  const {control, getValues} = useFormContext();
//   console.log('getValues', getValues('gender'));

  return (
    <Controller
      name="gender"
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <TouchableOpacity
          onBlur={onBlur}
          onPress={() => {
            onChange(item.id);
          }}
          value={value}
          style={styles.singleImageContainer}>
          {getValues('gender') !== item.id && (
            <View style={styles.imageShield} />
          )}
          {item.id === 'male' ? (
            <Image
              source={require('../../assets/images/male.png')}
              style={styles.image}
            />
          ) : (
            <Image
              source={require('../../assets/images/female.png')}
              style={styles.image}
            />
          )}
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  singleImageContainer: {
    position: 'relative', // Ensures overlay can be positioned inside this container
  },
  image: {
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    borderRadius: 100,
  },
  imageShield: {
    position: 'absolute',
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    backgroundColor: 'rgba(120,120,120, 0.7)',
    borderRadius: 100,
    zIndex: 10,
  },
});

export default Gender;
