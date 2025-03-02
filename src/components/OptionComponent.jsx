import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import Button from '../components/Button';
import Option2 from '../components/Option2';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const OptionComponent = ({
  navigation,
  currentPage,
  options,
  path,
  id,
  title,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.scrollWrapper}>
        <ScrollView
          contentContainerStyle={styles.optionContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {options?.map(item => (
            <Option2 key={item.id} item={item} name={id} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Continue" navigation={navigation} path={path} id={id} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    padding: responsiveHeight(4),
  },
  mainContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
    fontWeight: 600,
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
    backgroundColor: '#E8E5E5',
    borderRadius: 20,
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
  },
  buttonContainer: {
    paddingVertical: responsiveHeight(2),
    width: '100%',
  },
});

export default OptionComponent;
