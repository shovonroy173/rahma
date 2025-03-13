/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  // ScrollView,
} from 'react-native';
import React, { useContext } from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import MainText from '../components/MainText';
import Calender from '../components/Calender';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { ThemeContext } from '../context/DarkThemeContext';

const DOBScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <ProgressContainer
              currentPage={currentPage}
              navigation={navigation}
            />
            <View style={styles.contentContainer}>
              <MainText
                text1="When were you Born?"
                text2="To continue please enter Date of Birth"
              />
              {/* <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={{
                  flexGrow: 1,
                  paddingBottom: 20,
                  // gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                showsVerticalScrollIndicator={false}> */}
              <Image
                source={require('../../assets/images/dob.webp')}
                style={styles.image}
              />
              <Calender name="calender" />
              {/* </ScrollView> */}
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Continue"
              navigation={navigation}
              path="BirthCountry"
              id="calender"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const getStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',

    padding: responsiveHeight(4),
  },
  mainContainer: {
    display: 'flex',
    gap: responsiveWidth(4),
    alignItems: 'center',
  },
  contentContainer: {
    display: 'flex',
    gap: responsiveWidth(3),
    alignItems: 'center',
  },
  image: {
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    borderRadius: 20,
  },

  buttonContainer: {
    paddingBottom: responsiveHeight(2),
    backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',

  },
});
export default DOBScreen;
