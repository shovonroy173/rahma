/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {lookingFor, preferences} from '../../assets/data/data';
import Option from '../components/Option';
import Slider from '@react-native-community/slider';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useFormContext} from 'react-hook-form';
import {ThemeContext} from '../context/DarkThemeContext';
const FilterScreen = ({navigation}) => {
  const {getValues} = useFormContext();
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="close-circle-outline"
            size={30}
            color={theme === 'dark' ? '#a1a1aa' : '#18181b'}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Filters</Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: theme === 'dark' ? '#a1a1aa' : '#18181b',
          }}>
          Clear All
        </Text>
      </View>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 20, gap: 40}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Basic Information</Text>
          <View>
            <View style={styles.topContainer}>
              <Text style={styles.title}>Age</Text>
              <Text
                style={{
                  color: theme === 'dark' ? '#d1d5db' : '#111827',
                  fontFamily: 'Poppins-Regular',
                }}>{`${
                getValues('lookingforage')
                  ? Math.floor(getValues('lookingforage'))
                  : 'Not Selected'
              }`}</Text>
              <Text
                style={{
                  color: theme === 'dark' ? '#d1d5db' : '#111827',
                  fontFamily: 'Poppins-Regular',
                }}>
                18-51 Years
              </Text>
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
              <Option key={item.id} item={item} id="filter1" />
            ))}
          </View>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Profile Preferance</Text>
          <View style={styles.mainContainer}>
            {preferences.map(item => (
              <Option key={item.id} item={item} id="filter2" />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const {width} = Dimensions.get('window');

const getStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      flex: 1,
      padding: 30,
    },
    slider: {
      width: width,
      height: 30,
    },
    topContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 20,
    },
    mainContainer: {
      gap: 20,
    },

    scrollContainer: {
      flex: 1,
      width: '100%',
      gap: 40,
    },
    title: {
      fontSize: responsiveFontSize(2.5),
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      color: theme === 'dark' ? '#d1d5db' : '#111827',
    },
  });

export default FilterScreen;
