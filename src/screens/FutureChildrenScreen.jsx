import React from 'react';
import {useSelector} from 'react-redux';
import OptionComponent from '../components/OptionComponent';
import {futureChildren} from '../../assets/data/data';

const FutureChildrenScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <OptionComponent
      currentPage={currentPage}
      navigation={navigation}
      title="Do you Want to
have children
in Future?"
      options={futureChildren}
      id="futurechildren"
      path="MoveAbroad"
    />
  );
};

export default FutureChildrenScreen;
