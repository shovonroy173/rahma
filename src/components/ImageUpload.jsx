import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {Controller, useFormContext} from 'react-hook-form';
import Icon from 'react-native-vector-icons/AntDesign';
import {validationRules} from '../utils/validation';

const ImageUpload = ({name}) => {
  const [image, setImage] = useState();
  const {control, watch} = useFormContext();
  console.log('watch at 9', name, watch(name), validationRules[name]);

  return (
    <Controller
      name={name}
      control={control}
      rules={validationRules[name]}
      render={({field: {onChange, onBlur, value}}) => (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('select image');

            const options = {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 2000,
              maxWidth: 2000,
            };

            launchImageLibrary(options, response => {
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('Image picker error: ', response.error);
              } else {
                console.log(response, response.uri, response.assets?.[0]?.uri);
                let imageUri = response.uri || response.assets?.[0]?.uri;
                onChange(imageUri);
                setImage(imageUri);
              }
            });
          }}>
          {watch(name) !== undefined ? (
            <Image source={{uri: image}} style={styles.image} />
          ) : (
            <View style={styles.uploadButton}>
              <Icon name="plus" size={24} color={'#43A041'} />
            </View>
          )}
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 150,
    objectFit: 'cover',
  },
  //   buttonText: {
  //     color: '#fff',
  //     fontSize: 16,
  //   },
  uploadButton: {
    width: 110,
    height: 150,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#43A041',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ImageUpload;
