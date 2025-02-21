import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
const CommonWarning = ({title}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/warning.png')}/>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        backgroundColor: '#F3F2F2',
        borderRadius: 10,
    },
});

export default CommonWarning;
