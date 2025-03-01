import {View, StyleSheet} from 'react-native';
import React from 'react';
import Upcoming from '../components/Upcoming';

const PrivacyPolicyScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Upcoming title="Privacy Policy" navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default PrivacyPolicyScreen;
