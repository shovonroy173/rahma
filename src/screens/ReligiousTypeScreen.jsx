import React from 'react';
import {useSelector} from 'react-redux';
import {religiousType} from '../../assets/data/data';
import OptionComponent from '../components/OptionComponent';

const ReligiousTypeScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <OptionComponent
      currentPage={currentPage}
      navigation={navigation}
      title="How Religious you are?"
      options={religiousType}
      id="religioustype"
      path="PrayingHabit"
    />
  );
};

export default ReligiousTypeScreen;
