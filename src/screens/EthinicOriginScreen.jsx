import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
// import Country from '../components/Country';
import {CountrySelection} from 'react-native-country-list';
import {Controller, useFormContext} from 'react-hook-form';

const EthinicOriginScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  // const onCountrySelection = data => {
  //   console.log(data);
  // };
  const {control, getValues} = useFormContext();

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <ProgressContainer
              currentPage={currentPage}
              navigation={navigation}
            />

            <View style={styles.contentContainer}>
              <View>
                <Text style={styles.titleText}>What's your</Text>
                <Text style={styles.titleText}>Ethinic Origin?</Text>
              </View>
              <View style={styles.countryContainer}>
                {/* <Country name="birthCountry" /> */}
                {/* <CountrySelection action={item => onCountrySelection(item)} /> */}
                <Controller
                  name="ethinicorigin"
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <CountrySelection action={item => onChange(item?.name)} />
                  )}
                />
                {getValues('ethinicorigin') && (
                  <Text style={styles.date}>
                    Ethinic Origin: {getValues('ethinicorigin')}
                  </Text>
                )}
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Continue"
              navigation={navigation}
              path="GrownUp"
              id="ethinicorigin"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  buttonContainer: {
    paddingVertical: 20,
  },
});
export default EthinicOriginScreen;
