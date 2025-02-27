import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';

const SelfieVerifyScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <View style={styles.container}>
      <ProgressContainer currentPage={currentPage} navigation={navigation} />
      <Image
        source={require('../../assets/images/user.png')}
        style={styles.image}
      />
      <View>
        <Text style={styles.titleText}>
          Let’s Make Sure you are the Person in this Photo.
        </Text>
        {/* <Text style={styles.titleText2}>Muslim Dating Apps</Text> */}
      </View>
      <View>
        <Text style={styles.subText}>
          This Ensure that uou Only Meet Genuine People on Rahma.
        </Text>
        {/* <Text style={styles.subText}>
          You must Verify your ID With Our Apps.{' '}
        </Text> */}
      </View>
      <View style={styles.ruleBox}>
        <View style={styles.ruleContainer}>
          <MaterialCommunityIcons
            name="skull-scan-outline"
            color={'#379A35'}
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
            color={'#379A35'}
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
        path="BottomNavigator"
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Change Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  image: {
    width: 120,
    height: 140,
    borderRadius: 20,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 600,
  },
  titleText2: {
    fontSize: 20,
    fontWeight: 600,
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    fontWeight: 400,
    // textAlign: 'center',
    color: '#313030',
  },
  rule: {
    fontSize: 18,
    fontWeight: 600,
    // textAlign: 'center',
    color: '#313030',
  },
  rule2: {
    fontSize: 14,
  },
  ruleBox: {
    display: 'flex',
    gap: 10,
    paddingHorizontal: 20,
  },
  ruleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#F3F2F2',
  },
  loginButton: {
    width: width - 50,
    padding: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#379A35',
  },
  loginButtonText: {
    color: '#379A35',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
    fontFamily: 'Poppins-SemiBold',
  },
  subRule: {
    fontSize: 10,
  },
});

export default SelfieVerifyScreen;
