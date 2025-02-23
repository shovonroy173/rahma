import {View, StyleSheet, Text, Dimensions} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import Country from '../components/Country';
import {Controller, useFormContext} from 'react-hook-form';
import {CountrySelection} from 'react-native-country-list';

const PresentCountryScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {control, getValues} = useFormContext();
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer currentPage={currentPage} navigation={navigation} />
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.titleText}>Which country</Text>
            <Text style={styles.titleText}>Do you Live?</Text>
          </View>
          <View style={styles.countryContainer}>
            <Country name="presentCountry" />
            {/* <CountrySelection action={item => onCountrySelection(item)} /> */}
            <Controller
              name="presentCountry"
              control={control}
              render={({field: {onChange, value}}) => (
                <CountrySelection action={item => onChange(item?.name)} />
              )}
            />
            {getValues('presentCountry') && (
              <Text style={styles.date}>
                Place of Living: {getValues('presentCountry')}
              </Text>
            )}
          </View>
        </View>
      </View>
      <Button title="Continue" navigation={navigation} path="Rules" id="presentCountry" />
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
  countryContainer: {
    width: width,
    height: 480,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
  },
  date: {
    fontSize: 20,
    fontWeight: 600,
    fontFamily: 'Poppins-SemiBold',
  },
});
export default PresentCountryScreen;
