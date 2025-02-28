import React from 'react';
import ExploreComponent from '../components/ExploreComponent';

const LikedScreen = () => {
  return (
    <ExploreComponent
      title="Liked"
      subtitle="People Who you Passed will Appear Here."
      img={require('../../assets/images/liked.png')}
    />
  );
};

export default LikedScreen;
