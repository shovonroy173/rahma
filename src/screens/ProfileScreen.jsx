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
import React, {useEffect, useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const {width} = Dimensions.get('window');
const data = [
  {
    id: '1',
    title: 'Welcome to Our App',
    desc: 'Discover new features and enjoy a seamless experience.',
  },
  {
    id: '2',
    title: 'Stay Connected',
    desc: 'Keep in touch with your friends and never miss an update.',
  },
  {
    id: '3',
    title: 'Smart Notifications',
    desc: 'Receive important alerts and updates in real time.',
  },
  {
    id: '4',
    title: 'Explore the World',
    desc: 'Find new places, events, and experiences around you.',
  },
  {
    id: '5',
    title: 'Get Started Now',
    desc: 'Join millions of users and start your journey today!',
  },
];

const ProfileScreen = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const intervalRef = useRef(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (flatListRef.current) {
        currentIndex.current =
          currentIndex.current < data.length - 1 ? currentIndex.current + 1 : 0;
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
      {/* Fixed Dots Container */}
      <View style={styles.fixedDotsContainer}>
        {data.map((_, index) => {
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
            outputRange: ['#CCCCCC', '#ECA76E', '#CCCCCC'],
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
        <Image source={require('../../assets/images/filter.png')} />
        <View style={styles.notificationContainer}>
          <View style={styles.beseen}>
            <Ionicons name="rocket-sharp" size={24} color={'white'} />
            <Text style={styles.text}>0</Text>
          </View>
          <Ionicons name="notifications-outline" size={24} color={'black'} />
        </View>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profileInfo}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.profileName}>Name</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditPreview')}>
            <Text>View Profile</Text>
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
          <Feather name="edit" size={24} color={'black'} />
        </TouchableOpacity>
        <View style={styles.editProfile}>
          <Text style={styles.editProfileText}>Settings</Text>
          <Ionicons name="settings-outline" size={24} color={'black'} />
        </View>
        <View style={styles.editProfile}>
          <Text style={styles.editProfileText}>Help & Support Center</Text>
          <Feather name="shield" size={24} color={'black'} />
        </View>
        <View style={styles.editProfile}>
          <Text style={styles.editProfileText}>Invite friends</Text>
          <Feather name="share-2" size={24} color={'black'} />
        </View>
        <View style={styles.verifyContainer}>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Text style={styles.editProfileText}>ID Verification</Text>
            <MaterialCommunityIcons
              name="check-decagram"
              size={18}
              color={'blue'}
            />
          </View>

          <Text>
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
              data={data}
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
              source={require('../../assets/images/profile2.png')}
              style={styles.profileImage}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // padding: 20,
    backgroundColor: 'white',
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
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
    backgroundColor: '#379A35',
    borderRadius: 20,
    paddingVertical: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(6),
    gap: 20,
  },
  text: {
    color: 'white',
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#e8ffe8',
    padding: responsiveHeight(3),
    gap: responsiveHeight(2),
  },
  imgContainer: {
    padding: 5,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#379A35',
    backgroundColor: 'white',
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
    // fontSize: 18,
    fontWeight: 'bold',
  },

  memberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(4),
    backgroundColor: '#98C097',
    // opacity: 0.7,
    borderRadius: 10,
  },
  memberText: {
    fontSize: responsiveFontSize(2),
    color: 'white',
    opacity: 0.7,
  },
  memberText2: {
    fontSize: responsiveFontSize(1.5),
    color: 'white',
    opacity: 0.7,
  },
  learnMore: {
    color: 'white',
    backgroundColor: '#379A35',
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(4),
    borderRadius: 20,
    fontSize: 16,
    fontWeight: 600,
    opacity: 1,
  },
  likesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likesCard: {
    width: '48%',
    backgroundColor: '#DCD8D8',
    padding: responsiveHeight(1.5),
    borderRadius: 20,
    alignItems: 'center',
    gap: responsiveHeight(1.5),
    // justifyContent: 'space-between',
  },
  likesNumber: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 600,
    textAlign: 'center',
  },
  likesText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 600,
    textAlign: 'center',
  },
  goGoldText: {
    fontSize: responsiveFontSize(1.4),
    color: 'gray',
  },
  upgradeBtn: {
    // marginTop: 10,
    backgroundColor: '#379A35',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
  },

  upgradeBtn2: {
    // marginTop: 10,
    backgroundColor: '#28AED8',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  upgradeText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },

  editProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: responsiveHeight(2),
    borderRadius: 10,
    backgroundColor: '#DCD8D8',
  },
  editProfileText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 500,
  },
  verifyContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: responsiveHeight(1),
    padding: responsiveWidth(4),
    backgroundColor: '#DCD8D8',
    // opacity: 0.7,
    borderRadius: 10,
  },
  carouselContainer: {
    flexDirection: 'row',
    backgroundColor: '#DCD8D8',
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
    width:20,
    borderRadius: 4,
  },
  slideContent: {
    width: '50%',
    marginTop: 20,
gap:10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 16,
    flexWrap: 'wrap',
    flexShrink: 'shrink',
    // backgroundColor: 'red'
  },
});

export default ProfileScreen;
