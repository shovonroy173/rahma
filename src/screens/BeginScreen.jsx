import React, {useContext, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Animated,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {prevPage} from '../redux/PageSlice';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ThemeContext} from '../context/DarkThemeContext';

const {width} = Dimensions.get('window');

const data = [
  {id: '1', text: 'Komal and Izhur married in 2023'},
  {id: '2', text: 'Maria and Samim married in 2022'},
  {id: '3', text: 'Samia and Ishrak married in 2021'},
];

const BeginScreen = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const dispatch = useDispatch();

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <ImageBackground
        source={require('../../assets/images/begin.png')}
        style={styles.backgroundImage}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => {
                dispatch(prevPage());
                navigation.goBack();
              }}>
              <Icon name="left" size={24} />
            </TouchableOpacity>
            <FAIcon name="question-circle-o" size={24} />
          </View>
          <View>
            <View style={styles.slideContent}>
              <Image source={require('../../assets/images/bd.png')} />
              <Text style={styles.slideText}>{item.text}</Text>
            </View>
            <View style={styles.dotsContainer}>
              {data.map((_, index) => {
                const inputRange = [
                  (index - 1) * width,
                  index * width,
                  (index + 1) * width,
                ];

                const dotWidth = scrollX.interpolate({
                  inputRange,
                  outputRange: [10, 20, 10],
                  extrapolate: 'clamp',
                });

                const backgroundColor = scrollX.interpolate({
                  inputRange,
                  outputRange: ['#CCCCCC', '#379A35', '#CCCCCC'],
                  extrapolate: 'clamp',
                });

                return (
                  <Animated.View
                    key={index}
                    style={[styles.dot, {width: dotWidth, backgroundColor}]}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );

  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <FlatList
          ref={flatListRef}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>
          Your halal love story start here...
        </Text>
        <Text style={styles.subText}>
          <Text style={styles.colorText}>10 Million</Text> members on Rahma
        </Text>
        <Text style={styles.subText}>
          <Text style={styles.colorText}>500,000</Text> Success stories 🎉
        </Text>
        <Text style={styles.subText}>Your is just one match away ❤️</Text>
        <View style={styles.buttonContainer}>
          <Button
            navigation={navigation}
            path="Gender"
            title="Begin my Journey"
          />
        </View>
      </View>
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
    },
    carouselContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: responsiveHeight(55),
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: responsiveHeight(4),
    },
    iconContainer: {
      width: width,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: responsiveHeight(1),
      paddingHorizontal: responsiveWidth(3),
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide: {
      width: width,
      height: responsiveHeight(55),
    },
    backgroundImage: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    infoContainer: {
      flex: 1,
      justifyContent: 'space-between',
      // alignItems: 'center',
      paddingVertical: responsiveHeight(2),
      paddingHorizontal: responsiveWidth(4),
    },
    titleText: {
      fontSize: responsiveFontSize(3),
      // fontWeight: 600,
      fontFamily: 'Poppins-SemiBold',
      color: theme === 'dark' ? '#ffffff' : '#000000',
    },
    subText: {
      fontSize: responsiveFontSize(2),
      fontFamily: 'Poppins-Medium',
      color: theme === 'dark' ? '#ffffff' : '#000000',
    },
    colorText: {
      color: theme === 'dark' ? '#A1FF99' : '#47A146',
    },
    slideContent: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: responsiveHeight(1),
      padding: responsiveHeight(1),
      borderRadius: 40,
      backgroundColor: '#9CCC9C99',
    },
    slideText: {
      fontSize: responsiveFontSize(1.5),
      color: theme === 'dark' ? '#ffffff' : '#000000',
      fontFamily: 'Poppins-Regular',
    },
    dotsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    dot: {
      height: 8,
      borderRadius: 4,
      marginHorizontal: 5,
    },
  });

export default BeginScreen;
