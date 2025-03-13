import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const ErrorImage = () => {
  return (
    <View style={styles.imgContainer}>
      <Image source={require('../../assets/images/readable.webp')} />
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    borderWidth: 5,
    borderColor: 'gray',
    borderRadius: 20,
    width: responsiveWidth(65),
  },
});

export default ErrorImage;
