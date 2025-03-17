/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import MessagesScreen from './MessagesScreen';
import ProfileScreen from './ProfileScreen';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const BottomNavigatorScreen = () => {
  const Tab = createBottomTabNavigator();
  const {theme} = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#1A3D1A' : '#47A146',
          paddingTop: 15,
          paddingHorizontal: 20,
          height: responsiveHeight(10),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarShowLabel: false,
      }}>
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
                <MaterialCommunityIcons
                  name="ring"
                  size={30}
                  color={theme === 'dark' ? '#d1d5db' : '#111827'}
                />
              ) : (
                <MaterialCommunityIcons
                  name="ring"
                  size={25}
                  style={{opacity:0.5}}
                  color={theme === 'dark' ? '#4b5563' : '#E5E7EB'}
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
                <MaterialCommunityIcons
                  name="heart-multiple-outline"
                  size={30}
                  color={theme === 'dark' ? '#d1d5db' : '#111827'}
                />
              ) : (
                <MaterialCommunityIcons
                  name="heart-multiple-outline"
                  size={25}
                  style={{opacity:0.5}}
                  color={theme === 'dark' ? '#4b5563' : '#E5E7EB'}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {focused ? (
                <MaterialCommunityIcons
                  name="message-text-outline"
                  size={30}
                  color={theme === 'dark' ? '#d1d5db' : '#111827'}
                />
              ) : (
                <MaterialCommunityIcons
                  name="message-text-outline"
                  size={25}
                  style={{opacity:0.5}}
                  color={theme === 'dark' ? '#4b5563' : '#E5E7EB'}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {focused ? (
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color={theme === 'dark' ? '#d1d5db' : '#111827'}
                />
              ) : (
                <Ionicons
                  name="person-circle-outline"
                  size={25}
                  style={{opacity:0.5}}
                  color={theme === 'dark' ? '#4b5563' : '#E5E7EB'}
                />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigatorScreen;
