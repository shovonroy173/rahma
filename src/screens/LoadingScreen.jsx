import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {Skeleton} from '@rneui/themed';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {ThemeContext} from '../context/DarkThemeContext';
const LoadingScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      {/* <Text>Loading Screen</Text> */}
      <View style={styles.mainContainer}>
        {/* <Stack row align="center" spacing={4}> */}
        <ProgressContainer currentPage={currentPage} navigation={navigation} />
        <Skeleton
          animation="wave"
          width="100%"
          height={40}
          skeletonStyle={styles.skeleton}
        />{' '}
        <Skeleton
          animation="wave"
          width="100%"
          height={20}
          skeletonStyle={styles.skeleton}
        />
        <Skeleton
          animation="wave"
          width="100%"
          height={60}
          skeletonStyle={styles.skeleton}
        />
        <Skeleton
          animation="wave"
          width="100%"
          height={20}
          skeletonStyle={styles.skeleton}
        />
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

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      // alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      padding: 30,
    },
    mainContainer: {
      display: 'flex',
      gap: 20,
    },
    skeleton: {
      backgroundColor: theme === 'dark' ? '#111827' : '#9ca3af',
    },
  });

export default LoadingScreen;
