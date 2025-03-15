import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import ExploreButton from './ExploreButton';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';
// import {ThemeContext} from '../context/DarkThemeContext';
// import {getStyles} from './Input';

const ExploreComponent = ({title, subtitle, name, img, single}) => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <View style={name ? styles.container : styles.nonButtonContainer}>
      <Image source={img} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {name && (
        <>
          <ExploreButton title="Start Discovering" type="bg" />
          <ExploreButton title="Edit Filters" />
        </>
      )}
      {single && (
        <ExploreButton title="Discover Profiles" type="bg" theme={theme} />
      )}
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

      padding: responsiveHeight(3),
      gap: responsiveHeight(1),
    },
    nonButtonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      // padding: 30,
      gap: 20,
    },
    title: {
      fontSize: responsiveFontSize(3),
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
      fontFamily: 'Poppins-SemiBold',
    },
    subtitle: {
      fontSize: responsiveFontSize(2),
      textAlign: 'center',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
      fontFamily: 'Poppins-Medium',
    },
    image: {
      width: responsiveHeight(35),
      height: responsiveHeight(25),
      objectFit: 'cover',
    },
  });

export default ExploreComponent;
