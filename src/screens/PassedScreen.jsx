import React from 'react';
import ExploreComponent from '../components/ExploreComponent';

const PassedScreen = () => {
  return (
    <ExploreComponent
      title="Favourited"
      subtitle="People Who you Passed will Appear Here."
      img={require('../../assets/images/passed.png')}
    />
  );
};

export default PassedScreen;
