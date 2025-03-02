import {
  View,
  Text,
  // Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {rightImages, wrongImages} from '../../assets/data/data';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const PhotoGuidelines = ({closeDrawer}) => {
  return (
    <View style={[styles.drawerContainer, styles.shadowProp]}>
      <View style={styles.drawerTextContainer}>
        <View>
          <Text style={styles.drawerText}>Use High-Quality Photos</Text>
          <View style={styles.drawerContentContainer}>
            {rightImages?.map(item => (
              <View style={styles.rightContent} key={item.id}>
                <Image source={item.img} style={styles.image} />
                <View>
                  <Text style={styles.text}>{item.desc}</Text>
                </View>
                <SimpleLineIcons
                  name="check"
                  size={30}
                  color={'#57A655'}
                  style={styles.icon}
                />
              </View>
            ))}
          </View>
        </View>
        <View>
          <Text style={styles.drawerText}>Avoid these Mistakes</Text>
          <View style={styles.drawerContentContainer}>
            {wrongImages?.map(item => (
              <View style={styles.rightContent} key={item.id}>
                <Image source={item?.img} style={styles.image} />
                <View>
                  <Text style={styles.text}>{item.desc}</Text>
                  {/* <Text style={styles.text}>Yourself</Text> */}
                </View>
                <SimpleLineIcons
                  name="close"
                  size={24}
                  color={'red'}
                  style={styles.icon}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={closeDrawer} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Add Photos</Text>
      </TouchableOpacity>
    </View>
  );
};

// const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  drawerContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: responsiveWidth(2),
  },
  drawerText: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontWeight: 600,
    // marginBottom: 10,
  },
  loginButton: {
    width: responsiveWidth(80),
    backgroundColor: '#379A35',
    padding: 10,
    borderRadius: 100,
  },
  loginButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    // fontSize: 20,
    fontWeight: 600,
    fontFamily: 'Poppins-SemiBold',
  },

  drawerContainer: {
    flex: 1,
    height: responsiveHeight(100),
    backgroundColor: '#fff',
    // paddingVertical: 10,
    // paddingHorizontal: responsiveHeight(0.5),
    justifyContent: 'center',
    alignItems: 'center',
    gap: responsiveWidth(3),
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -60}, // Negative height for top shadow
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 20, // Required for Android
  },

  drawerTextContainer: {
    display: 'flex',
    gap: responsiveHeight(1),
    borderBottomStartRadius: 20,
  },

  drawerText1: {
    fontSize: responsiveFontSize(2),
    color: '#111111',
    fontWeight: 600,
    textAlign: 'center',
  },

  drawerText2: {
    fontSize: responsiveFontSize(2),
    color: '#313030',
    fontWeight: 600,
  },
  rightContent: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#57A655',
    padding: responsiveWidth(1),
    borderRadius: 10,
    gap: 10,
    position: 'relative',
  },
  image: {
    width: responsiveWidth(20),
    height: responsiveHeight(10),
    objectFit: 'cover',
    borderRadius: 10,
  },
  icon: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
});

export default PhotoGuidelines;
