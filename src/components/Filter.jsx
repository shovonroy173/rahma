import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Filter = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
        <Image source={require('../../assets/images/filter.png')} />
      </TouchableOpacity>

      <Text style={styles.title}>Explore</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // height: 60,
    gap: 100,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: 'center',
  },
});

export default Filter;
