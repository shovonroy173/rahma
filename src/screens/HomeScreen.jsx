/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useGetUserQuery} from '../redux/slices/userSlice';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import About from '../components/About';
import {users, wrongImages} from '../../assets/data/data';

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
  // const data = getRandomObject(users);

  // console.log('image', data);

  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={data?.img}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
              <Image source={require('../../assets/images/filter_white.png')} />
            </TouchableOpacity>
            <View style={styles.notificationContainer}>
              <View style={styles.beseen}>
                <Ionicons name="rocket-sharp" size={24} color={'#379A35'} />
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
                <Ionicons name="briefcase-outline" size={30} color={'white'} />
                <Text style={styles.infotext}>{data && data?.profession}</Text>
              </View>
              <View style={styles.info}>
                <Ionicons name="moon-outline" size={30} color={'white'} />
                <Text style={styles.infotext}>
                  {data && data?.religioustype?.title}
                </Text>
              </View>
              <View style={styles.info}>
                <Text>🇧🇩</Text>
                <Text style={styles.infotext}>
                  {data && data?.birthCountry}
                </Text>
              </View>
            </View>
            <View style={styles.topContainer}>
              <View style={styles.iconContainer}>
                <Ionicons name="close-circle-outline" size={40} color={'red'} />
              </View>
              <View style={styles.nameContainer}>
                <View style={styles.iconContainer}>
                  <SimpleLineIcons name="star" size={40} color={'#379A35'} />
                </View>
                <View style={styles.iconContainer}>
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={40}
                    color={'#379A35s'}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <About about={data} />
    </ScrollView>
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
