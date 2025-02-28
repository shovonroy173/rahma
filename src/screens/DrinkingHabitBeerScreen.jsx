import React from 'react';
import {useSelector} from 'react-redux';
import OptionComponent from '../components/OptionComponent';
import {drinkingHabit} from '../../assets/data/data';

const DrinkingHabitBeerScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <OptionComponent
      currentPage={currentPage}
      navigation={navigation}
      title="Do you Drink Beer?"
      options={drinkingHabit}
      id="drinkinghhabitbeer"
      path="PresentChildren"
    />
  );
};

export default DrinkingHabitBeerScreen;
