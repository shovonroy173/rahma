import React from 'react';
import {CountrySelection} from 'react-native-country-list';
import {Controller, useFormContext} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';

const Country = ({name}) => {
  const {control, getValues} = useFormContext();
  const onCountrySelection = (data) =>{
    console.log(data);
  };
  console.log(name);
  
  return (
    <View>
      {/* {getValues(name) && (
        <Text style={styles.date}>
          Place of Birth: {getValues(name)}
        </Text>
      )} */}
 <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
          <CountrySelection action={item => onChange(item?.name)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  date: {
    fontSize: 20,
    fontWeight: 600,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Country;
