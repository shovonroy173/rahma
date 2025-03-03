import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import {Image} from 'react-native';
import Button from '../components/Button';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const ProfileReadyScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <View style={styles.mainContainer}>
          <Image
            source={require('../../assets/images/congratulation.png')}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title1}>Your Account is Almost Ready</Text>
            <Text style={styles.title2}>
              You have Completed Almost half of Info. and your Profile is About
              to Ready
            </Text>
          </View>
        </View>
      </View>

      <Button title="Continue" navigation={navigation} path="UserSect" />
    </View>
  );
};

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
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    gap: 20,
  },
  title1: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 600,
  },
  title2: {
    fontSize: 16,
    textAlign: 'center',
    color: '#313030',
  },
  image: {
    width: responsiveWidth(55),
    height: responsiveWidth(55),
    objectFit: 'cover',
    alignItems: 'center',
  },
});

export default ProfileReadyScreen;
