import {View} from 'react-native';
import React, {Children, cloneElement} from 'react';
import {useForm, Controller} from 'react-hook-form';

const CustomInput = ({children}) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: {errors},
  } = useForm();
  // const [credentials, setCredentials] = useState();
  const onSubmit = (data) => {
    // setCredentials((prev)=> ({prev, ...data}));
    console.log('Form Data', data);
  };
  return (
    <View>
      {Children.map(children, child =>
        cloneElement(child, {
          register,
          control,
          onSubmit,
          handleSubmit,
          Controller,
          errors,
          setValue,
        }),
      )}
    </View>
  );
};

export default CustomInput;
