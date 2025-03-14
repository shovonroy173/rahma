import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import Selection from '../components/Selection';
import Button from '../components/Button';
import {knowStatus, marriedStatus} from '../../assets/data/data';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const MaritalIntensionScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>What’s your Intensions for Marriage?</Text>
        <View style={styles.contentContainer}>
          <View style={styles.mainContainer}>
            <Text style={styles.text}>
              I’d like to know someone on Rahma for
            </Text>
            {knowStatus.map(item => (
              <Selection
                key={item.id}
                name={`knowStatus.${item?.id}`}
                item={item}
              />
            ))}
          </View>
          <View style={styles.mainContainer}>
            <Text style={styles.text}>I’d like to be married within </Text>
            {marriedStatus.map(item => (
              <Selection
                key={item.id}
                name={`marriedStatus.${item?.id}`}
                item={item}
                type="marriedStatus"
              />
            ))}
          </View>
        </View>
      </View>

      <Button
        title="Continue"
        navigation={navigation}
        path="ReligiousType"
        id="knowStatus"
      />
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    mainContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: responsiveWidth(2),
    },
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      padding: responsiveHeight(4),
    },
    contentContainer: {
      gap: responsiveWidth(3),
    },
    title: {
      fontSize: responsiveFontSize(3.5),
      textAlign: 'center',
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#d1d5db' : '#111827',
    },
    text: {
      color: theme === 'dark' ? '#d1d5db' : '#111827',

      fontSize: responsiveFontSize(2),
      fontFamily: 'Poppins-Bold',
    },
  });

export default MaritalIntensionScreen;
