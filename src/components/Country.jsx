import React from 'react';
import {CountrySelection} from 'react-native-country-list';
import {Controller, useFormContext} from 'react-hook-form';

const Country = ({name}) => {
  const {control} = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value}}) => (
        <CountrySelection action={item => onChange(item?.name)} />
      )}
    />
  );
};

export default Country;
