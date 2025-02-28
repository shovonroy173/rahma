import React from 'react';
import {useSelector} from 'react-redux';
import {sects} from '../../assets/data/data';
import OptionComponent from '../components/OptionComponent';

const UserSectScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);

  return (
    <OptionComponent
      currentPage={currentPage}
      navigation={navigation}
      title="What’s your sect?"
      options={sects}
      id="sect"
      path="Profession"
    />
  );
};



export default UserSectScreen;
