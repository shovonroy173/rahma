import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import ExploreButton from './ExploreButton';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const ExploreComponent = ({title, subtitle, name, img, single}) => {
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
      {single && <ExploreButton title="Discover Profiles" type="bg" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
  },
  subtitle: {
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
  },
  image: {
    width: responsiveHeight(35),
    height: responsiveHeight(25),
    objectFit: 'cover',
  },
});

export default ExploreComponent;
