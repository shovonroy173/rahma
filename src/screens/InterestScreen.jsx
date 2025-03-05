import React from 'react';
import {interests} from '../../assets/data/data';
import {useSelector} from 'react-redux';
import MultiSelect from '../components/MultiSelect';

const InterestScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <MultiSelect
      currentPage={currentPage}
      navigation={navigation}
      title="What are You Interest?"
      options={interests}
      id="selectedOptions"
      path="Personality"
    />
  );
};

export default InterestScreen;
