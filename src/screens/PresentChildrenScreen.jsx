import React from 'react';
import {useSelector} from 'react-redux';
import OptionComponent from '../components/OptionComponent';
import {presentChildren} from '../../assets/data/data';

const PresentChildrenScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <OptionComponent
      currentPage={currentPage}
      navigation={navigation}
      title="Do you have Children?"
      options={presentChildren}
      id="presentchildren"
      path="FutureChildren"
    />
  );
};

export default PresentChildrenScreen;
