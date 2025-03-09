import {View, Text, StyleSheet} from 'react-native';
import React, { useContext } from 'react';
import {AppStyles} from '../globalstyle/GlobalStyle';
import { ThemeContext } from '../context/DarkThemeContext';

const SubTextOtp = () => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <View style={styles.privacyContainer}>
      <Text style={{fontFamily: AppStyles.styles.fontFamily}}>
        Don’t Receive any Code?
      </Text>

      <Text style={styles.privacyText}>Resend OTP in 0:59</Text>
    </View>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    privacyContainer: {
      color: theme === 'dark' ? '#FFFFFF' : '#000000', // Dark mode: White, Light mode: Black
      textAlign: 'center',
      fontSize: 12,
      fontFamily: 'Poppins-Regular',
      fontWeight: '400', // Use a string for compatibility
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 15,
      paddingVertical: 20,
    },
    privacyText: {
      color: theme === 'dark' ? '#50C878' : '#379A35', // Dark mode: Light green, Light mode: Dark green
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
    },
  });

export default SubTextOtp;
