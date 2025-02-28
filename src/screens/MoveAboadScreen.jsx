import React from 'react';
import {useSelector} from 'react-redux';
import OptionComponent from '../components/OptionComponent';
import {moveAbroad} from '../../assets/data/data';

const MoveAbroadScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <OptionComponent
      currentPage={currentPage}
      navigation={navigation}
      title="Do you Move to
abroad After
Marriage?"
      options={moveAbroad}
      id="moveabroad"
      path="Convert"
    />
  );
};

export default MoveAbroadScreen;
