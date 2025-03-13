import React from 'react';
import ExploreComponent from '../components/ExploreComponent';

const VisitedYouScreen = () => {
  return (
    <ExploreComponent
      title="Visted you"
      subtitle="People Who have Liked you will Appear Here."
      name="likedyou"
      img={require('../../assets/images/visitedyou.webp')}
    />
  );
};

export default VisitedYouScreen;
