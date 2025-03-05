import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
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

const About = ({about}) => {
  // console.log(about);

  return (
    <View style={styles.container}>
      {/* About Mw */}
      <View style={styles.mainContainer}>
        <Text style={styles.title}>About me</Text>
        <View style={styles.aboutContainer}>
          <View style={styles.featureContainer}>
            <MaterialIcons name="height" size={24} />
            <Text>{`${about?.height?.cm}cm (${about?.height?.ft}ft)`}</Text>
          </View>
          <View style={styles.featureContainer}>
            <MaterialCommunityIcons name="ring" size={24} />
            <Text>{about?.maritalStatus.title}</Text>
          </View>
          <View style={styles.featureContainer}>
            <MaterialCommunityIcons name="baby-face-outline" size={24} />
            <Text>{`${
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
            <Feather name="moon" size={24} />
            <Text>{about?.sect?.title}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Feather name="moon" size={24} />

            <Text>{about?.religiousType?.title}</Text>
          </View>
          <View style={styles.featureContainer}>
            <FontAwesome6 name="person-praying" size={24} />
            <Text>{about?.prayingHabit?.title}</Text>
          </View>
          <View style={styles.featureContainer}>
            <MaterialIcons name="silverware-fork-knife" size={24} />

            <Text>{`${
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
            <MaterialIcons name="smoking-rooms" size={24} />

            <Text>{`${
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
            <Entypo name="drink" size={24} />

            <Text>{`${
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
            <MaterialCommunityIcons name="baby-face-outline" size={24} />
            <Text>
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
            <MaterialCommunityIcons name="airplane" size={24} />
            <Text>{`${
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
          {about && Object.values(about && about?.selectedOptions)
            .flat()
            .map(item => (
              <View key={item?.id} style={styles.featureContainerNonBg}>
                <Text>{item?.icon}</Text>
                <Text>{item?.title}</Text>
              </View>
            ))}
        </View>
      </View>
      {/* Personities */}
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Personality</Text>
        <View style={styles.aboutContainer}>
          {about && Object.values(about && about?.selectedPersonalities)
            .flat()
            .map(item => (
              <View key={item?.id} style={styles.featureContainerNonBg}>
                <Text>{item?.icon}</Text>
                <Text>{item?.title}</Text>
              </View>
            ))}
        </View>
      </View>
      {/* Education */}
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Education and career</Text>
        <View style={styles.aboutContainer}>
          <View style={styles.featureContainer}>
            <MaterialCommunityIcons name="book-education" size={24} />
            <Text>{about?.education?.title}</Text>
          </View>
          <View style={styles.featureContainer}>
            <MaterialCommunityIcons name="briefcase-variant" size={24} />
            <Text>{about?.profession}</Text>
          </View>
        </View>
      </View>
      {/* Lanuage ethinicity */}
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Languages and ethinicity</Text>
        <View style={styles.aboutContainer}>
          <View style={styles.featureContainer}>
            <MaterialCommunityIcons name="book-education" size={24} />
            <Text>{about?.birthCountry}</Text>
          </View>
          <View style={styles.featureContainer}>
            <MaterialCommunityIcons name="briefcase-variant" size={24} />
            <Text>{`Grew up in ${about?.grownUp}`}</Text>
          </View>
        </View>
      </View>
      {/* Bio */}
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Bio</Text>
        <Text>{about?.bio}</Text>
      </View>
      {/* Verified profile */}
      <View style={styles.verifiedContainer}>
        <View style={styles.verifiedContainerTop}>
          <Text style={styles.verifiedContainertitle}>Verified profile</Text>
          <MaterialCommunityIcons name="alert-circle-outline" size={24} />
        </View>
        <View style={styles.verifiedContainerTop}>
          <MaterialCommunityIcons
            name="check-decagram"
            size={24}
            color={'green'}
          />
          <Text style={styles.verifiedContainertext}>
            {`${about?.user?.firstName} ${about?.user?.lastName}'s main photo has been verified.`}
          </Text>
        </View>
      </View>
      {/* Share profile */}
      <View style={styles.shareContainer}>
        <MaterialCommunityIcons name="share-variant-outline" size={24} />
        <Text style={styles.verifiedContainertext}>Share profile</Text>
      </View>
      {/* <hr /> */}
      <View style={styles.hr} />
      {/* icons */}
      <View style={styles.iconContentContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="star-outline" size={50} />
          <Text style={styles.icontext}>Favourite</Text>
        </View>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="block-helper" size={50} />
          <Text style={styles.icontext}>Block</Text>
        </View>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="flag-variant-outline" size={50} />
          <Text style={styles.icontext}>Report</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveHeight(3),
    gap: responsiveHeight(5),
    backgroundColor: 'white',
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
    fontWeight: 'bold',
  },
  mainContainer: {
    flex: 1,
    gap: 10,
  },
  featureContainer: {
    backgroundColor: '#f3eded',
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
    borderColor: '#f3eded',
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
    backgroundColor: '#f3eded',
    padding: responsiveWidth(4),
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
    fontWeight: 600,
  },
  verifiedContainertext: {
    fontSize: responsiveFontSize(2),
    // fontWeight: 600,
  },
  shareContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: '#f3eded',
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
    fontSize: responsiveFontSize(2.5),
    fontWeight: 500,
  },
});

export default About;
