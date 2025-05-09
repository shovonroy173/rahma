import React from 'react';
import {useSelector} from 'react-redux';
import {education} from '../../assets/data/data';
import OptionComponent from '../components/OptionComponent';

const EducationScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <OptionComponent
      currentPage={currentPage}
      navigation={navigation}
      title="What’s your Education Level?"
      options={education}
      id="education"
      path="Notification"
    />
  );
};

export default EducationScreen;
