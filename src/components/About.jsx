import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const About = ({about, location}) => {
  // console.log(about);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      {/* About Mw */}
      <View style={styles.mainContainer}>
        <Text style={styles.title}>About me</Text>
        <View style={styles.aboutContainer}>
          <View style={styles.featureContainer}>
            <MaterialIcons
              name="height"
              size={24}
              color={theme === 'dark' ? '#d1d5db' : '#111827'}
            />
            <Text
              style={
                styles.feature
              }>{`${about?.height?.cm}cm (${about?.height?.ft}ft)`}</Text>
          </View>
          <View style={styles.featureContainer}>
            <MaterialCommunityIcons
              name="ring"
              size={24}
              color={theme === 'dark' ? '#d1d5db' : '#111827'}
            />
            <Text style={styles.feature}>{about?.maritalStatus.title}</Text>
          </View>
          <View style={styles.featureContainer}>
            <MaterialCommunityIcons
              name="baby-face-outline"
              size={24}
              color={theme === 'dark' ? '#d1d5db' : '#111827'}
            />
            <Text style={styles.feature}>{`${
              about?.presentCildren?.title === 'Yes'
                ? 'I have Children'
                : about?.presentCildren?.title === 'No'
                ? "Doesn't have Children"
                : 'I have adopted'
            }`}</Text>
          </View>
        </View>
      </View>
      {/* Religiosity */}
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Religiosity</Text>
        <View style={styles.aboutContainer}>
          <View style={styles.featureContainer}>
            <Feather
              name="moon"
              size={24}
              color={theme === 'dark' ? '#d1d5db' : '#111827'}
            />
            <Text style={styles.feature}>{about?.sect?.title}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Feather
              name="moon"
              size={24}
              color={theme === 'dark' ? '#d1d5db' : '#111827'}
            />

            <Text style={styles.feature}>{about?.religiousType?.title}</Text>
          </View>
          <View style={styles.featureContainer}>
            <FontAwesome6
              name="person-praying"
              size={24}
              color={theme === 'dark' ? '#d1d5db' : '#111827'}
            />
            <Text style={styles.feature}>{about?.prayingHabit?.title}</Text>
          </View>
          <View style={styles.featureContainer}>
            <MaterialIcons
              name="silverware-fork-knife"
              size={24}
              color={theme === 'dark' ? '#d1d5db' : '#111827'}
            />

            <Text style={styles.feature}>{`${
              about?.eatingHabit?.id === 1
                ? 'Only eats halal'
                : about?.eatingHabit?.id === 2
                ? 'Never eats halal'
                : about?.eatingHabit?.id === 3
                ? 'Mostly trys'
                : "I don't know"
            }`}</Text>
          </View>
          <View style={styles.featureContainer}>
            <MaterialIcons
              name="smoking-rooms"
              size={24}
              color={theme === 'dark' ? '#d1d5db' : '#111827'}
            />

            <Text style={styles.feature}>{`${
              about?.smokingHabit?.id === 1
                ? 'Smoker'
                : about?.smokingHabit?.id === 2
                ? 'Non-Smoker'
                : about?.smokingHabit?.id === 3
                ? 'I do Vape'
                : 'I do Vape'
            }`}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Entypo
              name="drink"
              size={24}
              color={theme === 'dark' ? '#d1d5db' : '#111827'}
            />

            <Text style={styles.feature}>{`${
              about?.drinkingHabit?.id === 1 ? 'Does drink' : "Doesn't drink"
            }`}</Text>
          </View>
        </View>
      </View>
      {/* Future Plan */}
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Future Plans</Text>
        <View style={styles.aboutContainer}>
          <View style={styles.featureContainer}>
            <MaterialCommunityIcons
              name="baby-face-outline"
              size={24}
              color={theme === 'dark' ? '#d1d5db' : '#111827'}
            />
            <Text style={styles.feature}>
              {`${
                about?.futureChildren?.id === 1
                  ? 'Wants Children'
                  : about?.futureChildren?.id === 2
                  ? 'Does not want Children'
                  : about?.futureChildren?.id === 3
                  ? 'Prefer not to say'
                  : "I can't have Children"
              }`}
            </Text>
          </View>
          <View style={styles.featureContainer}>
            <MaterialCommunityIcons
              name="airplane"
              size={24}
              color={theme === 'dark' ? '#d1d5db' : '#111827'}
            />
            <Text style={styles.feature}>{`${
              about?.moveAbroad.id === 1
                ? 'Will move abroad'
                : about?.moveAbroad.id === 2
                ? 'Will not move abroad'
                : "Let's see"
            }`}</Text>
          </View>
        </View>
      </View>
      {/* Interests */}
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Interests</Text>
        <View style={styles.aboutContainer}>
          {about &&
            Object.values(about && about?.selectedOptions)
              .flat()
              .map(item => (
                <View key={item?.id} style={styles.featureContainerNonBg}>
                  <Text>{item?.icon}</Text>
                  <Text style={styles.feature}>{item?.title}</Text>
                </View>
              ))}
        </View>
      </View>
      {/* Personities */}
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Personality</Text>
        <View style={styles.aboutContainer}>
          {about &&
            Object.values(about && about?.selectedPersonalities)
              .flat()
              .map(item => (
                <View key={item?.id} style={styles.featureContainerNonBg}>
                  <Text>{item?.icon}</Text>
                  <Text style={styles.feature}>{item?.title}</Text>
                </View>
              ))}
        </View>
      </View>
      {/* Education */}
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Education and career</Text>
        <View style={styles.aboutContainer}>
          <View style={styles.featureContainer}>
            <MaterialCommunityIcons
              name="book-education"
              size={24}
              color={theme === 'dark' ? '#d1d5db' : '#111827'}
            />
            <Text style={styles.feature}>{about?.education?.title}</Text>
          </View>
          <View style={styles.featureContainer}>
            <MaterialCommunityIcons
              name="briefcase-variant"
              size={24}
              color={theme === 'dark' ? '#d1d5db' : '#111827'}
            />
            <Text style={styles.feature}>{about?.profession}</Text>
          </View>
        </View>
      </View>
      {/* Lanuage ethinicity */}
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Languages and ethinicity</Text>
        <View style={styles.aboutContainer}>
          <View style={styles.featureContainer}>
            <MaterialCommunityIcons
              name="book-education"
              size={24}
              color={theme === 'dark' ? '#d1d5db' : '#111827'}
            />
            <Text style={styles.feature}>{about?.birthCountry}</Text>
          </View>
          <View style={styles.featureContainer}>
            <MaterialCommunityIcons
              name="briefcase-variant"
              size={24}
              color={theme === 'dark' ? '#d1d5db' : '#111827'}
            />
            <Text style={styles.feature}>{`Grew up in ${about?.grownUp}`}</Text>
          </View>
        </View>
      </View>
      {/* Bio */}
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Bio</Text>
        <Text style={styles.feature}>{about?.bio}</Text>
      </View>
      {/* Verified profile */}
      <View style={styles.verifiedContainer}>
        <View style={styles.verifiedContainerTop}>
          <Text style={styles.verifiedContainertitle}>Verified profile</Text>
          <MaterialCommunityIcons
            name="alert-circle-outline"
            size={24}
            color={theme === 'dark' ? '#d1d5db' : '#111827'}
          />
        </View>
        <View style={styles.verifiedContainerTop}>
          <MaterialCommunityIcons
            name="check-decagram"
            size={24}
            color={theme === 'dark' ? '#14532d' : '#379A35'}
          />
          <Text style={styles.verifiedContainertext}>
            {`${about?.user?.firstName} ${about?.user?.lastName}'s main photo has been verified.`}
          </Text>
        </View>
      </View>
      {/* Share profile */}
      <View style={styles.shareContainer}>
        <MaterialCommunityIcons
          name="share-variant-outline"
          size={24}
          color={theme === 'dark' ? '#d1d5db' : '#111827'}
        />
        <Text style={styles.verifiedContainertext}>Share profile</Text>
      </View>
      {/* <hr /> */}
      <View style={styles.hr} />
      {/* icons */}
      <View style={styles.iconContentContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="star-outline"
            size={40}
            color={theme === 'dark' ? '#d1d5db' : '#111827'}
          />
          <Text style={styles.icontext}>Favourite</Text>
        </View>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="block-helper"
            size={40}
            color={theme === 'dark' ? '#d1d5db' : '#111827'}
          />
          <Text style={styles.icontext}>Block</Text>
        </View>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="flag-variant-outline"
            size={40}
            color={theme === 'dark' ? '#d1d5db' : '#111827'}
          />
          <Text style={styles.icontext}>Report</Text>
        </View>
      </View>
      <View style={styles.shareContainer}>
        <Text style={styles.verifiedContainertext}>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </Text>
      </View>
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: responsiveHeight(3),
      gap: responsiveHeight(5),
      backgroundColor: theme === 'dark' ? '#000000' : 'white',
      // alignItems: 'center',
    },
    aboutContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: 20,
      flexWrap: 'wrap',
    },
    title: {
      fontSize: responsiveFontSize(2.4),
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#d1d5db' : '#111827',
    },
    mainContainer: {
      flex: 1,
      gap: 10,
    },
    feature: {
      fontFamily: 'Poppins-Regular',
      color: theme === 'dark' ? '#e5e7eb' : '#4b5563',
    },
    featureContainer: {
      backgroundColor: theme === 'dark' ? '#27272a' : '#e5e7eb',
      paddingVertical: responsiveWidth(1),
      paddingHorizontal: responsiveWidth(4),
      borderRadius: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
      // width: responsiveWidth(30),
    },
    featureContainerNonBg: {
      borderWidth: 2,
      borderColor: theme === 'dark' ? '#e5e7eb' : '#4b5563',
      paddingVertical: responsiveWidth(1),
      paddingHorizontal: responsiveWidth(4),
      borderRadius: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
    },
    verifiedContainer: {
      backgroundColor: theme === 'dark' ? '#e5e7eb' : '#f3eded',
      paddingVertical: responsiveWidth(4),
      paddingHorizontal: responsiveHeight(2),
      borderRadius: 15,
      gap: responsiveHeight(2),
    },
    verifiedContainerTop: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: responsiveWidth(2),
    },
    verifiedContainertitle: {
      fontSize: responsiveFontSize(2.4),
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#d1d5db' : '#111827',
    },
    verifiedContainertext: {
      fontSize: responsiveFontSize(1.8),
      fontFamily: 'Poppins-Medium',
      paddingHorizontal: responsiveWidth(2),
      color: theme === 'dark' ? '#d1d5db' : '#111827',
    },
    shareContainer: {
      flexDirection: 'row',
      gap: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    hr: {
      borderBottomWidth: 1,
      borderBottomColor: theme === 'dark' ? '#d1d5db' : '#111827',
      marginVertical: 10,
    },
    iconContentContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // backgroundColor: 'red',
      // width: responsiveWidth(80),
      paddingHorizontal: responsiveWidth(4),
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
    },
    icontext: {
      fontSize: responsiveFontSize(2),
      fontFamily: 'Poppins-Medium',
      color: theme === 'dark' ? '#d1d5db' : '#111827',
    },
  });

export default About;
