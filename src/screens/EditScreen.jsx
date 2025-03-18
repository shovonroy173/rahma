/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useContext} from 'react';
import ImageUpload from '../components/ImageUpload';
import {images, info, lookingFor} from '../../assets/data/data';
// import Drawer from 'react-native-drawer';
// import Icon from 'react-native-vector-icons/AntDesign';
// import PhotoGuidelines from '../components/PhotoGuidelines';
// import Button from '../components/Button';
import Option from '../components/Option';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const EditScreen = () => {
  // const drawerRef = useRef(null);

  // const openDrawer = () => {
  //   drawerRef.current.open();
  // };

  // const closeDrawer = () => {
  //   drawerRef.current.close();
  // };
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    // <Drawer
    //   ref={drawerRef}
    //   type="overlay"
    //   content={<PhotoGuidelines closeDrawer={closeDrawer} />}
    //   tapToClose={true}
    //   openDrawerOffset={0.4}
    //   panCloseMask={0.4}
    //   closedDrawerOffset={-3}
    //   styles={drawerStyles}
    //   side="bottom"
    //   onClose={closeDrawer}>
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 20, gap: 40}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Complete Profile</Text>
          <Text style={styles.number}>70%</Text>
        </View>
        <View style={styles.allImages}>
          {images.map(item => (
            <ImageUpload key={item.id} name={`images.${item.title}`} />
          ))}
          {/* <TouchableOpacity onPress={openDrawer} style={styles.guidelineButton}>
            <Icon name="plus" size={24} color={'#43A041'} />

            <Text style={styles.guidelineText}>Photo</Text>
            <Text style={styles.guidelineText}>Guidelines</Text>
          </TouchableOpacity> */}
        </View>
        {/* <Button title="Continue" id="images.img1" /> */}

        <View style={styles.mainContainer}>
          {lookingFor.map(item => (
            <Option key={item.id} item={item} id="filter3" />
          ))}
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Personal Information</Text>

          <View style={styles.mainContainer}>
            {info.map(item => (
              <Option key={item.id} item={item} id="filter4" />
            ))}
          </View>
          <View style={styles.memberContainer}>
            <View style={styles.memberTextContainer}>
              <Text style={styles.memberText}>Notification</Text>
              <Text style={styles.memberText2}>
                Enable Notification to Stay Up to Date with New Likes, Matches
                and Massages
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.learnMore}>Active Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
    // </Drawer>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'space-between',
      gap: 20,
      alignItems: 'center',
      padding: 20,
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
    },
    allImages: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 20,
      alignItems: 'center',
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
    title: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: responsiveFontSize(2.3),
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 40,
    },
    mainContainer: {
      gap: 20,
    },
    scrollContainer: {
      flex: 1,
      width: '100%',
      gap: 40,
    },
    number: {
      fontSize: responsiveFontSize(2.5),
      backgroundColor: theme === 'dark' ? '#14532d' : '#379A35',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
      fontFamily: 'Poppins-SemiBold',
      paddingVertical: 5,
      paddingHorizontal: 25,
      borderRadius: 20,
    },

    memberContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: responsiveHeight(1.5),
      paddingHorizontal: responsiveWidth(4),
      backgroundColor: theme === 'dark' ? '#5D6A4B' : '#98C097',
      // opacity: 0.7,
      borderRadius: 10,
    },
    memberTextContainer: {
      width: responsiveWidth(50),
    },
    memberText: {
      fontSize: responsiveFontSize(2.4),
      color: theme === 'dark' ? '#e5e7eb' : '#f3f4f6',
      opacity: 0.7,
      fontFamily: 'Poppins-SemiBold',
    },
    memberText2: {
      fontSize: responsiveFontSize(1.4),
      color: theme === 'dark' ? '#9ca3af' : '#e5e7eb',
      fontFamily: 'Poppins-Regular',
    },

    learnMore: {
      color: theme === 'dark' ? '#d1d5db' : '#f3f4f6',

      backgroundColor: theme === 'dark' ? '#1A3D1A' : '#379A35',
      padding: responsiveHeight(1),

      paddingVertical: responsiveHeight(1),
      paddingHorizontal: responsiveWidth(3),
      borderRadius: 20,
      fontSize: responsiveFontSize(1.6),
      fontFamily: 'Poppins-SemiBold',
      opacity: 1,
    },
  });
// const drawerStyles = {
//   drawer: {shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 3},
// };

export default EditScreen;
