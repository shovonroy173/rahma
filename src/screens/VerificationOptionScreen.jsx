import {View, Text, StyleSheet} from 'react-native';
import React, { useContext } from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {options} from '../../assets/data/data';
import Option from '../components/Option';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { ThemeContext } from '../context/DarkThemeContext';

const VerificationOptionScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View>
        <ProgressContainer currentPage={currentPage} navigation={navigation} />
        <Text style={styles.title}>
          Select the Type Of ID Document you Want to Add
        </Text>
        <View style={styles.mainContainer}>
          <Text style={styles.text}>Issuing Country</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text2}>Bangladesh</Text>
            <Text style={styles.footerText}>Change</Text>
          </View>
          <View style={styles.divider} />
          <Text style={styles.text}>Accepted Documents:</Text>
          {options.map((item, index) => (
            <Option key={index} item={item} index={index} id="idType" />
          ))}
          <Text style={styles.footerText}>More about Verification</Text>
        </View>
      </View>
      <Button
        title="Submit"
        navigation={navigation}
        path="TakePhoto"
        id="idType"
      />
    </View>
  );
};

const getStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
    padding: responsiveHeight(4),
  },
  mainContainer: {
    display: 'flex',
    gap: responsiveHeight(2),
  },
  divider: {
    height: 1,
    backgroundColor: theme === 'dark' ? '#ffffff' : '#000000',

  },
  title: {
    fontSize: responsiveFontSize(3),
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    color: theme === 'dark' ? '#ffffff' : '#000000',
  },
  text: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins-SemiBold',
    color: theme === 'dark' ? '#ffffff' : '#000000',

  },
  text2: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins-Regular',
    color: theme === 'dark' ? '#ffffff' : '#000000',

  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  footerText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins-SemiBold',
    color: theme === 'dark' ? '#1A3D1A' : '#379A35',
  },
});

export default VerificationOptionScreen;
