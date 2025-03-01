import {View, StyleSheet} from 'react-native';
import React from 'react';
import Upcoming from '../components/Upcoming';

const TermsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Upcoming title="Terms & Conditions" navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default TermsScreen;
