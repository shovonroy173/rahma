import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button} from '@rneui/base';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';

const NotificationScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <View style={styles.container}>
      <View>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>Notification</Text>
        <Text>Do you Want to Active Notifications on your Device.</Text>
        <View>
          <View>
            <Text>Notification</Text>
            <Text>
              Enable Notification to Stay Up to Date with New Likes, Matches and
              Massages
            </Text>
          </View>
          <TouchableOpacity>Enable</TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.buttonContainer}> */}
        <Button
          title="Continue"
          navigation={navigation}
          path="UploadPhotos"
          id="sect"
        />
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

  buttonContainer: {
    paddingVertical: 20,
    width: '100%',
  },
});

export default NotificationScreen;
