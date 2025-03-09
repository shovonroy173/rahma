import {View, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import Upcoming from '../components/Upcoming';
import {ThemeContext} from '../context/DarkThemeContext';

const PrivacyPolicyScreen = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Upcoming title="Privacy Policy" navigation={navigation} />
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
    },
  });

export default PrivacyPolicyScreen;
