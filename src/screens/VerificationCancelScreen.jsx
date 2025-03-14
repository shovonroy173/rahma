import React, {useContext, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Drawer from 'react-native-drawer';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';
import DrawerContent from '../components/DrawerContent';

const VerficationCancelScreen = ({navigation}) => {
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.open();
  };

  const closeDrawer = () => {
    drawerRef.current.close();
  };
  const currentPage = useSelector(state => state.page.currentPage);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <Drawer
      ref={drawerRef}
      type="overlay"
      content={
        <DrawerContent
          closeDrawer={closeDrawer}
          navigation={navigation}
          styles={styles}
        />
      }
      tapToClose={true}
      openDrawerOffset={0.4}
      panCloseMask={0.4}
      closedDrawerOffset={-3}
      styles={drawerStyles}
      side="bottom"
      onClose={closeDrawer}>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <ProgressContainer
            currentPage={currentPage}
            navigation={navigation}
          />
          <Image
            source={require('../../assets/images/user.webp')}
            style={styles.image}
          />

          <View>
            <Text style={styles.titleText}>Become an ID </Text>
            <Text style={styles.titleText}>Verfied Member</Text>
          </View>
        </View>

        <TouchableOpacity onPress={openDrawer} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Not Verified</Text>
        </TouchableOpacity>
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
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      padding: responsiveHeight(4),
    },
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: responsiveHeight(2.5),
    },
    image: {
      width: 180,
      height: 180,
      borderRadius: 20,
    },
    titleText: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#d1d5db' : '#000000',
    },
    loginButton: {
      width: responsiveWidth(84),
      backgroundColor: theme === 'dark' ? '#14532d' : '#379A35',

      padding: 10,
      borderRadius: 100,
    },
    loginButtonText: {
      color: theme === 'dark' ? '#d1d5db' : '#ffffff',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 600,
      fontFamily: 'Poppins-SemiBold',
    },
    button: {
      padding: 15,
      backgroundColor: theme === 'dark' ? '#0056b3' : '#007bff',
      borderRadius: 5,
    },
    buttonText: {
      color: theme === 'dark' ? '#d1d5db' : '#000000',
      fontSize: 16,
    },

    drawerContainer: {
      flex: 1,
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      paddingVertical: 30,
      paddingHorizontal: 30,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
    },
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: -60},
      shadowOpacity: 0.6,
      shadowRadius: 15,
      elevation: 20,
    },

    drawerTextContainer: {
      display: 'flex',
      gap: 30,
      borderBottomStartRadius: 20,
    },
    drawerText1: {
      fontSize: responsiveFontSize(3),
      color: theme === 'dark' ? '#e5e7eb' : '#111111',
      textAlign: 'center',
      fontFamily: 'Poppins-SemiBold',
    },

    drawerText2: {
      fontSize: responsiveFontSize(2),
      color: theme === 'dark' ? '#d1d5db' : '#313030',
      fontFamily: 'Poppins-SemiBold',
    },
  });

const drawerStyles = {
  drawer: {shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 3},
};

export default VerficationCancelScreen;
