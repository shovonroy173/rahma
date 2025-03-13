import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const PreviewScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/preview.webp')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
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
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 40,
  },
  bottomContainer: {
    display: 'flex',
    gap: 20,
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

export default PreviewScreen;
