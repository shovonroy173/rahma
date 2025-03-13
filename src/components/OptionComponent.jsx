import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useContext, useEffect} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import Button from '../components/Button';
import Option2 from '../components/Option2';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSelector} from 'react-redux';
import {useFormContext} from 'react-hook-form';
import {ThemeContext} from '../context/DarkThemeContext';

const OptionComponent = ({
  navigation,
  currentPage,
  options,
  path,
  id,
  title,
}) => {
  const {setValue} = useFormContext();
  const savedValue = useSelector(state => state.form.formData[id] || '');
  useEffect(() => {
    if (savedValue) {
      setValue(id, savedValue);
    } else {
      console.log('no cache data');
    }
  }, [savedValue, setValue, id]);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.scrollWrapper}>
        <FlatList
          data={options}
          renderItem={({item}) => (
            <Option2 key={item.id} item={item} name={id} />
          )}
          contentContainerStyle={styles.optionContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Continue" navigation={navigation} path={path} id={id} />
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
      padding: responsiveHeight(4),
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
      paddingVertical: responsiveHeight(2),
      gap: responsiveHeight(2),
    },
    option: {
      backgroundColor: theme === 'dark' ? '#2B2B2B' : '#E8E5E5',
      borderRadius: 20,
      paddingHorizontal: responsiveWidth(4),
      paddingVertical: responsiveHeight(2),
    },
    buttonContainer: {
      paddingVertical: responsiveHeight(2),
      width: '100%',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
    },
  });

export default OptionComponent;
