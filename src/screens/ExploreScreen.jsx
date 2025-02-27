import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LikedYouScreen from './LikedYouScreen';
import VisitedYouScreen from './VisitedYouScreen';
import FavouritedScreen from './FavouritedScreen';
import PassedScreen from './PassedScreen';

const ExploreScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Explore</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
        }}>
        <Tab.Screen name="Liked You" component={LikedYouScreen} />
        <Tab.Screen name="Visited You" component={VisitedYouScreen} />
        <Tab.Screen name="Favourited" component={FavouritedScreen} />
        <Tab.Screen name="Passed" component={PassedScreen} />
        <Tab.Screen name="Date" component={PassedScreen} />
        <Tab.Screen name="New" component={PassedScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default ExploreScreen;
