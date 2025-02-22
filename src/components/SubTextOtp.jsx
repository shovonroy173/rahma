import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SubTextOtp = () => {
  return (
    <View style={styles.privacyContainer}>
      <Text>Don’t Receive any Code?</Text>

      <Text style={styles.privacyText}>Resend OTP in 0:59</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  privacyContainer: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    fontWeight: 400,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    paddingVertical: 20,

  },
  privacyText: {
    color: '#379A35',
    fontSize: 16,
  },
});

export default SubTextOtp;
