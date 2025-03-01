import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {Controller, useFormContext} from 'react-hook-form';
import {Keyboard} from 'react-native';

const BioScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {control} = useFormContext();
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
            Add a Bio in 300 to 500 Words to Make your Profile Stand Out!
          </Text>
          <ScrollView contentContainerStyle={styles.inputScrollContainer}>
            <Controller
              control={control}
              name="bio"
              render={({field:{onChange, onBlur, value}}) => (
                <TextInput
                  editable
                  multiline
                  numberOfLines={4}
                  maxLength={40}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Describe yourself.."
                  style={styles.input}
                />
              )}
            />
          </ScrollView>

          <View style={styles.buttonContainer}>
            <Button title="Continue" navigation={navigation} id="bio" path="LookingFor" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 30,
  },

  title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 600,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: width - 60,
    height: 400,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderColor: '#78B377',
    // textAlign: 'flex-start',
    backgroundColor: '#F3F2F2',
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
