/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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
import BottomInput from '../components/BottomInput';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {Text} from 'react-native';

const SalaryScreen = ({navigation}) => {
  // const [value, onChangeText] = useState('');
  const currentPage = useSelector(state => state.page.currentPage);
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
                <BottomInput name="salary" placeholder="ex. 20000" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
  textContainer: {
    gap: responsiveHeight(2),
    alignItems: 'center',
  },
  titleText: {
    fontSize: responsiveFontSize(3),
    fontWeight: 600,
  },
  buttonContainer: {
    paddingBottom: responsiveHeight(2),
    backgroundColor: 'white',
  },
});

export default SalaryScreen;
