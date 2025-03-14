import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import {Image} from 'react-native';
import Button from '../components/Button';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const ProfileReadyScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <View style={styles.mainContainer}>
          <Image
            source={require('../../assets/images/congratulation.webp')}
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

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',

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
      fontSize: responsiveFontSize(3.5),
      textAlign: 'center',
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#d1d5db' : '#000000',
    },
    title2: {
      fontSize: 16,
      textAlign: 'center',
      color: theme === 'dark' ? '#d1d5db' : '#313030',
      fontFamily: 'Poppins-Medium',
    },
    image: {
      width: responsiveWidth(55),
      height: responsiveWidth(55),
      objectFit: 'cover',
      alignItems: 'center',
    },
  });

export default ProfileReadyScreen;
