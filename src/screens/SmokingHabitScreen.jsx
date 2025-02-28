import React from 'react';
import {useSelector} from 'react-redux';
import OptionComponent from '../components/OptionComponent';
import {smokingHabit} from '../../assets/data/data';

const SmokingHabitScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <OptionComponent
      currentPage={currentPage}
      navigation={navigation}
      title="Do you Smoke?"
      options={smokingHabit}
      id="smokinghabit"
      path="DrinkingHabitAlcohol"
    />
  );
};

export default SmokingHabitScreen;
