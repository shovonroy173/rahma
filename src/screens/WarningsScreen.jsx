import {View, Text, StyleSheet} from 'react-native';
import React, { useContext } from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import MainText from '../components/MainText';
import Button from '../components/Button';
import { ThemeContext } from '../context/DarkThemeContext';

const WarningsScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer currentPage={currentPage} navigation={navigation} />
        <MainText
          text1="Confirm your Identity!"
          text2="To do this, We’ll Need the Following Information"
        />
        <View style={styles.textContainerBox}>
          <View style={styles.textContainer}>
            <Text style={styles.textNumber}>1</Text>
            <Text style={styles.text}>A Photo of your ID Document</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textNumber}>2</Text>
            <Text style={styles.text}>A Quick Scan of your Face.</Text>
          </View>
        </View>
      </View>
      <Button
        title="Get Started"
        value={1}
        navigation={navigation}
        path="VerificationOption"
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
    padding: 30,
  },
  mainContainer: {
    display: 'flex',
    gap: 20,
  },
  textContainerBox: {
    display: 'flex',
    gap: 20,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textNumber: {
    color: theme === 'dark' ? '#d1d5db' : '#ffffff',
    backgroundColor: theme === 'dark' ? '#1A3D1A' : '#379A35',
    borderRadius: 100,
    textAlign: 'center',
    width: 50,
    padding:8,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: theme === 'dark' ? '#d1d5db' : '#313030',
  },
});

export default WarningsScreen;
