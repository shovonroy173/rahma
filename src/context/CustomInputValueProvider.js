/* eslint-disable react/react-in-jsx-scope */
import { createContext } from 'react';
import {useForm, Controller} from 'react-hook-form';

// Create a context
export const CustomInputValueContext = createContext();

// Provider component
export const CustomInputValueProvider = ({ children }) => {
  const {register, control} = useForm();




  return (
    <CustomInputValueProvider.Provider value={{ Controller, control}}>
      {children}
    </CustomInputValueProvider.Provider>
  );
};
