import React from 'react';
import ExploreComponent from '../components/ExploreComponent';

const FavouritedScreen = () => {
  return (
    <ExploreComponent
      title="Favourited"
      subtitle="People you Favourited  will Appear Here.Don’t Worry they won’t Know your Favourited them."
      img={require('../../assets/images/favourited.webp')}
    />
  );
};

export default FavouritedScreen;
