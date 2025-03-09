import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const VerficationCompleteScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>Check Complete</Text>
      </View>

      <View style={styles.mainContainer}>
        <Image source={require('../../assets/images/doneverification.png')} />
        <Text style={styles.text}>Verifiaction Done</Text>
      </View>

      <Button
        title="Start Verification"
        path="EthinicOrigin"
        navigation={navigation}

        // id="faceVerification"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: responsiveHeight(4),
  },
  title: {
    fontSize: responsiveFontSize(3.5),
     fontFamily: 'Poppins-SemiBold',
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
});

export default VerficationCompleteScreen;
