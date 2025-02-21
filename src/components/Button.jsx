import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {nextPage} from '../redux/PageSlice';

const Button = ({navigation, value, title, path}) => {
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          dispatch(nextPage());
          navigation.navigate(path);
        }}
        style={[value ? styles.loginButton : styles.disabledButton]}
        disabled={!value}>
        <Text style={styles.loginButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  loginButton: {
    width: width - 50,
    backgroundColor: '#379A35',
    padding: 10,
    borderRadius: 100,
  },
  loginButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
    fontFamily: 'Poppins-SemiBold',
  },
  disabledButton: {
    width: width - 50,
    backgroundColor: '#379A35',
    padding: 10,
    borderRadius: 100,
    opacity: 0.7,
    cursor: 'auto',
  },
});

export default Button;
