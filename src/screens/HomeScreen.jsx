import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/home.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={()=> navigation.navigate('Filter')}>
          <Image source={require('../../assets/images/filter_white.png')} />

          </TouchableOpacity>
          <View style={styles.notificationContainer}>
            <View style={styles.beseen}>
              <Ionicons name="rocket-sharp" size={24} color={'#379A35'} />
              <Text>Be Seen First</Text>
            </View>
            <Ionicons name="notifications-outline" size={24} color={'white'} />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Sifat Jahan 29</Text>
            <View style={styles.iconContainer}>
              <Ionicons
                name="checkmark-circle-outline"
                size={30}
                color={'#379A35'}
              />
            </View>
          </View>
          <Text style={styles.address}>🇧🇩 12KM Away, Tungi</Text>
          <View style={styles.descContainer}>
            <View style={styles.info}>
              <Entypo name="dot-single" size={24} color={'#379A35'} />
              <Text style={styles.infotext}>Active Today</Text>
            </View>
            <View style={styles.info}>
              <Ionicons name="briefcase-outline" size={30} color={'white'} />
              <Text style={styles.infotext}>Human Resource Professional</Text>
            </View>
            <View style={styles.info}>
              <Ionicons name="moon-outline" size={30} color={'white'} />
              <Text style={styles.infotext}>Practising</Text>
            </View>
            <View style={styles.info}>
              <Text>🇧🇩</Text>
              <Text style={styles.infotext}>Bangladeshi</Text>
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
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
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
});

export default HomeScreen;
