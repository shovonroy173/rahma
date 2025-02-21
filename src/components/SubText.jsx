import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SubText = ({navigation}) => {
  return (
    <View>
      <Text style={styles.privacyContainer}>
        By Continuing you agree to our{' '}
        <Text
          onPress={() => navigation.navigate('Terms')}
          style={styles.termsText}>
          Terms
        </Text>{' '}
        and{' '}
        <Text
          onPress={() => navigation.navigate('PrivacyPolicy')}
          style={styles.termsText}>
          Privacy Policy
        </Text>{' '}
      </Text>
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
  },
  termsText: {
    color: '#379A35',
  },
});

export default SubText;
