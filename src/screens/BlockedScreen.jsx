import React from 'react';
import ExploreComponent from '../components/ExploreComponent';

const BlockedScreen = () => {
  return (
    <ExploreComponent
      title="Blocked"
      subtitle="People Who you Passed will Appear Here."
      img={require('../../assets/images/blocked.webp')}
    />
  );
};

export default BlockedScreen;
