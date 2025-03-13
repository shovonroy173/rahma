import React, {useContext, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  Text,
} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {Controller, useFormContext} from 'react-hook-form';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const ImageUpload = ({name}) => {
  const {control, watch} = useFormContext();
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentOnChange, setCurrentOnChange] = useState(null);
  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.3,
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else {
        console.log(response.assets[0]?.uri);
        setCurrentOnChange(response.assets[0]?.uri);
      }
    });
    setAlertVisible(false);
  };

  const openGallery = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.3,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else {
        console.log(response.assets[0]?.uri);
        setCurrentOnChange(response.assets[0]?.uri);
      }
    });
    setAlertVisible(false);
  };
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <>
      {/* <Controller
        name={name}
        control={control}
        render={({field: {onChange}}) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setCurrentOnChange(() => onChange);
              setAlertVisible(true);
            }}>
            {watch(name) ? (
              <Image source={{uri: watch(name)}} style={styles.image} />
            ) : (
              <View style={styles.uploadButton}>
                <Icon name="plus" size={24} color={'#43A041'} />
              </View>
            )}
          </TouchableOpacity>
        )}
      /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // setCurrentOnChange(() => onChange);
          setAlertVisible(true);
        }}>
        {currentOnChange ? (
          <Image source={{uri: currentOnChange}} style={styles.image} />
        ) : (
          <View style={styles.uploadButton}>
            <Icon name="plus" size={24} color={'#43A041'} />
          </View>
        )}
      </TouchableOpacity>
      <Modal
        transparent
        visible={alertVisible}
        animationType="fade"
        onRequestClose={() => setAlertVisible(false)}>
        <View style={styles.overlay}>
          <View style={styles.alertBox}>
            <Text style={styles.title}>Upload Photo</Text>
            <Text style={styles.message}>Choose an option</Text>

            <TouchableOpacity style={styles.optionButton} onPress={openCamera}>
              <Text style={styles.optionText}>📷 Open Front Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionButton} onPress={openGallery}>
              <Text style={styles.optionText}>🖼 Choose from Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setAlertVisible(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const getStyles = theme =>
  StyleSheet.create({
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
      borderColor: theme === 'dark' ? '#2C6A2F' : '#43A041',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    alertBox: {
      width: 300,
      backgroundColor: theme === 'dark' ? '#27272a' : '#ffffff',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      fontFamily: 'Poppins-SemiBold',
      marginBottom: 10,
      color: theme === 'dark' ? '#ffffff' : '#333333',
    },
    message: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 20,
      color: theme === 'dark' ? ' #ccc' : '#666',
    },
    optionButton: {
      width: '100%',
      padding: 12,
      borderRadius: 5,
      backgroundColor: theme === 'dark' ? '#1f6fa3' : '#3498db',
      marginVertical: 5,
      alignItems: 'center',
    },
    optionText: {
      color: theme === 'dark' ? '#27272a' : '#ffffff',

      fontSize: 16,
    },
    cancelButton: {
      marginTop: 10,
    },
    cancelText: {
      color: theme === 'dark' ? '#d45d5d' : '#e74c3c',
      fontSize: 16,
    },
  });

export default ImageUpload;

// import {
//   View,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Alert,
//   // Platform,
// } from 'react-native';
// import React, {useState} from 'react';
// import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
// import {Controller, useFormContext} from 'react-hook-form';
// import Icon from 'react-native-vector-icons/AntDesign';
// // import {AppState} from 'react-native';
// import {validationRules} from '../utils/validation';
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
// // import ImagePicker from 'react-native-image-crop-picker';
// // import {
// //   request,
// //   check,
// //   requestMultiple,
// //   PERMISSIONS,
// //   RESULTS,
// // } from 'react-native-permissions';

// const ImageUpload = ({name}) => {
//   const {control, watch} = useFormContext();
//   // const [formData, setFormData] = useState();

//   // console.log(formData);

//   // const requestCameraPermission = async () => {
//   //   const cameraPermission =
//   //     Platform.OS === 'android' ? PERMISSIONS.ANDROID.CAMERA : PERMISSIONS.IOS.CAMERA;
//   //   const storagePermission = PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;

//   //   try {
//   //     if (Platform.OS === 'android') {
//   //       const statuses = await requestMultiple([cameraPermission, storagePermission]);
//   //       if (statuses[cameraPermission] === RESULTS.GRANTED) {
//   //         openCamera();
//   //       } else {
//   //         Alert.alert('Permission Denied', 'Camera access is required to take photos.');
//   //       }
//   //     } else {
//   //       const status = await request(cameraPermission);
//   //       if (status === RESULTS.GRANTED) {
//   //         openCamera();
//   //       } else {
//   //         Alert.alert('Permission Denied', 'Camera access is required to take photos.');
//   //       }
//   //     }
//   //   } catch (error) {
//   //     console.log('Permission error:', error);
//   //   }
//   // };
//   // const requestCameraPermission = async () => {
//   //   if (Platform.OS === 'android') {
//   //     const result = await request(PERMISSIONS.ANDROID.CAMERA);
//   //     if (result === RESULTS.GRANTED) {
//   //       openCamera();
//   //     } else {
//   //       Alert.alert('Permission Denied', 'Camera access is required.');
//   //     }
//   //   } else {
//   //     openCamera(); // iOS handles permissions internally
//   //   }
//   // };
//   const openCamera = async onChange => {
//     console.log('camera');

//     const options = {
//       mediaType: 'photo',
//       // includeBase64: false,
//       // maxHeight: 2000,
//       // maxWidth: 2000,
//       // saveToPhotos: true,
//     };

//  await  launchCamera(options, response => {
//       console.log(response);

//       if (response.didCancel) {
//         console.log('User cancelled camera', response);
//       } else if (response.errorCode) {
//         console.log('Camera Error:', response, response.errorMessage);
//       } else {
//         const selectedImage = response.assets[0]?.uri;
//         // setFormData(prev => ({
//         //   ...prev,
//         //   image: selectedImage,
//         // }));
//         onChange(selectedImage);
//       }
//     });

//     // try {
//     //   await ImagePicker.openCamera({
//     //     width: 300,
//     //     height: 400,
//     //     // cropping: true,
//     //   }).then(image => {
//     //     console.log(image);
//     //     // const imgPath = image?.path;
//     //     onChange(image);
//     //     setFormData(image);
//     //   });
//     // } catch (error) {
//     //   console.log(error);
//     // }
//   };
//   // console.log('image path', formData);

//   // const openCamera = onChange => {
//   //   const options = {
//   //     mediaType: 'photo',
//   //     includeBase64: false,
//   //     maxHeight: 2000,
//   //     maxWidth: 2000,
//   //     saveToPhotos: true,
//   //   };

//   //   const handleAppStateChange = nextAppState => {
//   //     if (nextAppState === 'active') {
//   //       launchCamera(options, response => {
//   //         if (response.didCancel) {
//   //           console.log('User cancelled camera');
//   //         } else if (response.errorCode) {
//   //           console.log('Camera Error:', response.errorMessage);
//   //         } else {
//   //           let imageUri = response.assets?.[0]?.uri;
//   //           onChange(imageUri);
//   //         }
//   //       });
//   //     }
//   //   };

//   //   AppState.addEventListener('change', handleAppStateChange);
//   //   launchCamera(options);

//   //   // Cleanup when camera is opened
//   //   return () => {
//   //     AppState.removeEventListener('change', handleAppStateChange);
//   //   };
//   // };

//   const openGallery = onChange => {
//     const options = {
//     mediaType: 'photo',
//       includeBase64: false,
//       maxHeight: 2000,
//       maxWidth: 2000,
//     };

//     launchImageLibrary(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled gallery');
//       } else if (response.errorCode) {
//         console.log('Gallery Error:', response.errorMessage);
//       } else {
//         const selectedImage = response.assets[0]?.uri;
//         // setFormData(prev => ({
//         //   ...prev,
//         //   image: selectedImage,
//         // }));
//         console.log(selectedImage);
//         onChange(selectedImage);
//       }
//     });
//   };

//   return (
//     <Controller
//       name={name}
//       control={control}
//       rules={validationRules[name]}
//         render={({field: {onChange}}) => (
//           // <View>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//               Alert.alert('Upload Photo', 'Choose an option', [
//                 {text: 'Take Photo', onPress: () => openCamera(onChange)},
//                 {
//                   text: 'Choose from Gallery',
//                   onPress: () => openGallery(onChange),
//                 },
//                 {text: 'Cancel', style: 'cancel'},
//               ]);
//             }}>
//             {
//             // watch(name) ?
//             //  (
//             //   <Image source={{uri: watch(name)?.path}} style={styles.image} />
//             // )
//             //  :
//               (
//               <View style={styles.uploadButton}>
//                 <Icon name="plus" size={24} color={'#43A041'} />
//               </View>
//             )
//             }
//           </TouchableOpacity>
//           // </View>
//         )}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     width: responsiveWidth(25),
//     height: responsiveHeight(18),
//     objectFit: 'cover',
//   },
//   uploadButton: {
//     width: responsiveWidth(25),
//     height: responsiveHeight(18),
//     borderStyle: 'dashed',
//     borderWidth: 2,
//     borderColor: '#43A041',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default ImageUpload;
