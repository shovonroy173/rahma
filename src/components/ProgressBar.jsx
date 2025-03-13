/* eslint-disable react/react-in-jsx-scope */
import {useContext, useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ThemeContext} from '../context/DarkThemeContext';

const ProgressBar = () => {
  const currentPage = useSelector(state => state.page.currentPage);
  const totalPages = useSelector(state => state.page.totalPages);
  const progress = (currentPage / totalPages) * 100;
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress, animatedWidth]);
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

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

const getStyles = theme =>
  StyleSheet.create({
    progressBarContainer: {
      width: '80%',
      height: 4,
      backgroundColor: theme === 'dark' ? '#4b5563' : '#A8C6A8',
      borderRadius: 10,
      overflow: 'hidden',
    },
    progressBar: {
      height: '100%',
      backgroundColor: theme === 'dark' ? '#166534' : '#379A35',
      borderRadius: 10,
    },
  });
