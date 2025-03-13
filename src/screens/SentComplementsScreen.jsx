import React from 'react';
import ExploreComponent from '../components/ExploreComponent';

const SentComplementsScreen = () => {
  return (
    <ExploreComponent
      title="Sent Compliment"
      subtitle="Compliments you’ve Sent to Other Members are Shown Here. Accepted Compliments will
be Moved to your Matches."
      img={require('../../assets/images/complements.webp')}
      single="single"
    />
  );
};

export default SentComplementsScreen;
