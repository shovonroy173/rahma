import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ProgressContainer from '../components/ProgressContainer';
import Button from '../components/Button';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const VerificationDoneScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <View style={styles.container}>
      <ProgressContainer currentPage={currentPage} navigation={navigation} />
      <View style={styles.mainContainer}>
        <Image
          source={require('../../assets/images/done.png')}
          style={styles.image}
        />
        <Text style={styles.title}> Your Profile has Now been ID Verified</Text>
        <Text style={styles.text}>
          We’ll Now Show your Profile to More Members to Help you Find Love
          Faster
        </Text>
      </View>

      <Button
        title="Ok, Got It"
        value={1}
        navigation={navigation}
        path="ProfileReady"
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
    fontSize: responsiveFontSize(2.4),
    fontWeight: 600,
    paddingHorizontal: responsiveHeight(3),
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: responsiveHeight(2),
  },
  image: {
    width: responsiveWidth(35),
    height: responsiveWidth(35),
    objectFit: 'cover',
  },
});

export default VerificationDoneScreen;
