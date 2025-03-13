/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, { useContext } from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { ThemeContext } from '../context/DarkThemeContext';

const NotificationScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>Notification</Text>
        <Text style={{fontFamily: 'Poppins-Regular'}}>
          Do you Want to Active Notifications on your Device.
        </Text>
        <View>
          <View style={styles.memberContainer}>
            <View style={styles.memberTextContainer}>
              <Text style={styles.memberText}>Notification</Text>
              <Text style={styles.memberText2}>
                Enable Notification to Stay Up to Date with New Likes, Matches
                and Massages
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.learnMore}>Active Now</Text>
            </TouchableOpacity>
          </View>{' '}
        </View>
      </View>
      {/* <View style={styles.buttonContainer}> */}
      <Button title="Continue" navigation={navigation} path="UploadPhotos" />
      {/* </View> */}
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      justifyContent: 'space-between',
      padding: responsiveHeight(4),
    },

    title: {
      fontSize: responsiveFontSize(3.5),
      textAlign: 'center',
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#ffffff' : '#000000',
    },
    mainContainer: {
      gap: responsiveHeight(2),
    },

    buttonContainer: {
      paddingVertical: responsiveHeight(2),
      width: '100%',
    },

    memberContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: responsiveHeight(1.5),
      paddingHorizontal: responsiveWidth(4),
      backgroundColor: theme === 'dark' ? '#5D6A4B' : '#98C097',
      // opacity: 0.7,
      borderRadius: 10,
    },
    memberTextContainer: {
      width: responsiveWidth(50),
    },
    memberText: {
      fontSize: responsiveFontSize(2.4),
      color: theme === 'dark' ? '#ffffff' : '#000000',
      opacity: 0.7,
      fontFamily: 'Poppins-SemiBold',
    },
    memberText2: {
      fontSize: responsiveFontSize(1.4),
      color: theme === 'dark' ? '#ffffff' : '#000000',
      opacity: 0.7,
      fontFamily: 'Poppins-Regular',
    },

    learnMore: {
      color: theme === 'dark' ? '#ffffff' : '#000000',

      backgroundColor: theme === 'dark' ? '#1A3D1A' : '#379A35',
      padding: responsiveHeight(1),

      paddingVertical: responsiveHeight(1),
      paddingHorizontal: responsiveWidth(3),
      borderRadius: 20,
      fontSize: responsiveFontSize(1.6),
      fontFamily: 'Poppins-SemiBold',
      opacity: 1,
    },
  });

export default NotificationScreen;
