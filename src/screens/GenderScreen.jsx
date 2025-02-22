import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {Controller, useFormContext} from 'react-hook-form';

const GenderScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  const [selectedGender, setSelectedGender] = useState(null);
  console.log(selectedGender);
  const {control, setValue} = useFormContext();
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <ProgressContainer currentPage={currentPage} navigation={navigation} />
        <Text style={styles.titleText}>Please Select your Gender</Text>
      </View>

      <View style={styles.imageContainer}>
        <Controller
          name="gender"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TouchableOpacity
              onPress={male => {
                setSelectedGender('male');
                setValue('gender', 'male');
              }}
              style={styles.singleImageContainer}>
              {selectedGender !== 'male' && <View style={styles.imageShield} />}
              <Image
                source={require('../../assets/images/male.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          )}
        />
        <Controller
          name="gender"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TouchableOpacity
              onPress={female => {
                setSelectedGender('female');
                setValue('gender', 'female');
              }}
              style={styles.singleImageContainer}>
              {selectedGender !== 'female' && (
                <View style={styles.imageShield} />
              )}
              <Image
                source={require('../../assets/images/female.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          )}
        />
      </View>

      <Button
        value={selectedGender === 'male' || selectedGender === 'female'}
        navigation={navigation}
        path="Name"
        title="Continue"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 30,
  },
  progressContainer: {
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 15,
  },
  titleText: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  singleImageContainer: {
    position: 'relative', // Ensures overlay can be positioned inside this container
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  imageShield: {
    position: 'absolute',
    width: 180,
    height: 180,
    backgroundColor: 'rgba(120,120,120, 0.7)',
    borderRadius: 100,
    zIndex: 10,
  },
});

export default GenderScreen;
