import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ExploreButton from '../components/ExploreButton';
import {ThemeContext} from '../context/DarkThemeContext';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const MessagesScreen = () => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Your Chat</Text>
        <Ionicons
          name="heart-dislike-outline"
          size={24}
          color={theme === 'dark' ? '#e5e7eb' : '#18181b'}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.mainContainer}>
          <Image source={require('../../assets/images/messages_icon.png')} />
          <View style={styles.textContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Rahma</Text>

              <Feather
                name="check-circle"
                size={24}
                color={theme === 'dark' ? '#e5e7eb' : '#18181b'}
              />
            </View>
            <Text style={styles.subname}>
              2 Photos have been Added by Verification
            </Text>
          </View>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.name2}>
            This is where you will Chat with your Future Partner
          </Text>
          <Text style={styles.name2}>
            Match with Someone Special and Chat for Free.
          </Text>
          <ExploreButton title="Find a Match" type="bg" />
        </View>
      </View>
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'dark' ? 'black' : 'white',
    },
    title: {
      fontSize: responsiveFontSize(3),
      textAlign: 'center',
      fontFamily: 'Poppins-Regular',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
    },
    topContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 70,
      paddingVertical: 20,
      paddingHorizontal: 30,
    },
    mainContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: responsiveWidth(3),
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    subContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20,
      paddingBottom: 60,
    },
    textContainer: {
      gap: responsiveWidth(1),
    },
    nameContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: responsiveWidth(1),
      alignItems: 'center',
    },
    name: {
      fontSize: responsiveFontSize(3),
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',

      // textAlign: 'center',
    },

    subname: {
      fontSize: responsiveFontSize(1.5),
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
    },
    name2: {
      fontSize: responsiveFontSize(1.6),
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
    },
  });

export default MessagesScreen;
