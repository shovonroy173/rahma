import {View, Text, Image, StyleSheet} from 'react-native';
import React, { useContext } from 'react';
import {useSelector} from 'react-redux';
import ProgressContainer from '../components/ProgressContainer';
import Button from '../components/Button';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { ThemeContext } from '../context/DarkThemeContext';

const VerificationDoneScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <ProgressContainer currentPage={currentPage} navigation={navigation} />
      <View style={styles.mainContainer}>
        <Image
          source={require('../../assets/images/done.webp')}
          style={styles.image}
        />
        <Text style={styles.title}> Your Profile has Now been ID Verified</Text>
        <Text style={styles.text}>
          We’ll Now Show your Profile to More Members to Help you Find Love
          Faster
        </Text>
      </View>

      <Button title="Ok, Got It" navigation={navigation} path="ProfileReady" />
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
    title: {
      fontSize: responsiveFontSize(2.5),
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      color: theme === 'dark' ? '#ffffff' : '#000000',
    },
    text: {
      textAlign: 'center',
      fontFamily: 'Poppins-Medium',
      color: theme === 'dark' ? '#444444' : '#CCCCCC',
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
