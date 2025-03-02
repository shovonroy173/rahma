import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const NotificationScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>Notification</Text>
        <Text>Do you Want to Active Notifications on your Device.</Text>
        <View>
          <View style={styles.memberContainer}>
            <View style={styles.memberTextContainer}>
              <Text style={styles.memberText}>Notification</Text>
              <Text style={styles.memberText2}>
                Enable Notification to Stay Up to Date with New Likes, Matches
                and Massages
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.learnMore}>Active Now</Text>
            </TouchableOpacity>
          </View>{' '}
        </View>
      </View>
      {/* <View style={styles.buttonContainer}> */}
      <Button title="Continue" navigation={navigation} path="UploadPhotos" />
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    padding: 30,
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
  },
  mainContainer: {
    gap: responsiveHeight(2),
  },

  buttonContainer: {
    paddingVertical: 20,
    width: '100%',
  },

  memberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#98C097',
    // opacity: 0.7,
    borderRadius: 10,
  },
  memberTextContainer: {
    width: '65%',
  },
  memberText: {
    fontSize: 24,
    color: 'white',
    opacity: 0.7,
    fontWeight: 600,
  },
  memberText2: {
    fontSize: 14,
    color: 'white',
    opacity: 0.7,
  },

  learnMore: {
    color: 'white',
    backgroundColor: '#379A35',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    fontSize: 16,
    fontWeight: 600,
    opacity: 1,
  },
});

export default NotificationScreen;
