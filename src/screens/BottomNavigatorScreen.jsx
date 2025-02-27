/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import MessagesScreen from './MessagesScreen';
import ProfileScreen from './ProfileScreen';

const BottomNavigatorScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#47A146',
          paddingTop: 15,
          paddingHorizontal: 20,
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarShowLabel: false,
      }}
      >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {focused ? (
                <Image
                  source={require('../../assets/images/home_inactive.png')}
                  style={{
                    backgroundColor: '#000000',
                  }}
                />
              ) : (
                <Image
                  source={require('../../assets/images/home_inactive.png')}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {focused ? (
                <Image
                  source={require('../../assets/images/explore_active.png')}
                />
              ) : (
                <Image
                  source={require('../../assets/images/explore_inactive.png')}
                />
              )}
            </View>
          ),
          tabBarBadge: 2,
          tabBarBadgeStyle: {backgroundColor: '#FF9900', color: '#ffffff'},
        }}
      />
      <Tab.Screen
        name="Settings"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {focused ? (
                <Image
                  source={require('../../assets/images/message_active.png')}
                />
              ) : (
                <Image
                  source={require('../../assets/images/message_inactive.png')}
                />
              )}
            </View>
          ),
          tabBarBadge: 5,
          tabBarBadgeStyle: {backgroundColor: '#FF9900', color: '#ffffff'},
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {focused ? (
                <Image
                  source={require('../../assets/images/profile_active.png')}
                />
              ) : (
                <Image
                  source={require('../../assets/images/profile_inactive.png')}
                />
              )}
            </View>
          ),
          tabBarBadge: 1,
          tabBarBadgeStyle: {backgroundColor: '#FF9900', color: '#ffffff'},
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigatorScreen;
