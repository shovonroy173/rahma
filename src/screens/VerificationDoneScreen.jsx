import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ProgressContainer from '../components/ProgressContainer';
import Button from '../components/Button';

const VerificationDoneScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <View style={styles.container}>
      <ProgressContainer currentPage={currentPage} navigation={navigation} />
      <View style={styles.mainContainer}>
        <Image source={require('../../assets/images/done.png')} />
        <Text style={styles.title}> Your Profile has Now been ID Verified</Text>
        <Text>
          We’ll Now Show your Profile to More Members to Help you Find Love
          Faster
        </Text>
      </View>

      <Button
        title="Ok, Got It"
        value={1}
        navigation={navigation}
        path="ProfileReady"
      />
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
  title: {
    fontSize: 24,
    fontWeight: 600,
    paddingHorizontal: 30,
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
});

export default VerificationDoneScreen;
