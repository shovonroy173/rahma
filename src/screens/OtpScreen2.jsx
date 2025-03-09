/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
// import {nextPage, prevPage} from '../redux/PageSlice';
import OtpBox from '../components/OtpBox';
import Button from '../components/Button';
// import {useState} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import SubTextOtp from '../components/SubTextOtp';
import MainText from '../components/MainText';
import {ScrollView} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {useContext} from 'react';
import {ThemeContext} from '../context/DarkThemeContext';

const OtpScreen2 = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.textContainer}>
          <ProgressContainer
            currentPage={currentPage}
            navigation={navigation}
          />
          <MainText
            text1="Enter the Verification Code Here"
            text2="A Verification Code Already Sent in your Phone."
          />
        </View>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 20,
            gap: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}>
          <View>
            <OtpBox name="phoneOtp" />
            <SubTextOtp />
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button
            value={1}
            navigation={navigation}
            title="Verify Code"
            path="Begin"
            id="phoneOtp"
          />
        </View>
      </View>
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
    inputContainer: {
      gap: responsiveHeight(3),
    },
    textContainer: {
      gap: responsiveHeight(3),
    },
    buttonContainer: {
      paddingBottom: responsiveHeight(2),
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
    },
  });

export default OtpScreen2;
