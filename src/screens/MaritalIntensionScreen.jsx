import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Selection from '../components/Selection';
import Button from '../components/Button';
import {knowStatus, marriedStatus} from '../../assets/data/data';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const MaritalIntensionScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

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

const styles = StyleSheet.create({
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
    backgroundColor: '#ffffff',
    padding: responsiveHeight(4),
  },
  contentContainer: {
    gap: responsiveWidth(3),
  },
  title: {
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
    fontWeight: 600,
  },
  text: {
    fontSize: responsiveFontSize(2.3),
    // textAlign: 'center',
    fontWeight: 800,
  },
});

export default MaritalIntensionScreen;
