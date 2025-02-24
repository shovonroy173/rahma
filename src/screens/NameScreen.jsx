import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {name} from '../../assets/data/data';
import Input from '../components/Input';

const NameScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

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
                source={require('../../assets/images/male.png')}
                style={styles.image}
              />
              <Text style={styles.titleText}>Sadit</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 30,
  },
  mainContainer: {
    display: 'flex',
    gap: 40,
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 30,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  inputScrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  inputContainer: {
    display: 'flex',
    width: width,
    gap: 40,
    paddingHorizontal: 30,
  },
  inputBoxContainer: {
    display: 'flex',
    gap: 30,
  },
  title2Text: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  buttonContainer: {
    paddingBottom: 20,
  },
});

export default NameScreen;
