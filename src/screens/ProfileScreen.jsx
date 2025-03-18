/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  FlatList,
} from 'react-native';
import React, {useContext, useEffect, useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {features} from '../../assets/data/data';
import {ThemeContext} from '../context/DarkThemeContext';
const {width} = Dimensions.get('window');
import Octicons from 'react-native-vector-icons/Octicons';

const ProfileScreen = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const intervalRef = useRef(null);
  const currentIndex = useRef(0);

  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  console.log(theme);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (flatListRef.current) {
        currentIndex.current =
          currentIndex.current < features.length - 1
            ? currentIndex.current + 1
            : 0;
        flatListRef.current.scrollToOffset({
          offset: currentIndex.current * width,
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <View style={styles.fixedDotsContainer}>
        {features.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 12, 8],
            extrapolate: 'clamp',
          });

          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#CCCCCC', '#000000', '#CCCCCC'],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[styles.dot, {width: dotWidth, backgroundColor}]}
            />
          );
        })}
      </View>

      {/* Content Section */}
      <View style={styles.slideContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
          <Octicons
            name="multi-select"
            size={24}
            color={theme === 'dark' ? '#a1a1aa' : '#7A7676'}
          />
        </TouchableOpacity>

        <View style={styles.notificationContainer}>
          <View style={styles.beseen}>
            <Ionicons
              name="rocket-sharp"
              size={24}
              color={theme === 'dark' ? '#379A35' : '#14532d'}
            />
            <Text
              style={{
                color: theme === 'dark' ? '#e5e7eb' : '#d1d5db',
                fontFamily: 'Poppins-Regular',
              }}>
              0
            </Text>
          </View>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={theme === 'dark' ? '#a1a1aa' : '#7A7676'}
          />
        </View>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profileInfo}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../../assets/images/profile.webp')}
              style={styles.image}
            />
          </View>
          <Text style={styles.profileName}>Name</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditPreview')}>
            <Text style={styles.profileName}>View Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.memberContainer}>
          <View>
            <Text style={styles.memberText}>Gold Member Find their</Text>
            <Text style={styles.memberText2}>Gold Member Find their</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.learnMore}>Learn More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.likesContainer}>
          <View style={styles.likesCard}>
            <Text style={styles.likesNumber}>25</Text>
            <Text style={styles.likesText}>Likes Remaining</Text>
            <Text style={styles.goGoldText}>Go Unlimited with Gold</Text>
            <TouchableOpacity style={styles.upgradeBtn}>
              <Text style={styles.upgradeText}>Upgrade</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.likesCard}>
            <Text style={styles.likesNumber}>2</Text>
            <Text style={styles.likesText}>Complements</Text>
            <Text style={styles.goGoldText}>
              Get a Free Credit Everyday with Gold
            </Text>
            <TouchableOpacity style={styles.upgradeBtn2}>
              <Text style={styles.upgradeText}>Upgrade</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.editProfile}
          onPress={() => navigation.navigate('EditPreview')}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
          <Feather
            name="edit"
            size={24}
            color={theme === 'dark' ? '#e5e7eb' : '#18181b'}
          />
        </TouchableOpacity>
        <View style={styles.editProfile}>
          <Text style={styles.editProfileText}>Settings</Text>
          <Ionicons
            name="settings-outline"
            size={24}
            color={theme === 'dark' ? '#e5e7eb' : '#18181b'}
          />
        </View>
        <View style={styles.editProfile}>
          <Text style={styles.editProfileText}>Help & Support Center</Text>
          <Feather
            name="shield"
            size={24}
            color={theme === 'dark' ? '#e5e7eb' : '#18181b'}
          />
        </View>
        <View style={styles.editProfile}>
          <Text style={styles.editProfileText}>Invite friends</Text>
          <Feather
            name="share-2"
            size={24}
            color={theme === 'dark' ? '#e5e7eb' : '#18181b'}
          />
        </View>
        <View style={styles.verifyContainer}>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Text style={styles.editProfileText}>ID Verification</Text>
            <MaterialCommunityIcons
              name="check-decagram"
              size={18}
              color={theme === 'dark' ? '#60a5fa' : 'blue'}
            />
          </View>

          <Text style={styles.editProfileText2}>
            Verify your age and identity to receive more likes and matches
          </Text>
          <TouchableOpacity>
            <Text style={styles.learnMore}>Get ID Verified</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.carouselContainer}>
          <View style={styles.carouselContent}>
            <FlatList
              ref={flatListRef}
              data={features}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal
              pagingEnabled
              snapToAlignment="center"
              snapToInterval={width}
              decelerationRate="fast"
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false},
              )}
            />
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.learnMore}>Upgrade</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/profile2.webp')}
              style={styles.profileImage}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      // padding: 20,
    },
    topContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      paddingVertical: 20,
      paddingHorizontal: 30,
    },
    notificationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: responsiveWidth(2),
    },
    beseen: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#14532d' : '#379A35',
      borderRadius: 20,
      paddingVertical: responsiveWidth(2),
      paddingHorizontal: responsiveWidth(6),
      gap: 20,
    },
    text: {
      color: theme === 'dark' ? '#d1d5db' : '#111827',
    },
    profileInfo: {
      alignItems: 'center',
    },
    profileContainer: {
      width: '100%',
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: theme === 'dark' ? '#e9fee4' : '#e8ffe8',
      padding: responsiveHeight(3),
      gap: responsiveHeight(2),
    },
    imgContainer: {
      padding: 5,
      borderRadius: 100,
      borderWidth: 4,
      borderColor: theme === 'dark' ? '#14532d' : '#379A35',
      backgroundColor: theme === 'dark' ? '#000000' : 'white',
    },
    image: {
      width: responsiveWidth(25),
      height: responsiveWidth(25),
      borderRadius: 100,
      objectFit: 'cover',
      borderWidth: 2,
      borderColor: '#379A35',
    },
    profileName: {
      fontSize: responsiveFontSize(2),
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
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
      fontSize: responsiveFontSize(2),
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
    likesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    likesCard: {
      width: '48%',
      backgroundColor: theme === 'dark' ? '#3f3f46' : '#DCD8D8',
      padding: responsiveHeight(1.5),
      borderRadius: 20,
      alignItems: 'center',
      gap: responsiveHeight(1.5),
      justifyContent: 'space-between',
    },
    likesNumber: {
      fontSize: responsiveFontSize(2.5),
      fontFamily: 'Poppins-Medium',
      textAlign: 'center',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
    },
    likesText: {
      fontSize: responsiveFontSize(2),
      fontFamily: 'Poppins-Medium',
      textAlign: 'center',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
    },
    goGoldText: {
      fontSize: responsiveFontSize(1.4),
      fontFamily: 'Poppins-Regular',
      textAlign: 'center',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
    },
    upgradeBtn: {
      // marginTop: 10,
      backgroundColor: theme === 'dark' ? '#14532d' : '#379A35',
      paddingVertical: 8,
      paddingHorizontal: 24,
      borderRadius: 20,
    },

    upgradeBtn2: {
      // marginTop: 10,
      backgroundColor: theme === 'dark' ? '#1e3a8a' : '#28AED8',
      paddingVertical: 8,
      paddingHorizontal: 24,
      borderRadius: 20,
    },
    upgradeText: {
      textAlign: 'center',
      fontFamily: 'Poppins-Medium',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
      fontSize: responsiveFontSize(2),
    },

    editProfile: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: responsiveHeight(2),
      borderRadius: 10,
      backgroundColor: theme === 'dark' ? '#3f3f46' : '#DCD8D8',
    },
    editProfileText: {
      fontSize: responsiveFontSize(2),
      fontFamily: 'Poppins-Medium',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
    },
    editProfileText2: {
      fontSize: responsiveFontSize(1.8),
      fontFamily: 'Poppins-Medium',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
    },
    verifyContainer: {
      // flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: responsiveHeight(1),
      padding: responsiveWidth(4),
      backgroundColor: theme === 'dark' ? '#3f3f46' : '#DCD8D8',

      // opacity: 0.7,
      borderRadius: 10,
    },
    carouselContainer: {
      flexDirection: 'row',
      backgroundColor: theme === 'dark' ? '#3f3f46' : '#DCD8D8',

      borderRadius: 10,
      width: '100%',
    },
    carouselContent: {
      flex: 1,
      padding: responsiveWidth(4),
    },
    buttonContainer: {
      marginTop: 10,
      alignSelf: 'flex-start',
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      // padding: 10,
    },
    profileImage: {
      width: responsiveWidth(25),
      height: responsiveWidth(25),
      borderRadius: 40,
      objectFit: 'cover',
    },
    slide: {
      width: width,
    },
    fixedDotsContainer: {
      position: 'absolute',
      top: 5,
      // alignSelf: 'center',
      flexDirection: 'row',
      gap: 5,
    },
    dot: {
      height: 8,
      width: 20,
      borderRadius: 4,
    },
    slideContent: {
      width: '50%',
      marginTop: 20,
      gap: 10,
    },
    title: {
      fontSize: responsiveFontSize(2.2),
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
    },
    desc: {
      flexWrap: 'wrap',
      flexShrink: 'shrink',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
      fontSize: responsiveFontSize(1.8),
      fontFamily: 'Poppins-Medium',
    },
  });

export default ProfileScreen;
