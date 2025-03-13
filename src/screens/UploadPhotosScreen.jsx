/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useRef} from 'react';
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
import {ThemeContext} from '../context/DarkThemeContext';

const UploadPhotosScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.open();
  };

  const closeDrawer = () => {
    drawerRef.current.close();
  };
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

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
            You Need to Upload at Least
            <Text
              style={{
                color: '#379A35',
                fontSize: responsiveFontSize(2),
                fontFamily: 'Poppins-SemiBold',
              }}>
              3 Photos
            </Text>
            to Continue Completing your Profile. You can change them later.
          </Text>
        </View>
        <View style={styles.allImages}>
          {images.map(item => (
            <ImageUpload key={item.id} name={`images.${item.title}`} />
          ))}
          <TouchableOpacity onPress={openDrawer} style={styles.guidelineButton}>
            <Icon name="plus" size={24} color={theme === 'dark' ? '#2C6A2F' : '#43A041'} />

            <Text style={styles.guidelineText}>Photo</Text>
            <Text style={styles.guidelineText}>Guidelines</Text>
          </TouchableOpacity>
        </View>

        <Button
          title="Continue"
          navigation={navigation}
          path="SelfieVerify"
          // id="images.img1"
        />
      </View>
    </Drawer>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: responsiveHeight(4),
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
    },
    title: {
      fontSize: responsiveFontSize(3.5),
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      color: theme === 'dark' ? '#ffffff' : '#000000',
    },
    subTitle: {
      fontSize: responsiveFontSize(1.5),
      textAlign: 'center',
      color: theme === 'dark' ? '#444444' : '#CCCCCC',

      fontFamily: 'Poppins-Medium',
    },
    allImages: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: responsiveWidth(3),
      alignItems: 'center',
    },
    guidelineButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    },
    guidelineText: {
      color: theme === 'dark' ? '#2C6A2F' : '#43A041',
      fontSize: responsiveFontSize(2.3),
      fontFamily: 'Poppins-Medium',
    },
  });

const drawerStyles = {
  drawer: {shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 3},
};

export default UploadPhotosScreen;
