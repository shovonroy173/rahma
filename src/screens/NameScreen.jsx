/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  // StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import React, {useContext} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {name} from '../../assets/data/data';
import Input from '../components/Input';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const NameScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
              <ProgressContainer
                currentPage={currentPage}
                navigation={navigation}
              />
              <Image
                source={require('../../assets/images/male.webp')}
                style={styles.image}
              />
              {/* <Text style={styles.titleText}>Sadit</Text> */}
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.inputScrollContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.title2Text}>What is your Name?</Text>
              <View style={styles.inputBoxContainer}>
                {name.map(item => (
                  <Input
                    key={item.id}
                    name={`user.${item.name}`}
                    placeholder={item.placeHolder}
                  />
                ))}
              </View>
            </View>
          </ScrollView>

          <View style={styles.buttonContainer}>
            <Button
              navigation={navigation}
              path="DOB"
              title="Continue"
              id="user"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const {width} = Dimensions.get('window');

const getStyles = theme => ({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
    paddingVertical: responsiveHeight(3.5),
  },
  mainContainer: {
    display: 'flex',
    gap: responsiveWidth(2),
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: responsiveHeight(3),
    paddingHorizontal: responsiveWidth(4),
  },
  titleText: {
    fontSize: responsiveFontSize(3.5),
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: theme === 'dark' ? '#d1d5db' : '#000000',
  },
  inputScrollContainer: {
    flexGrow: 1,
    paddingBottom: responsiveWidth(2),
  },
  inputContainer: {
    display: 'flex',
    width: width,
    gap: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(6),
  },
  inputBoxContainer: {
    display: 'flex',
    gap: responsiveWidth(4),
  },
  title2Text: {
    fontSize: responsiveFontSize(3.5),
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: theme === 'dark' ? '#d1d5db' : '#000000',
  },
  image: {
    width: responsiveWidth(35),
    height: responsiveWidth(35),
    borderRadius: 100,
  },
  buttonContainer: {
    paddingBottom: responsiveWidth(2),
  },
});

export default NameScreen;
