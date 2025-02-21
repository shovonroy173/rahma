import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import CommonWarning from '../components/CommonWarning';
import Button from '../components/Button';
import ErrorImage from '../components/ErrorImage';

const ConfirmFrontPhotoScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
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

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  mainContainer: {
    display: 'flex',
    gap: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    paddingHorizontal: 25,
  },
  info: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 600,
    color: '#7B7777',
    paddingHorizontal: 30,
  },
  btnContainer: {
    display: 'flex',
    gap: 20,
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

export default ConfirmFrontPhotoScreen;
