import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PreviewScreen from './PreviewScreen';
import EditScreen from './EditScreen';
import {ThemeContext} from '../context/DarkThemeContext';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const EditPreviewScreen = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="close-circle-outline"
            size={30}
            color={theme === 'dark' ? '#e5e7eb' : '#18181b'}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
        <Ionicons
          name="share-social-outline"
          size={30}
          color={theme === 'dark' ? '#14532d' : '#379A35'}
        />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontFamily: 'Poppins-SemiBold',
            fontSize: responsiveFontSize(2.2),
          },
          // tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            backgroundColor: theme === 'dark' ? '#1A3D1A' : '#379A35',
          },
          tabBarActiveTintColor: theme === 'dark' ? '#14532d' : '#379A35',
          tabBarInactiveTintColor: theme === 'dark' ? 'gray' : 'gray',
        }}>
        <Tab.Screen name="Preview" component={PreviewScreen} />
        <Tab.Screen name="Edit" component={EditScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
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
      fontSize: responsiveFontSize(3),
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      color: theme === 'dark' ? '#e5e7eb' : '#18181b',
    },
  });

export default EditPreviewScreen;
