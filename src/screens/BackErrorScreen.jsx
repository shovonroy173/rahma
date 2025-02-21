import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import ErrorImage from '../components/ErrorImage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';

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
        {/* <Text>Front</Text> */}
        <Text>Back</Text>
      </View>
      <Text>Before you Try Again, Please be Sure to:</Text>
      <View style={styles.ruleBox}>
        <View style={styles.ruleContainer}>
          <Ionicons
            name="checkmark-circle-outline"
            color={'#379A35'}
            size={24}
          />
          <Text style={styles.rule}>
            We Continuously Verify all Accounts on Our Apps.Your Account Cold be
            Deactivated Any Time, If Suspicious Activity is Detected.
          </Text>
        </View>
        <View style={styles.ruleContainer}>
          <Ionicons
            name="checkmark-circle-outline"
            color={'#379A35'}
            size={24}
          />
          <Text style={styles.rule}>
            We Continuously Verify all Accounts on Our Apps.Your Account Cold be
            Deactivated Any Time, If Suspicious Activity is Detected.
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 600,
    textAlign: 'center',
  },
  idType: {
    fontSize: 18,
    fontWeight: 600,
    color: '#313030',
  },
  nation: {
    fontSize: 14,
    color: '#575454',
    textAlign: 'center',
  },
  screenNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 40,
  },
  rule: {
    fontSize: 18,
    fontWeight: 600,
    color: '#313030',
  },
  ruleBox: {
    display: 'flex',
    gap: 25,
    paddingHorizontal: 20,
  },
  ruleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});

export default BackErrorScreen;
