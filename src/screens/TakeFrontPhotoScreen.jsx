import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import CommonWarning from '../components/CommonWarning';
import Button from '../components/Button';
import {ThemeContext} from '../context/DarkThemeContext';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {Image} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Controller, useFormContext} from 'react-hook-form';
// import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

const TakeFrontPhotoScreen = ({navigation}) => {
  // const device = useCameraDevice('back');
  // const { hasPermission } = useCameraPermission();
  // if (!hasPermission) return console.log('not permited');
  // if (device == null) return console.log('no device');
  const {control} = useFormContext();

  const currentPage = useSelector(state => state.page.currentPage);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  const camera = useRef(null);
  const [cameraPermission, setCameraPermission] = useState();
  const [photoPath, setPhotoPath] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermissionStatus = await Camera.requestCameraPermission();
      setCameraPermission(cameraPermissionStatus);
    })();
  }, []);

  const device = useCameraDevice('back');
  // console.log('LINE AT 51', device, camera);

  const handleTakePhoto = async onChange => {
    if (photoPath) {
      setPhotoPath(null);
    }
    try {
      const photo = await camera.current.takePhoto({
        // flash: 'on',
      });
      setPhotoPath(photo?.path);
      console.log(photo?.path);
      onChange(photo?.path);
    } catch (e) {
      console.log(e);
    }
  };

  const renderContent = () => {
    if (cameraPermission !== 'granted') {
      return null;
    }
    if (device == null) {
      return <ActivityIndicator size="large" color="#1C6758" />;
    }

    return (
      <View style={styles.container2}>
        {photoPath ? (
          <Image style={styles.camera} source={{uri: 'file://' + photoPath}} />
        ) : (
          <Camera
            style={styles.camera}
            ref={camera}
            device={device}
            photo={true}
            isActive={true}
          />
        )}
        <Controller
          name="confirm2"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TouchableOpacity
              title="Camera"
              onPress={() => {
                handleTakePhoto(onChange);
              }}
              style={styles.button}
            />
          )}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ProgressContainer currentPage={currentPage} navigation={navigation} />
      <Text style={styles.title}>
        Let’s Make Sure you are the Person in this Photo.
      </Text>
      {renderContent()}

      <CommonWarning
        title="If you have Any Short of Visual or
 Motor Impairment you might Need Some Assistance"
      />
      <Button
        title="Confirm Photo"
        navigation={navigation}
        path="ConfirmFrontPhoto"
      />
      {/* <Camera
      // style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    /> */}
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      padding: 30,
    },
    title: {
      fontSize: responsiveFontSize(3),
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      color: theme === 'dark' ? '#d1d5db' : '#000000',
    },
    container2: {
      // flex: 1,
      height: responsiveHeight(25),
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
    },
    camera: {
      width: responsiveWidth(80),
      height: responsiveHeight(25),
      objectFit: 'cover',
      borderRadius: 20,
    },

    button: {
      position: 'relative',
      top: -70,
      left: 0,
      width: responsiveWidth(13),
      height: responsiveWidth(13),
      borderRadius: 100,
      backgroundColor: '#4ade80',
    },
  });

export default TakeFrontPhotoScreen;
