import React from 'react';
import OptionComponent from '../components/OptionComponent';
import {useSelector} from 'react-redux';
import {prayingHabit} from '../../assets/data/data';

const PrayingHabitScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <OptionComponent
      currentPage={currentPage}
      navigation={navigation}
      title="How Often do
you pray?"
      options={prayingHabit}
      id="prayinghabit"
      path="EatingHabit"
    />
  );
};

export default PrayingHabitScreen;
