import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/DarkThemeContext';
const CommonWarning = ({title}) => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/warning.png')} />
      <Text>{title}</Text>
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      padding: 10,
      backgroundColor: theme === 'dark' ? '#1C1C1C' : '#F3F2F2',
      borderRadius: 10,
    },
  });

export default CommonWarning;
