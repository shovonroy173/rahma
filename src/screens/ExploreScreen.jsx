import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LikedYouScreen from './LikedYouScreen';
import VisitedYouScreen from './VisitedYouScreen';
import FavouritedScreen from './FavouritedScreen';
import PassedScreen from './PassedScreen';
import Filter from '../components/Filter';
import LikedScreen from './LikedScreen';
import SentComplementsScreen from './SentComplementsScreen';
import BlockedScreen from './BlockedScreen';
import {ThemeContext} from '../context/DarkThemeContext';

const ExploreScreen = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();

  const theme = useContext(ThemeContext);
console.log(theme);

  return (
    <SafeAreaView style={styles.container}>
      <Filter navigation={navigation} />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 16, fontWeight: 600, width: 230},
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {backgroundColor: theme.theme === 'dark' ? '#1A3D1A' : '#379A35'},
          tabBarActiveTintColor: '#379A35',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Liked You" component={LikedYouScreen} />
        <Tab.Screen name="Visited You" component={VisitedYouScreen} />
        <Tab.Screen name="Favourited" component={FavouritedScreen} />
        <Tab.Screen name="Passed" component={PassedScreen} />
        <Tab.Screen name="Liked" component={LikedScreen} />
        <Tab.Screen name="Sent Complements" component={SentComplementsScreen} />
        <Tab.Screen name="Blocked" component={BlockedScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ExploreScreen;
