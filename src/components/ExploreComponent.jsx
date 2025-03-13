import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import ExploreButton from './ExploreButton';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
// import {ThemeContext} from '../context/DarkThemeContext';
// import {getStyles} from './Input';

const ExploreComponent = ({title, subtitle, name, img, single, theme}) => {
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
      {single && <ExploreButton title="Discover Profiles" type="bg" theme={theme}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: theme === 'dark' ? '#ffffff' : '#000000',

    padding: responsiveHeight(3),
    gap: responsiveHeight(1),
  },
  nonButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    // padding: 30,
    gap: 20,
  },
  title: {
    fontSize: responsiveFontSize(3),
    fontWeight: 600,
    // color: theme === 'dark' ? '#ffffff' : '#000000',
  },
  subtitle: {
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    // color: theme === 'dark' ? '#ffffff' : '#000000',
  },
  image: {
    width: responsiveHeight(35),
    height: responsiveHeight(25),
    objectFit: 'cover',
  },
});

export default ExploreComponent;
