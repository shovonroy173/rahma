import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import ProgressBar from '../components/ProgressBar';
import {useDispatch, useSelector} from 'react-redux';
import {prevPage} from '../redux/PageSlice';
import {ThemeContext} from '../context/DarkThemeContext';

const ProgressContainer = ({navigation, currentPage}) => {
  const dispatch = useDispatch();
  const totalPages = useSelector(state => state.page.totalPages);
  const {theme} = useContext(ThemeContext);

  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity
        onPress={() => {
          dispatch(prevPage());
          navigation.goBack();
        }}>
        <Icon
          name="left"
          size={24}
          color={theme === 'dark' ? '#4b5563' : '#000000'}
        />
      </TouchableOpacity>
      <ProgressBar progress={currentPage / totalPages} />
      <FAIcon
        name="question-circle-o"
        size={24}
        color={theme === 'dark' ? '#4b5563' : '#000000'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
  },
});

export default ProgressContainer;
