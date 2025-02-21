import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
const Warning = ({title, icon}) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 20,
        backgroundColor: '#E8E5E5',
        borderRadius: 25,
    },
});

export default Warning;
