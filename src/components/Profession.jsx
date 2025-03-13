import {Dimensions, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {SelectList} from 'react-native-dropdown-select-list';
import {Controller, useFormContext} from 'react-hook-form';
import { professions } from '../../assets/data/data';

const Profession = ({name}) => {
  const [selected, setSelected] = useState('');
  const {control} = useFormContext();
  console.log(selected);

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <SelectList
          data={professions}
          save="value"
          setSelected={val =>{ setSelected(val);
            // onChange(val);
          console.log(val);
          }
          }
          value={value}
          closeicon={'none'}
          searchicon={<Icon name="search1" size={24} color={'#68AE67'} />}
          boxStyles={styles.searchBox}
          dropdownShown={true}
          searchPlaceholder="Search jobs.."
          // inputStyles={styles.input}
          dropdownStyles={styles.dropDown}
        />
      )}
    />
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  searchBox: {
    width: width,
    borderRadius: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    color: '#68AE67',
    borderColor: '#68AE67',
  },
  //   input: {
  //     color: '#68AE67',
  //   },
  dropDown: {
    borderWidth: 0,
    borderColor: 'red',
  },
});

export default Profession;
