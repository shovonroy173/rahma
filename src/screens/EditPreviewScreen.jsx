import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PreviewScreen from './PreviewScreen';
import EditScreen from './EditScreen';

const EditPreviewScreen = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-circle-outline" size={30} color={'#379A35s'} />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
        <Ionicons name="share-social-outline" size={30} color={'#379A35s'} />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 16, fontWeight: 600},
        //   tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {backgroundColor: '#379A35'},
          tabBarActiveTintColor: '#379A35',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Preview" component={PreviewScreen} />
        <Tab.Screen name="Edit" component={EditScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingTop: 30,
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    textAlign: 'center',
  },
});

export default EditPreviewScreen;
