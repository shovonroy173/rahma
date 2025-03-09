/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import {useGetUserQuery} from '../redux/slices/userSlice';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import About from '../components/About';
import {users} from '../../assets/data/data';
import Geolocation from 'react-native-geolocation-service';
import GlossyButton from '../components/GlossyButton';
const HomeScreen = ({navigation}) => {
  // const {data, loading, error} = useGetUserQuery('email@valid.com');
  // console.log(data, loading, error);
  // function calculateAge(dateString) {
  //   const birthDate = new Date(dateString);
  //   const today = new Date();

  //   let age = today.getFullYear() - birthDate.getFullYear();
  //   const monthDiff = today.getMonth() - birthDate.getMonth();
  //   const dayDiff = today.getDate() - birthDate.getDate();

  //   if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
  //     age--;
  //   }

  //   return age;
  // }

  function calculateAge(timestamp) {
    const birthDate = new Date(timestamp); // Create a Date object from the timestamp
    const currentDate = new Date(); // Get the current date

    let age = currentDate.getFullYear() - birthDate.getFullYear(); // Calculate the initial age

    // Check if the birthday has occurred this year, if not subtract 1 from age
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    const dayDifference = currentDate.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    return age;
  }

  function getRandomObject(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  const [data, setData] = useState(getRandomObject(users));
  const [location, setLocation] = useState(null);
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const getCurrentLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) return;

    Geolocation.getCurrentPosition(
      position => {
        setLocation(position.coords);
      },
      error => {
        console.error(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <View style={{flex: 1}}>
      {location ? (
        <View style={{flex: 1}}>
          <View style={styles.mainIconContainer}>
            <GlossyButton
              onPress={() => setData(getRandomObject(users))}
              primaryColor="#000000"
              secondaryColor="#222222"
              icon={<Ionicons name="close-outline" size={30} color={'red'} />}
            />

            <View style={styles.nameContainer}>
              <GlossyButton
                onPress={() => setData(getRandomObject(users))}
                primaryColor="#e800d5"
                secondaryColor="#c700b0"
                icon={<SimpleLineIcons name="star" size={30} color={'white'} />}
              />
              <GlossyButton
                onPress={() => setData(getRandomObject(users))}
                primaryColor="#e70a3d"
                secondaryColor="#c20434"
                icon={<Ionicons name="checkmark" size={30} color={'white'} />}
              />
            </View>
          </View>
          <ScrollView style={{flex: 1}}>
            <ImageBackground
              source={data?.img}
              style={styles.backgroundImage}
              resizeMode="cover">
              <View style={styles.container}>
                <View style={styles.topContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Filter')}>
                    <Image
                      source={require('../../assets/images/filter_white.png')}
                    />
                  </TouchableOpacity>
                  <View style={styles.notificationContainer}>
                    <View style={styles.beseen}>
                      <Ionicons
                        name="rocket-sharp"
                        size={24}
                        color={'#379A35'}
                      />
                      <Text>Be Seen First</Text>
                    </View>
                    <Ionicons
                      name="notifications-outline"
                      size={24}
                      color={'white'}
                    />
                  </View>
                </View>
                <View style={styles.bottomContainer}>
                  <View style={styles.nameContainer}>
                    <Text style={styles.name}>
                      {`${data && data?.user?.firstName} ${
                        data && data?.user?.lastName
                      } ${data && calculateAge(data?.calendar)}
               `}
                    </Text>
                    <View style={styles.iconContainer}>
                      <Ionicons
                        name="checkmark-circle-outline"
                        size={30}
                        color={'#379A35'}
                      />
                    </View>
                  </View>
                  <Text style={styles.address}>{`🇧🇩 12KM Away, ${
                    data && data?.presentCountry
                  }`}</Text>
                  <View style={styles.descContainer}>
                    <View style={styles.info}>
                      <Entypo name="dot-single" size={24} color={'#379A35'} />
                      <Text style={styles.infotext}>Active Today</Text>
                    </View>
                    <View style={styles.info}>
                      <Ionicons
                        name="briefcase-outline"
                        size={30}
                        color={'white'}
                      />
                      <Text style={styles.infotext}>
                        {data && data?.profession}
                      </Text>
                    </View>
                    <View style={styles.info}>
                      <Ionicons name="moon-outline" size={30} color={'white'} />
                      <Text style={styles.infotext}>
                        {data && data?.religiousType?.title}
                      </Text>
                    </View>
                    <View style={styles.info}>
                      <Text>🇧🇩</Text>
                      <Text style={styles.infotext}>
                        {data && data?.birthCountry}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
            <About about={data} location={location && location} />
          </ScrollView>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: responsiveHeight(4),
            gap: responsiveHeight(4),
          }}>
          <Image
            source={require('../../assets/images/gps.png')}
            style={{width: 200, height: 200, objectFit: 'cover'}}
          />
          <View
            style={{
              gap: responsiveHeight(1),
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(4.5),
                textAlign: 'center',
                fontWeight: 600,
              }}>
              Ready to meet your future partner?
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(2.5),
                textAlign: 'center',
              }}>
              Enable GPS on your device to start seeing Muslims singles nearby.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              console.log('Pressed');
              getCurrentLocation();
            }}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Enable GPS</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: height * 0.9,
    objectFit: 'cover',
  },
  loginButton: {
    width: responsiveWidth(85),
    backgroundColor: '#379A35',
    padding: responsiveHeight(1.5),
    borderRadius: 100,
  },
  loginButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontWeight: 600,
    fontFamily: 'Poppins-SemiBold',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    height: height * 0.9,
  },
  topContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainIconContainer: {
    position: 'absolute', // Keep it fixed
    top: responsiveHeight(78), // Adjust as needed
    left: 0,
    right: 0,
    zIndex: 10, // Ensure it stays above the ScrollView
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  notificationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  beseen: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    gap: 10,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 10,
    borderRadius: 15,
    backgroundColor: '#313030',
  },
  infotext: {
    color: 'white',
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  bottomContainer: {
    width: '100%',
    display: 'flex',
    gap: 10,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingBottom: 70,
  },
  name: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 600,
  },
  iconContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 100,
    padding: 2,
  },

  iconContainerBg: {
    backgroundColor: '#1d1c1c',
    borderRadius: 100,
    padding: 10,
  },
  // iconContainerBgCheck: {
  //   backgroundColor: '#e70a3d',
  //   borderRadius: 100,
  //   padding: 10,
  // },
  iconContainerBgCheck: {
    backgroundColor: '#e70a3d', // Button color
    borderRadius: 100,
    padding: 10,
    position: 'relative', // To allow overlay
    overflow: 'hidden', // Ensures the overlay doesn't go beyond the border-radius
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Light gloss effect
    borderRadius: 100, // Same as button to fit within the border
    zIndex: -1, // Ensures the icon stays above the overlay
  },

  iconContainerBgStar: {
    backgroundColor: '#e800d5',
    borderRadius: 100,
    padding: 10,
  },
  iconContainer2: {
    backgroundColor: '#ffffff',
    borderRadius: 100,
    padding: 6,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descContainer: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },
  address: {
    fontSize: 18,
    color: '#ffffff',
  },
  aboutContainer: {flex: 1, padding: 20, backgroundColor: 'white'},
  aboutHeader: {fontSize: 22, fontWeight: 'bold', marginBottom: 10},
  aboutText: {fontSize: 16, lineHeight: 22, marginBottom: 10},
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
    width: responsiveWidth(30),
  },
});

export default HomeScreen;
