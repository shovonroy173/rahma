import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';

const FinishScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.title2}>
          Rahma is a Halal Community of Muslims, from Across the World.
        </Text>
        <Text style={styles.title2}>
          Please Adhere to Sensible Islamic Etiquette and Follow our Guidelines.
        </Text>
        <Text style={styles.text3}>
          Inappropiate Behavior will result in your Account being Permanently
          Blacked.
        </Text>
      </View>
      <Button
        title="Accept & Finish"
        navigation={navigation}
        path="BottomNavigator"
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
    gap: 40,
  },
  text3: {
    fontSize: 16,
    fontWeight: 600,
    paddingHorizontal: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 600,
    textAlign: 'center',
  },
  title2: {
    fontSize: 16,
  },
});

export default FinishScreen;
