import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: responsiveHeight(1.5),
    borderRadius: 10,
    backgroundColor: '#DCD8D8',
  },
  editProfileText: {
    fontSize: responsiveFontSize(2),
  },
});

export default ProfileScreen;
