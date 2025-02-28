import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import ExploreButton from './ExploreButton';

const ExploreComponent = ({title, subtitle, name, img, single}) => {
  return (
    <View style={name ? styles.container : styles.nonButtonContainer}>
      <Image source={img} />
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
    padding: 30,
  },
  nonButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 30,
    gap: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 600,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default ExploreComponent;
