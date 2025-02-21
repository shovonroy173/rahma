import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Skeleton} from '@rneui/themed';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
const LoadingScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  return (
    <View style={styles.container}>
      {/* <Text>Loading Screen</Text> */}
      <View style={styles.mainContainer}>
        {/* <Stack row align="center" spacing={4}> */}
        <ProgressContainer currentPage={currentPage} navigation={navigation} />
        <Skeleton
          animation="wave"
          width={'100%'}
          height={40}
          skeletonStyle={styles.skeleton}
        />{' '}
        <Skeleton animation="wave" width={'100%'} height={20} />
        <Skeleton animation="wave" width={'100%'} height={60} />
        <Skeleton animation="wave" width={'100%'} height={20} />
      </View>
      <Button
        title="Ok, Got It"
        value={1}
        navigation={navigation}
        path="VerificationDone"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  mainContainer: {
    display: 'flex',
    gap: 20,
  },
});

export default LoadingScreen;
