import React from 'react';
import OptionComponent from '../components/OptionComponent';
import {useSelector} from 'react-redux';
import {eatingHabit} from '../../assets/data/data';

const EatingHabitScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <OptionComponent
      currentPage={currentPage}
      navigation={navigation}
      title="Do you Only
Eat Halal?"
      options={eatingHabit}
      id="eatinghabit"
      path="SmokingHabit"
    />
  );
};

export default EatingHabitScreen;
