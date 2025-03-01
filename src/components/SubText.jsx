import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const SubText = ({navigation}) => {
  return (
    <View style={styles.privacyContainer}>
      <Text>By Continuing you agree to our</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
        <Text style={styles.termsText}>Terms</Text>
      </TouchableOpacity>{' '}
      <Text>and </Text>
      <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
        <Text style={styles.termsText}>Privacy Policy</Text>
      </TouchableOpacity>{' '}
    </View>
  );
};

const styles = StyleSheet.create({
  privacyContainer: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    paddingVertical: 20,
    fontWeight: 400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  termsText: {
    color: '#379A35',
  },
});

export default SubText;
