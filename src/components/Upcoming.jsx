import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, { useContext } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ThemeContext } from '../context/DarkThemeContext';

const Upcoming = ({title, navigation}) => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <MaterialIcons name="upcoming" size={50} color={'#379A35'} />
      <Text style={styles.title}>Coming Soon</Text>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Text style={styles.link}>Go back..</Text>
      </TouchableOpacity>
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      gap: 20,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      color: theme === 'dark' ? '#ffffff' : '#00000',
    },
    back: {
      backgroundColor: 'gray',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    link: {
      color: theme === 'dark' ? '#ffffff' : '#00000',
      fontFamily: 'Poppins-Medium',
    },
  });

export default Upcoming;
