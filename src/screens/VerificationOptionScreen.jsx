import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ProgressContainer from '../components/ProgressContainer';
import {useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../components/Button';
import {options} from '../../assets/data/data';

const VerificationOptionScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const [selectedOptions, setSelectedOptions] = useState(null);

  const handleSelect = index => {
    setSelectedOptions(index);
  };

  return (
    <View style={styles.container}>
      <View>
        <ProgressContainer currentPage={currentPage} navigation={navigation} />
        <Text style={styles.title}>
          Select the Type Of ID Document you Want to Add
        </Text>
        <View style={styles.mainContainer}>
          <Text style={styles.text}>Issuing Country</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text2}>Bangladesh</Text>
            <Text style={styles.footerText}>Change</Text>
          </View>
          <View style={styles.divider} />
          <Text style={styles.text}>Accepted Documents:</Text>
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionContainer,
                selectedOptions === index && styles.selectedOption,
              ]}
              onPress={() => handleSelect(index)}>
              <View>
                <Text
                  style={[
                    selectedOptions === index
                      ? styles.optionTextSelected
                      : styles.optionText,
                  ]}>
                  {item.title}
                </Text>
                {item?.subTitle && (
                  <Text
                    style={[
                      selectedOptions === index
                        ? styles.optionTextSelected2
                        : styles.optionText2,
                    ]}>
                    {item?.subTitle}
                  </Text>
                )}
              </View>
              <Feather
                name="chevron-right"
                size={24}
                color={selectedOptions === index ? '#ffffff' : '#000000'}
              />
            </TouchableOpacity>
          ))}
          <Text style={styles.footerText}>More about Verification</Text>
        </View>
      </View>
      <Button
        title="Submit"
        value={1}
        navigation={navigation}
        path="TakePhoto"
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
    padding: 30,
  },
  mainContainer: {
    display: 'flex',
    gap: 20,
  },
  divider: {
    height: 1,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 600,
  },
  text2: {
    fontSize: 18,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DCD8D8',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 5,
    color: '#000000',
    height: 70,
  },
  selectedOption: {
    backgroundColor: '#379A35',
  },
  optionText: {
    fontSize: 18,
  },
  optionTextSelected: {
    fontSize: 18,
    color: '#ffffff',
  },
  optionText2: {
    color: '#000000',
  },
  optionTextSelected2: {
    color: '#ffffff',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 600,
    color: '#379A35',
  },
});

export default VerificationOptionScreen;
