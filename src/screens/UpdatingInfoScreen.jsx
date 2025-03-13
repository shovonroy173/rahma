import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useCallback, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {prevPage} from '../redux/PageSlice';
import Icon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import ProgressBar from '../components/ProgressBar';
import {useFocusEffect} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const UpdatingInfoScreen = ({navigation}) => {
  const currentPage = useSelector(state => state.page.currentPage);
  const totalPages = useSelector(state => state.page.totalPages);
  const dispatch = useDispatch();
  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        navigation.navigate('FrontError');
        // console.log('Navigating to FrontError');
      }, 2000);

      return () => clearTimeout(timer);
    }, [navigation]),
  );

  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            dispatch(prevPage());
            navigation.goBack();
          }}>
          <Icon
            name="left"
            size={24}
            color={theme === 'dark' ? '#ffffff' : '#000000'}
          />
        </TouchableOpacity>
        <FAIcon
          name="question-circle-o"
          size={24}
          color={theme === 'dark' ? '#ffffff' : '#000000'}
        />
      </View>
      <Text style={styles.title}>Please Wait a while!</Text>
      <Image
        source={require('../../assets/images/updating.webp')}
        style={styles.image}
      />
      <Text style={styles.subTitle}>
        Please don’t Close the App Until We’ve Uploaded your National ID. This
        Usually Takes Less than a Minutes.
      </Text>
      <ProgressBar progress={currentPage / totalPages} />
    </View>
  );
};

const {width} = Dimensions.get('window');

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',

      padding: responsiveHeight(4),
      gap: responsiveHeight(4),
    },
    iconContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // gap: 15,
      width: width,
      paddingHorizontal: responsiveHeight(4),
    },
    title: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: responsiveFontSize(3),
      color: theme === 'dark' ? '#ffffff' : '#000000',
    },
    subTitle: {
      fontSize: responsiveFontSize(2),
      color: theme === 'dark' ? '#B2AEAE' : '#7B7777',
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
    },
    image: {
      width: responsiveWidth(60),
      height: responsiveWidth(60),
    },
  });

export default UpdatingInfoScreen;
