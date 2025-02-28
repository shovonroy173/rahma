import React from 'react';
import {useSelector} from 'react-redux';
import OptionComponent from '../components/OptionComponent';
import {drinkingHabit} from '../../assets/data/data';

const DrinkingHabitAlcoholScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <OptionComponent
      currentPage={currentPage}
      navigation={navigation}
      title="Do you Drink Alcohol?"
      options={drinkingHabit}
      id="drinkinghhabitalcohol"
      path="DrinkingHabitBeer"
    />
  );
};

export default DrinkingHabitAlcoholScreen;
