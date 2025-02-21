import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import MainText from '../components/MainText';
import Button from '../components/Button';

const WarningsScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer currentPage={currentPage} navigation={navigation} />
        <MainText
          text1="Confirm your Identity!"
          text2="To do this, We’ll Need the Following Information"
        />
        <View style={styles.textContainerBox}>
          <View style={styles.textContainer}>
            <Text style={styles.textNumber}>1</Text>
            <Text style={styles.text}>A Photo of your ID Document</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textNumber}>2</Text>
            <Text style={styles.text}>A Quick Scan of your Face.</Text>
          </View>
        </View>
      </View>
      <Button
        title="Get Started"
        value={1}
        navigation={navigation}
        path="VerificationOption"
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
    padding: 30,
  },
  mainContainer: {
    display: 'flex',
    gap: 20,
  },
  textContainerBox: {
    display: 'flex',
    gap: 20,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textNumber: {
    color: '#ffffff',
    backgroundColor: '#379A35',
    padding: 5,
    borderRadius: 100,
    textAlign: 'center',
    width: 40,
    fontSize: 20,
    fontWeight: 600,
  },
  text: {
    fontSize: 18,
    fontWeight: 600,
    color: '#313030',
  },
});

export default WarningsScreen;
