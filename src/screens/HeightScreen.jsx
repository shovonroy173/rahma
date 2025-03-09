/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import {heights} from '../../assets/data/data';
import Height from '../components/Height';
import Button from '../components/Button';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const HeightScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>What's your Height?</Text>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 20, gap: 10}}
        showsVerticalScrollIndicator={false}>
        {heights.map(item => (
          <Height key={item.id} item={item} name="height" />
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button
          title="Continue"
          navigation={navigation}
          path="MaritalStatus"
          id="height"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: responsiveHeight(4),
  },
  mainContainer: {
    gap: responsiveHeight(2),
  },
  title: {
    fontSize: responsiveFontSize(3.5),
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: responsiveHeight(2),
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    paddingVertical: responsiveHeight(2),
    backgroundColor: 'white',
  },
});

export default HeightScreen;
