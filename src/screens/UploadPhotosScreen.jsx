import React, {useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ImageUpload from '../components/ImageUpload';
import {images, rightImages, wrongImages} from '../../assets/data/data';
import Button from '../components/Button';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// import axios from 'axios';

const DrawerContent = ({closeDrawer, navigation}) => (
  <View style={[styles.drawerContainer, styles.shadowProp]}>
    <View style={styles.drawerTextContainer}>
      <View>
        <Text>Use High-Quality Photos</Text>
        <View style={styles.drawerContentContainer}>
          {rightImages?.map(item => (
            <View style={styles.rightContent} key={item.id}>
              <Image source={item.img} style={styles.image} />
              <View>
                <Text style={styles.text}>{item.desc}</Text>
                {/* <Text style={styles.text}>Yourself</Text> */}
              </View>
              <SimpleLineIcons
                name="check"
                size={30}
                color={'#57A655'}
                style={styles.icon}
              />
            </View>
          ))}
        </View>
      </View>
      <View>
        <Text>Avoid these Mistakes</Text>
        <View style={styles.drawerContentContainer}>
          {wrongImages?.map(item => (
            <View style={styles.rightContent} key={item.id}>
              <Image source={item?.img} style={styles.image} />
              <View>
                <Text style={styles.text}>{item.desc}</Text>
                {/* <Text style={styles.text}>Yourself</Text> */}
              </View>
              <SimpleLineIcons
                name="close"
                size={24}
                color={'red'}
                style={styles.icon}
              />
            </View>
          ))}
        </View>
      </View>
    </View>

    <Button
      title="Add Photos"
      value={1}
      navigation={navigation}
      path="UploadPhotos"
    />
  </View>
);

const UploadPhotosScreen = ({navigation}) => {
  // const [image, setImage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const currentPage = useSelector(state => state.page.currentPage);
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.open();
  };

  const closeDrawer = () => {
    drawerRef.current.close();
  };

  // Function to Pick Image

  // const captureImage = () => {
  //   console.log('select image');

  //   const options = {
  //     mediaType: 'photo',
  //     includeBase64: false,
  //     maxHeight: 2000,
  //     maxWidth: 2000,
  //   };

  //   launchCamera(options, response => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('Image picker error: ', response.error);
  //     } else {
  //       let imageUri = response.uri || response.assets?.[0]?.uri;
  //       setImage(imageUri);
  //     }
  //   });
  // };

  // Function to Upload Image
  // const uploadImage = async () => {
  //   if (!image) return alert('Please select an image first');
  //   setLoading(true);

  //   console.log('imsge');
  // };

  return (
    <Drawer
      ref={drawerRef}
      type="overlay"
      content={
        <DrawerContent closeDrawer={closeDrawer} navigation={navigation} />
      }
      tapToClose={true}
      openDrawerOffset={0.4}
      panCloseMask={0.4}
      closedDrawerOffset={-3}
      styles={drawerStyles}
      side="bottom"
      onClose={closeDrawer}>
      <View style={styles.container}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <View>
          <Text style={styles.title}>Upload your Photos</Text>
          <Text>
            You Need to Upload at Least 3 Photos to Continue Completing your
            Profile. You can change them later.
          </Text>
        </View>
        <View style={styles.allImages}>
          {images.map(item => (
            <ImageUpload key={item.id} name={`images.${item.title}`} />
          ))}
          <TouchableOpacity onPress={openDrawer} style={styles.guidelineButton}>
            <Icon name="plus" size={24} color={'#43A041'} />

            <Text style={styles.guidelineText}>Photo</Text>
            <Text style={styles.guidelineText}>Guidelines</Text>
          </TouchableOpacity>
        </View>

        <Button
          title="Continue"
          navigation={navigation}
          path="SelfieVerify"
          id="images"
        />
      </View>
    </Drawer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  allImages: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    alignItems: 'center',
  },
  button: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -60}, // Negative height for top shadow
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 20, // Required for Android
  },

  drawerTextContainer: {display: 'flex', gap: 30, borderBottomStartRadius: 20},
  drawerText1: {
    fontSize: 30,
    color: '#111111',
    fontWeight: 600,
    textAlign: 'center',
  },

  drawerText2: {
    fontSize: 20,
    color: '#313030',
    fontWeight: 600,
  },
  guidelineButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  guidelineText: {
    color: '#43A041',
    fontSize: 20,
  },
  rightContent: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#57A655',
    padding: 10,
    borderRadius: 10,
    gap: 10,
    position: 'relative',
  },
  image: {
    width: 120,
    height: 70,
    objectFit: 'cover',
    borderRadius: 10,
  },
  icon: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  drawerContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 20,
  },
});

const drawerStyles = {
  drawer: {shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 3},
};

export default UploadPhotosScreen;
