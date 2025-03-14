import React, {useContext} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import {ThemeContext} from '../context/DarkThemeContext';

const Country = ({name}) => {
  const {control} = useFormContext();
  const {theme} = useContext(ThemeContext);
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value}}) => (
        <CountryPicker
          withModal={false}
          withFilter
          withFlag
          withCallingCode
          theme={theme === 'dark' && DARK_THEME}
          onSelect={data => onChange(data?.name)}
        />
      )}
    />
  );
};

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   date: {
//     fontSize: 20,
//     fontWeight: 600,
//     fontFamily: 'Poppins-SemiBold',
//   },
// });

export default Country;
