import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  Text,
} from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { Controller, useFormContext } from 'react-hook-form';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ImageUpload = ({ name }) => {
  const { control, watch } = useFormContext();
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentOnChange, setCurrentOnChange] = useState(null);
  const openCamera = () => {
    const options = { mediaType: 'photo' };
    launchCamera(options, response => {
      if (!response.didCancel && !response.errorCode) {
        currentOnChange && currentOnChange(response.assets[0]?.uri);
      }
    });
    setAlertVisible(false);
  };

  const openGallery = () => {
    const options = { mediaType: 'photo' };
    launchImageLibrary(options, response => {
      if (!response.didCancel && !response.errorCode) {
        currentOnChange && currentOnChange(response.assets[0]?.uri);
      }
    });
    setAlertVisible(false);
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setCurrentOnChange(() => onChange);
              setAlertVisible(true);
            }}
          >
            {watch(name) ? (
              <Image source={{ uri: watch(name) }} style={styles.image} />
            ) : (
              <View style={styles.uploadButton}>
                <Icon name="plus" size={24} color={'#43A041'} />
              </View>
            )}
          </TouchableOpacity>
        )}
      />

      {/* Custom Alert Modal */}
      <Modal
        transparent
        visible={alertVisible}
        animationType="fade"
        onRequestClose={() => setAlertVisible(false)}
      >
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

            <TouchableOpacity style={styles.cancelButton} onPress={() => setAlertVisible(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  optionButton: {
    width: '100%',
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#3498db',
    marginVertical: 5,
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 10,
  },
  cancelText: {
    color: '#e74c3c',
    fontSize: 16,
  },
});

export default ImageUpload;
