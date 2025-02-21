import {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import { useSelector } from 'react-redux';

const ProgressBar = () => {
  const currentPage = useSelector((state) => state.page.currentPage);
  const totalPages = useSelector((state) => state.page.totalPages);
  const progress = (currentPage / totalPages) * 100;
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress, // Dynamic progress
      duration: 500, // Animation speed
      useNativeDriver: false, // Must be false for width
    }).start();
  }, [progress, animatedWidth]); // Re-run effect if progress changes
  return (
    <View style={styles.progressBarContainer}>
        <Animated.View
        style={[
          styles.progressBar,
          {
            width: animatedWidth.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBarContainer: {
    width: '80%',
    height: 4,
    backgroundColor: '#A8C6A8',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#47A146',
    borderRadius: 10,
  },
});
