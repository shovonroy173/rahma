/* eslint-disable dot-notation */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useContext} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../components/Button';
import {Controller, useFormContext} from 'react-hook-form';
import {Keyboard} from 'react-native';
import {validationRules} from '../utils/validation';
import {updateFormData} from '../redux/slices/formSlice';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const BioScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {control} = useFormContext();
  const dispatch = useDispatch();

  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ProgressContainer
            currentPage={currentPage}
            navigation={navigation}
          />
          <Text style={styles.title}>Write a Bio</Text>
          <Text style={styles.subtitle}>
            Add a Bio in 300 to Words to Make your Profile Stand Out!
          </Text>
          <ScrollView
            contentContainerStyle={styles.inputScrollContainer}
            showsVerticalScrollIndicator={false}>
            <Controller
              control={control}
              name="bio"
              rules={validationRules['bio']}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  editable
                  multiline
                  maxLength={500}
                  onBlur={onBlur}
                  onChangeText={text => {
                    onChange(text);
                    dispatch(updateFormData({['bio']: text}));
                  }}
                  value={value}
                  placeholder="Describe yourself.."
                  style={styles.input}
                />
              )}
            />
          </ScrollView>

          <View style={styles.buttonContainer}>
            <Button
              title="Continue"
              navigation={navigation}
              id="bio"
              path="LookingFor"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',

      padding: responsiveHeight(4),
    },

    title: {
      fontSize: responsiveFontSize(3.5),
      marginBottom: 10,
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      color: theme === 'dark' ? '#ffffff' : '#000000',
    },
    subtitle: {
      fontSize: responsiveFontSize(1.8),
      fontFamily: 'Poppins-Regular',
      marginBottom: 10,
      color: theme === 'dark' ? '#ffffff' : '#000000',
    },
    input: {
      width: responsiveWidth(84),
      minHeight: 400,
      borderWidth: 2,
      borderStyle: 'dashed',
      borderRadius: 10,
      borderColor: theme === 'dark' ? '#A3D38B' : '#78B377',
      backgroundColor: theme === 'dark' ? '#343333' : '#F3F2F2',
      textAlignVertical: 'top',
      padding: 20,
      fontFamily: 'Poppins-Regular',
    },
    inputScrollContainer: {
      flexGrow: 1,
      paddingBottom: 20,
    },
    buttonContainer: {
      paddingVertical: 20,
      width: '100%',
    },
  });

export default BioScreen;
