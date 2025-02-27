import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {rightImages, wrongImages} from '../../assets/data/data';

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

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  drawerContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },
  drawerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 10,
  },
  loginButton: {
    width: width - 50,
    backgroundColor: '#379A35',
    padding: 10,
    borderRadius: 100,
  },
  loginButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
    fontFamily: 'Poppins-SemiBold',
  },

  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
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

  drawerTextContainer: {display: 'flex', gap: 30, borderBottomStartRadius: 20},
  drawerText1: {
    fontSize: 30,
    color: '#111111',
    fontWeight: 600,
    textAlign: 'center',
  },

  drawerText2: {
    fontSize: 20,
    color: '#313030',
    fontWeight: 600,
  },
  rightContent: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#57A655',
    padding: 6,
    borderRadius: 10,
    gap: 10,
    position: 'relative',
  },
  image: {
    width: 110,
    height: 60,
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
