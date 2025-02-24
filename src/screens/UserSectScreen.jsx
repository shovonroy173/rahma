import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {sects} from '../../assets/data/data';

const UserSectScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>What’s your sect?</Text>
      </View>
      <View style={styles.scrollWrapper}>
        <ScrollView
          contentContainerStyle={styles.optionContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {sects.map(sect => (
            <Text key={sect.id} style={styles.option}>
              {sect.title}
            </Text>
          ))}
        </ScrollView>
      </View>

      {/* ✅ Fix: Ensure Button Stays Visible */}
      <View style={styles.buttonContainer}>
        <Button title="Continue" navigation={navigation} path="UserSect" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 30,
  },
  mainContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
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
    backgroundColor: '#E8E5E5',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  buttonContainer: {
    paddingVertical: 20,
    width: '100%',
  },
});

export default UserSectScreen;
