import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import {lookingFor} from '../../assets/data/data';
import Option from '../components/Option';
import Button from '../components/Button';
import Slider from '@react-native-community/slider';

const LookingForScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>Tell us Who you’re Looking for?</Text>
        <View>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Age</Text>
            <Text>18-51 Years</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#47A146"
            maximumTrackTintColor="#A8C6A8"
          />
        </View>
        <View style={styles.mainContainer}>
          {lookingFor.map(item => (
            <Option key={item.id} item={item} id="looking" />
          ))}
        </View>
      </View>
      <Button
        title="Submit"
        navigation={navigation}
        path="Finish"
        id="looking"
      />
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 30,
  },
  slider: {
    width: width - 60,
    height: 30,
  },
  mainContainer: {
    gap: 20,
    // paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 600,
    textAlign: 'center',
  },
});

export default LookingForScreen;
