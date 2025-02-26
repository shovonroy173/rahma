import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import ProgressContainer from '../components/ProgressContainer';
import Button from '../components/Button';
import BottomInput from '../components/BottomInput';
import {Text} from '@rneui/base';
import SubText from '../components/SubText';

const SalaryScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.textContainer}>
          <ProgressContainer
            currentPage={currentPage}
            navigation={navigation}
          />
          <View>
            <Text style={styles.titleText}>Select Your</Text>
            <Text style={styles.titleText}>Salary Range</Text>
          </View>
        </View>
        <View>
          <BottomInput name="salary"  />
          <SubText navigation={navigation} />
        </View>
      </View>
      <Button title="Continue" navigation={navigation} path="UploadPhotos" id="salary" />
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
    padding: 30,
  },
  inputContainer: {
    gap: 40,
  },
  textContainer: {
    gap: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
  },
});

export default SalaryScreen;
