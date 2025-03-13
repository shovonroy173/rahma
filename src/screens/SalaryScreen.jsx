/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import ProgressContainer from '../components/ProgressContainer';
import Button from '../components/Button';
import SubText from '../components/SubText';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Text} from 'react-native';
import {salary} from '../../assets/data/data';
import SalaryInput from '../components/SalaryInput';
import {ThemeContext} from '../context/DarkThemeContext';
// import { useGetTodosQuery } from '../redux/apiSlice';
// import {useGetTodoQuery} from '../redux/endpoints/getTodos';
// import { useSelector } from 'react-redux';
// import {useGetTodoQuery} from '../redux/endpoints/getTodos';

const SalaryScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  // const {data, loading, error} = useGetTodoQuery();
  // console.log(data, loading, error, currentPage);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <ProgressContainer
                currentPage={currentPage}
                navigation={navigation}
              />
              <View>
                <Text style={styles.titleText}>Select Your</Text>
                <Text style={styles.titleText}>Salary Range</Text>
              </View>
            </View>
            <ScrollView
              style={styles.scrollContainer}
              contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: 20,
                gap: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              showsVerticalScrollIndicator={false}>
              <View>
                {/* <BottomInput name="salary" placeholder="ex. 20000" /> */}
                <View style={styles.salaryContainer}>
                  {salary.map(item => (
                    <SalaryInput
                      key={item.id}
                      placeholder={item.placeholder}
                      name={`salary.${item.name}`}
                    />
                  ))}
                </View>
                {/* <Input placeholder="Max"/> */}
                <SubText navigation={navigation} />
              </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
              <Button
                title="Continue"
                navigation={navigation}
                path="Ethinic"
                id="salary"
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

// const {width} = Dimensions.get('window');

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',

      padding: responsiveHeight(4),
    },
    // inputBox: {
    //   borderBottomWidth: 1,
    //   borderBottomColor: '#A19B9B',
    //   paddingHorizontal: responsiveWidth(3),
    //   fontSize: 16,
    //   fontFamily: 'Poppins-Medium',
    // },
    inputContainer: {
      alignItems: 'center',
      gap: responsiveHeight(3),
    },
    input: {
      width: responsiveWidth(35),
      borderWidth: 1,
      borderRadius: 10,
      borderColor: theme === 'dark' ? '#E0E0E0' : '#A19B9B',
      paddingHorizontal: 15,
      height: responsiveHeight(6),
    },

    textContainer: {
      gap: responsiveHeight(2),
      alignItems: 'center',
    },
    titleText: {
      fontSize: responsiveFontSize(3),
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      color: theme === 'dark' ? '#ffffff' : '#000000',
    },
    buttonContainer: {
      paddingBottom: responsiveHeight(2),
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
    },
    salaryContainer: {
      display: 'flex',
      flexDirection: 'row',
      // backgroundColor: 'red',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

export default SalaryScreen;
