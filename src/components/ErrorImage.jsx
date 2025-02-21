import {View, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';

const ErrorImage = () => {
  return (
    <View style={styles.imgContainer}>
      <Image source={require('../../assets/images/readable.png')} />
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  imgContainer: {
    borderWidth: 5,
    borderColor: 'gray',
    borderRadius: 20,
    width: width - 140,
  },
});

export default ErrorImage;
