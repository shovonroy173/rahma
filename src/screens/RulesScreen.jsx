import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  // Dimensions,
} from 'react-native';
import React, { useContext } from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { ThemeContext } from '../context/DarkThemeContext';

const RulesScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <ProgressContainer currentPage={currentPage} navigation={navigation} />
      <Image
        source={require('../../assets/images/user.webp')}
        style={styles.image}
      />
      <View>
        <Text style={styles.titleText}>Welcome to Rahma!</Text>
        <Text style={styles.titleText2}>Muslim Dating Apps</Text>
      </View>
      <View>
        <Text style={styles.subText}>We are Scam Free Apps.</Text>
        <Text style={styles.subText}>
          You must Verify your ID With Our Apps.{' '}
        </Text>
      </View>
      <View style={styles.ruleBox}>
        <View style={styles.ruleContainer}>
          <Ionicons
            name="checkmark-circle-outline"
            color={'#379A35'}
            size={24}
          />
          <Text style={styles.rule}>
            All Members On Our Apps Must be Verified.
          </Text>
        </View>
        <View style={styles.ruleContainer}>
          <Ionicons
            name="checkmark-circle-outline"
            color={'#379A35'}
            size={24}
          />
          <Text style={styles.rule}>
            Rahma is the World’s First Scam- Free Dating/Marriage App. Please do
            not Use Our Apps if you Scam.
          </Text>
        </View>
        <View style={styles.ruleContainer}>
          <Ionicons
            name="checkmark-circle-outline"
            color={'#379A35'}
            size={24}
          />
          <Text style={styles.rule}>
            We Continuously Verify all Accounts on Our Apps.Your Account Cold be
            Deactivated Any Time, If Suspicious Activity is Detected.
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Get ID Verified"
          navigation={navigation}
          path="VerificationCancel"
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const getStyles = (theme)=> StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',

    padding: responsiveHeight(4),
    gap: responsiveHeight(2),
  },
  image: {
    width: responsiveWidth(35),
    height: responsiveWidth(35),
    borderRadius: 20,
  },
  titleText: {
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: theme === 'dark' ? '#ffffff' : '#000000',

  },
  titleText2: {
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: theme === 'dark' ? '#ffffff' : '#000000',

  },
  subText: {
    fontSize: responsiveFontSize(1.4),
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: theme === 'dark' ? '#ffffff' : '#313030',

  },
  rule: {
    fontSize: responsiveFontSize(1.6),
    textAlign: 'left',
    color: theme === 'dark' ? '#ffffff' : '#313030',
    fontFamily: 'Poppins-SemiBold',

  },
  ruleBox: {
    display: 'flex',
    gap: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(2),
  },
  ruleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(2),
    gap: responsiveWidth(1.5),
  },
  loginButton: {
    width: responsiveWidth(85),
    padding: responsiveWidth(1.5),
    borderRadius: 100,
    borderWidth: 2,
    borderColor: theme === 'dark' ? '#121212' : '#379A35',
  },
  loginButtonText: {
    color: theme === 'dark' ? '#121212' : '#379A35',
    textAlign: 'center',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 600,
    fontFamily: 'Poppins-SemiBold',
  },
  buttonContainer: {
    gap: responsiveHeight(2),
  },
});

export default RulesScreen;
