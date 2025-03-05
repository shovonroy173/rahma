import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import React from 'react';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {Controller, useFormContext} from 'react-hook-form';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppState} from 'react-native';
import {validationRules} from '../utils/validation';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  request,
  check,
  requestMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';

const ImageUpload = ({name}) => {
  const {control, watch} = useFormContext();

  // const requestCameraPermission = async (onChange) => {
  //   const cameraPermission =
  //     Platform.OS === 'android' ? PERMISSIONS.ANDROID.CAMERA : PERMISSIONS.IOS.CAMERA;
  //   const storagePermission = PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;

  //   try {
  //     if (Platform.OS === 'android') {
  //       const statuses = await requestMultiple([cameraPermission, storagePermission]);
  //       if (statuses[cameraPermission] === RESULTS.GRANTED) {
  //         openCamera(onChange);
  //       } else {
  //         Alert.alert('Permission Denied', 'Camera access is required to take photos.');
  //       }
  //     } else {
  //       const status = await request(cameraPermission);
  //       if (status === RESULTS.GRANTED) {
  //         openCamera(onChange);
  //       } else {
  //         Alert.alert('Permission Denied', 'Camera access is required to take photos.');
  //       }
  //     }
  //   } catch (error) {
  //     console.log('Permission error:', error);
  //   }
  // };

  // const openCamera = onChange => {
  //   const options = {
  //     mediaType: 'photo',
  //     includeBase64: false,
  //     maxHeight: 2000,
  //     maxWidth: 2000,
  //     saveToPhotos: true,
  //   };

  //   launchCamera(options, response => {
  //     console.log(response);

  //     if (response.didCancel) {
  //       console.log('User cancelled camera', response);
  //     } else if (response.errorCode) {
  //       console.log('Camera Error:', response.errorMessage);
  //     } else {
  //       let imageUri = response.assets?.[0]?.uri;
  //       onChange(imageUri);
  //     }
  //   });
  // };

  // const openCamera = onChange => {
  //   const options = {
  //     mediaType: 'photo',
  //     includeBase64: false,
  //     maxHeight: 2000,
  //     maxWidth: 2000,
  //     saveToPhotos: true,
  //   };

  //   const handleAppStateChange = nextAppState => {
  //     if (nextAppState === 'active') {
  //       launchCamera(options, response => {
  //         if (response.didCancel) {
  //           console.log('User cancelled camera');
  //         } else if (response.errorCode) {
  //           console.log('Camera Error:', response.errorMessage);
  //         } else {
  //           let imageUri = response.assets?.[0]?.uri;
  //           onChange(imageUri);
  //         }
  //       });
  //     }
  //   };

  //   AppState.addEventListener('change', handleAppStateChange);
  //   launchCamera(options);

  //   // Cleanup when camera is opened
  //   return () => {
  //     AppState.removeEventListener('change', handleAppStateChange);
  //   };
  // };

  const openGallery = onChange => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled gallery');
      } else if (response.errorCode) {
        console.log('Gallery Error:', response.errorMessage);
      } else {
        let imageUri = response.assets?.[0]?.uri;
        onChange(imageUri);
      }
    });
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={validationRules[name]}
      render={({field: {onChange}}) => (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Alert.alert('Upload Photo', 'Choose an option', [
                // {text: 'Take Photo', onPress: () => openCamera(onChange)},
                {
                  text: 'Choose from Gallery',
                  onPress: () => openGallery(onChange),
                },
                {text: 'Cancel', style: 'cancel'},
              ]);
            }}>
            {watch(name) ? (
              <Image source={{uri: watch(name)}} style={styles.image} />
            ) : (
              <View style={styles.uploadButton}>
                <Icon name="plus" size={24} color={'#43A041'} />
              </View>
            )}
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: responsiveWidth(25),
    height: responsiveHeight(18),
    objectFit: 'cover',
  },
  uploadButton: {
    width: responsiveWidth(25),
    height: responsiveHeight(18),
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#43A041',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ImageUpload;
