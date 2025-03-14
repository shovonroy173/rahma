import {
  View,
  Text,
  // Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useContext} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {rightImages, wrongImages} from '../../assets/data/data';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const PhotoGuidelines = ({closeDrawer}) => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <View style={[styles.drawerContainer, styles.shadowProp]}>
      <View style={styles.drawerTextContainer}>
        <View>
          <Text style={styles.drawerText}>Use High-Quality Photos</Text>
          <View style={styles.drawerContentContainer}>
            {rightImages?.map(item => (
              <View style={styles.rightContent} key={item.id}>
                <Image source={item.img} style={styles.image} />
                <View>
                  <Text style={styles.drawerText2}>{item.desc}</Text>
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
          <Text style={styles.drawerText}>Avoid these Mistakes</Text>
          <View style={styles.drawerContentContainer}>
            {wrongImages?.map(item => (
              <View style={styles.rightContent} key={item.id}>
                <Image source={item?.img} style={styles.image} />
                <View>
                  <Text style={styles.drawerText2}>{item.desc}</Text>
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
      <TouchableOpacity onPress={closeDrawer} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Add Photos</Text>
      </TouchableOpacity>
    </View>
  );
};

// const {width} = Dimensions.get('window');

const getStyles = theme =>
  StyleSheet.create({
    drawerContentContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: responsiveWidth(2),
    },
    drawerText: {
      textAlign: 'center',
      fontSize: responsiveFontSize(2),
      fontWeight: 600,
      marginBottom: 3,
    },
    loginButton: {
      width: responsiveWidth(80),
      backgroundColor: theme === 'dark' ? '#14532d' : '#379A35',
      padding: 10,
      borderRadius: 100,
    },
    loginButtonText: {
      color: theme === 'dark' ? '#d1d5db' : '#ffffff',

      textAlign: 'center',
      // fontSize: 20,
      fontWeight: 600,
      fontFamily: 'Poppins-SemiBold',
    },

    drawerContainer: {
      flex: 1,
      height: responsiveHeight(100),
      // paddingVertical: 10,
      // paddingHorizontal: responsiveHeight(0.5),
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: responsiveWidth(3),
      padding: responsiveHeight(2),
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
    },
    shadowProp: {
      shadowColor: theme === 'dark' ? '#d1d5db' : '#111827',
      shadowOffset: {width: 0, height: -600}, // Negative height for top shadow
      shadowOpacity: 0.6,
      shadowRadius: 15,
      elevation: 20,
    },

    drawerTextContainer: {
      display: 'flex',

      gap: responsiveHeight(3),
      borderBottomStartRadius: 20,
    },

    drawerText1: {
      fontSize: responsiveFontSize(2),
      color: theme === 'dark' ? '#d1d5db' : '#111111',
      fontWeight: 600,
      textAlign: 'center',
    },

    drawerText2: {
      fontSize: responsiveFontSize(2),
      color: theme === 'dark' ? '#d1d5db' : '#111111',
      fontWeight: 600,
    },
    rightContent: {
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: theme === 'dark' ? '#1A3D1A' : '#57A655',
      paddingHorizontal: responsiveWidth(5),
      paddingVertical: responsiveWidth(1),
      borderRadius: 10,
      gap: 10,
      position: 'relative',
      flexWrap: 'wrap',
      // width: responsiveWidth(40),
    },
    image: {
      width: responsiveWidth(20),
      height: responsiveHeight(7),
      objectFit: 'cover',
      borderRadius: 10,
    },
    icon: {
      position: 'absolute',
      top: 20,
      right: 20,
    },
  });

export default PhotoGuidelines;
