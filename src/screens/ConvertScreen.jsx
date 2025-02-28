import React from 'react';
import {useSelector} from 'react-redux';
import OptionComponent from '../components/OptionComponent';
import {convert} from '../../assets/data/data';

const ConvertScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <OptionComponent
      currentPage={currentPage}
      navigation={navigation}
      title="Are You a
Convert/Revert?"
      options={convert}
      id="convert"
      path="Interest"
    />
  );
};

export default ConvertScreen;
