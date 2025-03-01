import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Upcoming = ({title, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <MaterialIcons name="upcoming" size={50} color={'#379A35'} />
      <Text style={styles.title}>Coming Soon</Text>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Text style={styles.link}>Go back..</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    textAlign: 'center',
  },
  back: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  link: {
    color: '#ffffff',
    fontWeight: 500,

  },
});

export default Upcoming;
