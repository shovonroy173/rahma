import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {gender} from '../../assets/data/data';
import Gender from '../components/Gender';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const GenderScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <ProgressContainer currentPage={currentPage} navigation={navigation} />
        <Text style={styles.titleText}>Please Select your Gender</Text>
      </View>

      <View style={styles.imageContainer}>
        {gender.map(item => (
          <Gender key={item.id} item={item} />
        ))}
      </View>

      <Button
        navigation={navigation}
        path="Name"
        title="Continue"
        id="gender"
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
    padding: responsiveHeight(4),
  },
  progressContainer: {
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 15,
  },
  titleText: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
  },
});

export default GenderScreen;
