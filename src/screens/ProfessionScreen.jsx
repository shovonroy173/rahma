import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  // Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import {Controller, useFormContext} from 'react-hook-form';
import Icon from 'react-native-vector-icons/AntDesign';
import {professions} from '../../assets/data/data';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ProfessionScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const {control} = useFormContext();
  const [query, setQuery] = useState('');

  const filteredProfessions = professions.filter(profession =>
    profession.value.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View>
          <ProgressContainer
            navigation={navigation}
            currentPage={currentPage}
          />
          <Text style={styles.title}>What's your Profession?</Text>
        </View>

        <View style={styles.searchContainer}>
          <Icon
            name="search1"
            size={24}
            color={'#68AE67'}
            style={styles.icon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search profession..."
            placeholderTextColor="#68AE67"
            value={query}
            onChangeText={setQuery}
          />
        </View>

        <Controller
          name="profession"
          control={control}
          render={({field: {onChange, value}}) => (
            <FlatList
              data={filteredProfessions}
              keyExtractor={item => item.key}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={[
                    styles.listItem,
                    value === item.value && styles.selectedItem,
                  ]}
                  onPress={() => {
                    onChange(item.value);
                    // console.log('Selected:', item.value);
                  }}>
                  <Text
                    style={[
                      styles.listItemText,
                      value === item.value && styles.selectedItemText,
                    ]}>
                    {item.value}
                  </Text>
                </TouchableOpacity>
              )}
            />
          )}
        />

        <Button
          title="Continue"
          navigation={navigation}
          path="Salary"
          id="profession"
        />
      </View>
    </TouchableWithoutFeedback>
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
  title: {
    fontSize: responsiveFontSize(3.5),
    fontFamily: 'Poppins-SemiBold',
    paddingHorizontal: responsiveWidth(4),
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#68AE67',
    paddingHorizontal: 10,
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(2),
  },
  icon: {
    marginRight: responsiveWidth(2),
  },
  searchInput: {
    flex: 1,
    height: responsiveHeight(10),
    fontSize: responsiveFontSize(2),
    color: '#68AE67',
    fontFamily: 'Poppins-Medium',
  },
  listItem: {
    padding: responsiveHeight(1.6),
    width: responsiveWidth(80),
  },
  listItemText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins-Medium',
  },
  selectedItem: {
    borderBottomWidth: 1,
    borderColor: '#68AE67',
  },
  selectedItemText: {
    color: '#68AE67',
  },
});

export default ProfessionScreen;
