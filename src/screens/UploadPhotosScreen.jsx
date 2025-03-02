import React, {useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ImageUpload from '../components/ImageUpload';
import {images} from '../../assets/data/data';
import Button from '../components/Button';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import PhotoGuidelines from '../components/PhotoGuidelines';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const UploadPhotosScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.open();
  };

  const closeDrawer = () => {
    drawerRef.current.close();
  };

  return (
    <Drawer
      ref={drawerRef}
      type="overlay"
      content={<PhotoGuidelines closeDrawer={closeDrawer} />}
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
          <Text style={styles.subTitle}>
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
          id="images.img1"
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
    padding: responsiveHeight(4),
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: responsiveFontSize(1.8),
    textAlign: 'center',
    color: 'gray',
  },
  allImages: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: responsiveWidth(3),
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
});

const drawerStyles = {
  drawer: {shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 3},
};

export default UploadPhotosScreen;
