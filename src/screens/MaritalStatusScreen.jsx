import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {maritalStatus} from '../../assets/data/data';
import Option2 from '../components/Option2';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const MaritalStatusScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>What’s your Marital Status?</Text>
      </View>
      <View style={styles.scrollWrapper}>
        <ScrollView
          contentContainerStyle={styles.optionContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {maritalStatus?.map(item => (
            <Option2 key={item.id} item={item} name="maritalstatus" />
          ))}
        </ScrollView>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Continue"
          navigation={navigation}
          path="MaritalIntension"
          id="maritalstatus"
        />
      </View>
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      justifyContent: 'space-between',
      padding: 30,
    },
    mainContainer: {
      alignItems: 'center',
      gap: responsiveHeight(2),
    },
    title: {
      fontSize: responsiveFontSize(3.5),
      textAlign: 'center',
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#ffffff' : '#000000',
    },
    scrollWrapper: {
      flex: 1,
      width: '100%',
    },
    optionContainer: {
      paddingVertical: 20,
      gap: 20,
    },
    option: {
      backgroundColor: theme === 'dark' ? '#2B2B2B' : '#E8E5E5',
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    buttonContainer: {
      paddingVertical: 20,
      width: '100%',
    },
  });

export default MaritalStatusScreen;
