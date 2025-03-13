import {View, Text} from 'react-native';
import React from 'react';
import Button from './Button';

const DrawerContent = ({closeDrawer, navigation, styles}) => {
  return (
    <View style={[styles.drawerContainer, styles.shadowProp]}>
      <View style={styles.drawerTextContainer}>
        <Text style={styles.drawerText1}>Sorry!</Text>
        <Text style={styles.drawerText2}>
          We are Unable to Continue your Private Information has been Deleted.
        </Text>
      </View>

      <Button title="Got It" navigation={navigation} path="Warnings" />
    </View>
  );
};

export default DrawerContent;
