import {
  View,
  Text,
  StyleSheet,
  // Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import CommonWarning from '../components/CommonWarning';
import Button from '../components/Button';
import ErrorImage from '../components/ErrorImage';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const ConfirmFrontPhotoScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer currentPage={currentPage} navigation={navigation} />
        <Text style={styles.title}>
          Let’s Make Sure you are the Person in this Photo.
        </Text>
        <ErrorImage />
        <Text style={styles.info}>Are your Details Clear and Readable?</Text>
        <CommonWarning
          title="If you have Any Short of Visual or
 Motor Impairment you might Need Some Assistance"
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="Yes, Take It"
          value={1}
          navigation={navigation}
          path="UpdatingInfo"
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      {/* <Camera
      // style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    /> */}
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',

      padding: responsiveHeight(4),
    },
    mainContainer: {
      display: 'flex',
      gap: responsiveHeight(2),
      paddingHorizontal: responsiveHeight(1),
      alignItems: 'center',
    },
    title: {
      fontSize: responsiveFontSize(3),
      fontWeight: 600,
      paddingHorizontal: responsiveWidth(2),
      color: theme === 'dark' ? '#f3f4f6' : '#111827',
      fontFamily: 'Poppins-SemiBold',
    },
    info: {
      fontSize: responsiveFontSize(1.8),
      textAlign: 'center',
      fontWeight: 600,
      color: theme === 'dark' ? '#e5e7eb' : '#111111',
      paddingHorizontal: responsiveHeight(3),
      fontFamily: 'Poppins-Regular',

    },
    btnContainer: {
      display: 'flex',
      gap: responsiveHeight(2),
    },
    loginButton: {
      width: responsiveWidth(84),
      padding: responsiveHeight(1),
      borderRadius: 100,
      borderWidth: 2,
      borderColor: theme === 'dark' ? '#14532d' : '#379A35',
    },
    loginButtonText: {
      color: theme === 'dark' ? '#14532d' : '#379A35',
      textAlign: 'center',
      fontSize: responsiveFontSize(2.5),
      fontFamily: 'Poppins-SemiBold',
    },
  });

export default ConfirmFrontPhotoScreen;
