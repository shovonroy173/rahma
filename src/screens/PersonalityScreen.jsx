import React from 'react';
import {useSelector} from 'react-redux';
import MultiSelect from '../components/MultiSelect';
import {personalities} from '../../assets/data/data';

const PersonalityScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <MultiSelect
      currentPage={currentPage}
      navigation={navigation}
      title="What would you Describe your Personality?"
      options={personalities}
      id="selectedPersonalies"
      path="Bio"
    />
  );
};

export default PersonalityScreen;
