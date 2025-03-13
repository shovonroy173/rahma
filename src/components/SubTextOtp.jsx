import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/DarkThemeContext';

const SubTextOtp = () => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <View style={styles.privacyContainer}>
      <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12}}>
        Don’t Receive any Code?
      </Text>

      <Text style={styles.privacyText}>Resend OTP in 0:59</Text>
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    privacyContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 15,
      paddingVertical: 20,
      // flexWrap: 'wrap',
    },
    privacyText: {
      color: theme === 'dark' ? '#50C878' : '#379A35', fontSize: 14,
      fontFamily: 'Poppins-Regular',
    },
  });

export default SubTextOtp;
