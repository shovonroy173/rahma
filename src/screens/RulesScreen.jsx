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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';

const RulesScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <View style={styles.container}>
      <ProgressContainer currentPage={currentPage} navigation={navigation} />
      <Image
        source={require('../../assets/images/user.png')}
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
      <Button title="Get ID Verified" value={1} navigation={navigation} path="VerificationCancel" />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Cancel</Text>
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
    width: 180,
    height: 180,
    borderRadius: 20,
    },
    titleText: {
      fontSize: 24,
      fontWeight: 600,
      textAlign: 'center',
    },
  titleText2: {
    fontSize: 20,
    fontWeight: 600,
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'center',
    color: '#313030',
  },
  rule: {
    fontSize: 18,
    fontWeight: 600,
    // textAlign: 'center',
    color: '#313030',
  },
  ruleBox: {
    display: 'flex',
    gap: 25,
    paddingHorizontal: 20,
  },
  ruleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
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
});

export default RulesScreen;
