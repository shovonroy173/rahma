import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {Controller, useFormContext} from 'react-hook-form';

const ImageUpload = ({name}) => {
  const [image, setImage] = useState();
  const {control, watch} = useFormContext();
  console.log('watch', watch(name));
  console.log('image array', image);

  const pickImage = () => {
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
        setImage(imageUri);
      }
    });
  };
  return (
    <Controller
      name={name}
      control={control}
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
          {/* {
          image ? (
            <Image source={{uri: image}} style={styles.image} />
          ) : 
          ( */}
            <Text style={styles.buttonText}>Choose from Gallery</Text>

          {/* )} */}
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  //   buttonText: {
  //     color: '#fff',
  //     fontSize: 16,
  //   },
});

export default ImageUpload;
