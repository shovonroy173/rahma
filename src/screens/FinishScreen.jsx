import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {ThemeContext} from '../context/DarkThemeContext';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const FinishScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.title2}>
          Rahma is a Halal Community of Muslims, from Across the World.
        </Text>
        <Text style={styles.title2}>
          Please Adhere to Sensible Islamic Etiquette and Follow our Guidelines.
        </Text>
        <Text style={styles.text3}>
          Inappropiate Behavior will result in your Account being Permanently
          Blocked.
        </Text>
      </View>
      <Button
        title="Accept & Finish"
        navigation={navigation}
        path="BottomNavigator"
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

      padding: 30,
    },
    mainContainer: {
      gap: 40,
    },
    text3: {
      fontSize: responsiveFontSize(1.5),
      fontFamily: 'Poppins-Medium',
      paddingHorizontal: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme === 'dark' ? '#d1d5db' : '#111827',
    },
    title: {
      fontSize: responsiveFontSize(3.5),
      marginBottom: 10,
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      color: theme === 'dark' ? '#d1d5db' : '#111827',
    },
    title2: {
      fontSize: responsiveFontSize(1.5),
      fontFamily: 'Poppins-Medium',
      color: theme === 'dark' ? '#d1d5db' : '#111827',
    },
  });

export default FinishScreen;
