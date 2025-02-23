import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import MainText from '../components/MainText';
import Calender from '../components/Calender';

const DOBScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer currentPage={currentPage} navigation={navigation} />
        <View style={styles.contentContainer}>
          <MainText
            text1="When were you Born?"
            text2="To continue please enter Date of Birth"
          />
          <Image
            source={require('../../assets/images/dob.png')}
            style={styles.image}
          />
          <Calender name="calender" />
        </View>
      </View>
      <Button
        title="Continue"
        navigation={navigation}
        path="BirthCountry"
        id="calender"
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
  mainContainer: {
    display: 'flex',
    gap: 40,
    alignItems: 'center',
  },
  contentContainer: {
    display: 'flex',
    gap: 30,
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 20,
  },
});
export default DOBScreen;
