import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const MainText = ({text1, text2}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{text1}</Text>
      <Text style={styles.subText}>{text2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 10,
  },
  mainText: {
    fontSize: 30,
    fontWeight: 600,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  subText: {
    fontSize: 16,
    fontWeight: 400,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});

export default MainText;
