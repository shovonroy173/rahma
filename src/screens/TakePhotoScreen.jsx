import {View, Text, StyleSheet} from 'react-native';
import React, { useContext } from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Warning from '../components/Warning';
import {warnings} from '../../assets/data/data';
import CommonWarning from '../components/CommonWarning';
import Button from '../components/Button';
import { ThemeContext } from '../context/DarkThemeContext';
// import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

const TakePhotoScreen = ({navigation}) => {
  // const device = useCameraDevice('back');
  // const { hasPermission } = useCameraPermission();
  // if (!hasPermission) return console.log('not permited');
  // if (device == null) return console.log('no device');
  const currentPage = useSelector(state => state.page.currentPage);
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <ProgressContainer currentPage={currentPage} navigation={navigation} />
      <Text style={styles.title}>
      Let’s Make Sure you
are the Person in this
Photo.
      </Text>
      {warnings.map(item => (
        <Warning key={item.id} title={item.title} icon={item.icon} />
      ))}
      <CommonWarning
        title="If you have Any Short of Visual or
 Motor Impairment you might Need Some Assistance"
      />
      <Button title="Take Photo" value={1} navigation={navigation} path="TakeFrontPhoto" />
      {/* <Camera
      // style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    /> */}
    </View>
  );
};

const getStyles = (theme)=> StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme === 'dark' ? '#333333' : '#E8E5E5',
    padding: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
    color: theme === 'dark' ? '#ffffff' : '#000000',

  },
});

export default TakePhotoScreen;
