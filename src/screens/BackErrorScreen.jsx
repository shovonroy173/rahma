/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import ErrorImage from '../components/ErrorImage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const BackErrorScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <View style={styles.container}>
      <ProgressContainer currentPage={currentPage} navigation={navigation} />
      <Text style={styles.title}>We could n’t See Some of your Details</Text>
      <ErrorImage />
      <View>
        <Text style={styles.idType}>National ID</Text>
        <Text style={styles.nation}>Bangladesh</Text>
      </View>
      <View style={styles.screenNameContainer}>
        <Text style={styles.idType3}>Front</Text>
        <Text style={styles.idType2}>Back</Text>
      </View>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
        }}>
        Before you Try Again, Please be Sure to:
      </Text>
      <View style={styles.ruleBox}>
        <View style={styles.ruleContainer}>
          <Ionicons
            name="checkmark-circle-outline"
            color={'#379A35'}
            size={24}
          />
          <Text style={styles.rule}>
            Check yor ID Photo and Details aren’t Covered.
          </Text>
        </View>
        <View style={styles.ruleContainer}>
          <Ionicons
            name="checkmark-circle-outline"
            color={'#379A35'}
            size={24}
          />
          <Text style={styles.rule}>
            Check yor ID Photo and Details aren’t Covered.
          </Text>
        </View>
      </View>
      <Button
        title="Try Again"
        value={1}
        navigation={navigation}
        path="Loading"
      />
    </View>
  );
};

// const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: responsiveHeight(4),
  },
  title: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'Poppins-SemiBold',

    textAlign: 'center',
  },
  idType: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins-SemiBold',

    color: '#313030',
  },
  idType2: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins-SemiBold',

    color: '#379A35',
  },
  idType3: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins-SemiBold',
    color: '#313030',
  },
  nation: {
    fontSize: responsiveFontSize(1.4),
    color: '#575454',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  screenNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: responsiveWidth(10),
  },
  rule: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Poppins-SemiBold',

    color: '#313030',
  },
  ruleBox: {
    display: 'flex',
    gap: responsiveHeight(2),
  },
  ruleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2),
    backgroundColor: '#E8E5E5',
    borderRadius: 10,
    // width: responsiveWidth(84),
    padding: 10,
  },
});

export default BackErrorScreen;
