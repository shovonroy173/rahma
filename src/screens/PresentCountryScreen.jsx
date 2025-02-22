import {View, StyleSheet, Text, Dimensions} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import Country from '../components/Country';

const PresentCountryScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
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
          </View>
        </View>
      </View>
      <Button title="Continue" value={1} navigation={navigation} path="Rules" />
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
});
export default PresentCountryScreen;
