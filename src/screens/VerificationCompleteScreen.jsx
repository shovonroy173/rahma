import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const VerficationCompleteScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>Check Complete</Text>
      </View>

      <View style={styles.mainContainer}>
        <Image source={require('../../assets/images/doneverification.webp')} />
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
      fontSize: responsiveFontSize(3.5),
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#d1d5db' : '#000000',
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
      color: theme === 'dark' ? '#d1d5db' : '#000000',
    },
  });

export default VerficationCompleteScreen;
