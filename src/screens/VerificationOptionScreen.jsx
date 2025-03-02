import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {options} from '../../assets/data/data';
import Option from '../components/Option';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const VerificationOptionScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <View style={styles.container}>
      <View>
        <ProgressContainer currentPage={currentPage} navigation={navigation} />
        <Text style={styles.title}>
          Select the Type Of ID Document you Want to Add
        </Text>
        <View style={styles.mainContainer}>
          <Text style={styles.text}>Issuing Country</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text2}>Bangladesh</Text>
            <Text style={styles.footerText}>Change</Text>
          </View>
          <View style={styles.divider} />
          <Text style={styles.text}>Accepted Documents:</Text>
          {options.map((item, index) => (
            <Option key={index} item={item} index={index} id="idType" />
          ))}
          <Text style={styles.footerText}>More about Verification</Text>
        </View>
      </View>
      <Button
        title="Submit"
        value={1}
        navigation={navigation}
        path="TakePhoto"
        id="idType"
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
  mainContainer: {
    display: 'flex',
    gap: responsiveHeight(2),
  },
  divider: {
    height: 1,
    backgroundColor: 'black',
  },
  title: {
    fontSize: responsiveFontSize(3),
    fontWeight: 600,
    textAlign: 'center',
  },
  text: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 600,
  },
  text2: {
    fontSize: responsiveFontSize(1.8),
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  footerText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 600,
    color: '#379A35',
  },
});

export default VerificationOptionScreen;
