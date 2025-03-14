import React, { useContext } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {gender} from '../../assets/data/data';
import Gender from '../components/Gender';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { ThemeContext } from '../context/DarkThemeContext';
const GenderScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

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

const getStyles = (theme)=> StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',

    padding: responsiveHeight(4),
  },
  progressContainer: {
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 15,
  },
  titleText: {
    fontSize: responsiveFontSize(4),
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: theme === 'dark' ? '#d1d5db' : '#000000',
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
