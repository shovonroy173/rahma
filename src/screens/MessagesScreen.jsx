import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExploreButton from '../components/ExploreButton';

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Your Chat</Text>
        <Ionicons name="heart-dislike-outline" size={24} color={'black'} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.mainContainer}>
          <Image source={require('../../assets/images/messages_icon.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>Rahma ✅</Text>
            <Text style={styles.subname}>
              2 Photos have been Added by Verification
            </Text>
          </View>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.name2}>
            This is where you will Chat with your Future Partner
          </Text>
          <Text>Match with Someone Special and Chat for Free.</Text>
          <ExploreButton title="Find a Match" type="bg" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 600,
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 100,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
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
    gap: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
    // textAlign: 'center',
  },
  name2: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center',
  },
});

export default MessagesScreen;
