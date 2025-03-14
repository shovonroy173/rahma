import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  // Dimensions,
} from 'react-native';
import React, {useContext} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const SelfieVerifyScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <ProgressContainer currentPage={currentPage} navigation={navigation} />
      <Image
        source={require('../../assets/images/user.webp')}
        style={styles.image}
      />
      <View>
        <Text style={styles.titleText}>
          Let’s Make Sure you are the Person in this Photo.
        </Text>
      </View>
      <View>
        <Text style={styles.subText}>
          This Ensure that you Only Meet Genuine People on Rahma.
        </Text>
      </View>
      <View style={styles.ruleBox}>
        <View style={styles.ruleContainer}>
          <MaterialCommunityIcons
            name="skull-scan-outline"
            color={theme === 'dark' ? '#166534' : '#379A35'}
            size={24}
          />
          <View>
            <Text style={styles.rule}>Scan your Face.</Text>
            <Text style={styles.rule2}>
              Confirm your Face Match your Photo.
            </Text>
          </View>
        </View>
        <View style={styles.ruleContainer}>
          <MaterialCommunityIcons
            name="skull-scan-outline"
            color={theme === 'dark' ? '#166534' : '#379A35'}
            size={24}
          />
          <View>
            <Text style={styles.rule}>Scan your Face.</Text>
            <Text style={styles.rule2}>
              Confirm your Face Match your Photo.
            </Text>
          </View>
        </View>
        <Text style={styles.subRule}>
          Our Verification Provide, Yoti, will Use your Selfie to Check that
          You’re Genuine. Yoti will Immediately Delete your Selfie Once these
          Checks are Complete. By Continuing you Agree to Our Terms and Privacy
          Policy
        </Text>
      </View>

      <Button
        title="Verify Photos"
        navigation={navigation}
        path="FaceVerification"
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Change Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

// const {width} = Dimensions.get('window');

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      padding: 30,
    },
    image: {
      width: responsiveWidth(30),
      height: responsiveHeight(20),
      borderRadius: 20,
    },
    titleText: {
      fontSize: responsiveFontSize(3),
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#d1d5db' : '#000000',
    },
    titleText2: {
      fontSize: responsiveFontSize(1.8),
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      color: theme === 'dark' ? '#d1d5db' : '#000000',
    },
    subText: {
      fontSize: responsiveFontSize(1.4),
      fontFamily: 'Poppins-Regular',
      // textAlign: 'center',
      color: theme === 'dark' ? '#FFFFFF' : '#313030',
    },
    rule: {
      fontSize: responsiveFontSize(2),
      fontFamily: 'Poppins-SemiBold',
      // textAlign: 'center',
      color: theme === 'dark' ? '#d1d5db' : '#000000',
    },
    rule2: {
      fontSize: responsiveFontSize(1.4),
      fontFamily: 'Poppins-Regular',
      color: theme === 'dark' ? '#9ca3af' : '#313030',
    },
    ruleBox: {
      display: 'flex',
      gap: responsiveHeight(2),
      paddingHorizontal: responsiveWidth(2),
    },
    ruleContainer: {
      display: 'flex',
      flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'center',
      gap: responsiveWidth(10),
      borderRadius: 20,
      paddingVertical: responsiveWidth(2),
      paddingHorizontal: responsiveWidth(5),
      backgroundColor: theme === 'dark' ? '#1C1C1C' : '#F3F2F2',
    },
    loginButton: {
      width: responsiveWidth(85),
      padding: responsiveWidth(2),
      borderRadius: 100,
      borderWidth: 2,
      borderColor: theme === 'dark' ? '#14532d' : '#379A35',
    },
    loginButtonText: {
      color: theme === 'dark' ? '#14532d' : '#379A35',
      textAlign: 'center',
      fontSize: responsiveFontSize(2.4),
      fontFamily: 'Poppins-SemiBold',
      // fontFamily: 'Poppins-SemiBold',
    },
    subRule: {
      fontSize: 10,
      fontFamily: 'Poppins-Regular',
      color: theme === 'dark' ? '#9ca3af' : '#000000',
    },
  });

export default SelfieVerifyScreen;
