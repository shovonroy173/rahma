import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  Text,
  ActivityIndicator,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Controller, useFormContext} from 'react-hook-form';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

const ImageUpload = ({name}) => {
  const {control} = useFormContext();
  const [alertVisible, setAlertVisible] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [currentOnChange, setCurrentOnChange] = useState(null);
  const cameraRef = useRef(null);
  const [photoPath, setPhotoPath] = useState(null);
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    (async () => {
      const cameraPermissionStatus = await Camera.requestCameraPermission();
      if (cameraPermissionStatus !== 'granted') {
        console.log('Camera permission denied');
      }
    })();
  }, []);

  const device = useCameraDevice('front');

  const openCamera = () => {
    setIsCameraActive(true);
    setAlertVisible(false);
  };

  const closeCamera = () => {
    setIsCameraActive(false);
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
        setPhotoPath(response.assets[0]?.uri);
        currentOnChange && currentOnChange(response.assets[0]?.uri);
      }
    });
    setAlertVisible(false);
  };

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePhoto();
        setPhotoPath(`file://${photo.path}`);
        currentOnChange && currentOnChange(`file://${photo.path}`);
        setIsCameraActive(false);
      } catch (error) {
        console.log('Error taking photo:', error);
      }
    }
  };

  const styles = getStyles(theme);
  console.log(photoPath);

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange}}) => (
          <TouchableOpacity
            onPress={() => {
              setCurrentOnChange(() => onChange);
              setAlertVisible(true);
            }}>
            {photoPath ? (
              <Image source={{uri: photoPath}} style={styles.image} />
            ) : (
              <View style={styles.uploadButton}>
                <Icon name="plus" size={24} color={'#43A041'} />
              </View>
            )}
          </TouchableOpacity>
        )}
      />

      {/* Camera Full-Screen Modal */}
      <Modal visible={isCameraActive} animationType="slide" transparent={false}>
        <View style={styles.cameraContainer}>
          {device ? (
            <Camera
              style={StyleSheet.absoluteFill}
              ref={cameraRef}
              device={device}
              isActive={isCameraActive}
              photo={true}
            />
          ) : (
            <ActivityIndicator size="large" color="#1C6758" />
          )}

          {/* Capture Button */}
          <TouchableOpacity
            style={styles.captureButton}
            onPress={handleTakePhoto}>
            <Text style={styles.captureButtonText}>📸</Text>
          </TouchableOpacity>

          {/* Close Camera */}
          <TouchableOpacity style={styles.closeButton} onPress={closeCamera}>
            <Text style={styles.closeButtonText}>❌</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Gallery & Camera Selection Modal */}
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
    cameraContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
    },
    captureButton: {
      position: 'absolute',
      bottom: 50,
      width: 100,
      height: 100,
      backgroundColor: '#43A041',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    captureButtonText: {
      color: '#fff',
      fontSize: 25,
    },
    closeButton: {
      position: 'absolute',
      top: 50,
      right: 20,
      backgroundColor: '#e74c3c',
      padding: 10,
      borderRadius: 10,
    },
    closeButtonText: {
      color: '#fff',
      fontSize: 16,
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
      color: '#ffffff',
      fontSize: 16,
    },
    cancelButton: {
      marginTop: 10,
    },
    cancelText: {
      color: theme === 'dark' ? '#d45d5d' : '#e74c3c',
      fontSize: 16,
    },
    image: {
      width: responsiveWidth(25),
      height: responsiveHeight(18),
      objectFit: 'cover',
    },
  });

export default ImageUpload;
