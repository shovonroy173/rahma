import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useRef} from 'react';
import ImageUpload from '../components/ImageUpload';
import {images, info, lookingFor} from '../../assets/data/data';
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import PhotoGuidelines from '../components/PhotoGuidelines';
import Button from '../components/Button';
import Option from '../components/Option';

const EditScreen = () => {
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.open();
  };

  const closeDrawer = () => {
    drawerRef.current.close();
  };
  return (
    // <Drawer
    //   ref={drawerRef}
    //   type="overlay"
    //   content={<PhotoGuidelines closeDrawer={closeDrawer} />}
    //   tapToClose={true}
    //   openDrawerOffset={0.4}
    //   panCloseMask={0.4}
    //   closedDrawerOffset={-3}
    //   styles={drawerStyles}
    //   side="bottom"
    //   onClose={closeDrawer}>
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 20, gap: 40}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Complete Profile</Text>
          <Text style={styles.number}>70%</Text>
        </View>
        <View style={styles.allImages}>
          {images.map(item => (
            <ImageUpload key={item.id} name={`images.${item.title}`} />
          ))}
          {/* <TouchableOpacity onPress={openDrawer} style={styles.guidelineButton}>
            <Icon name="plus" size={24} color={'#43A041'} />

            <Text style={styles.guidelineText}>Photo</Text>
            <Text style={styles.guidelineText}>Guidelines</Text>
          </TouchableOpacity> */}
        </View>
        {/* <Button title="Continue" id="images.img1" /> */}

        <View style={styles.mainContainer}>
          {lookingFor.map(item => (
            <Option key={item.id} item={item} id="filter3" />
          ))}
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Personal Information</Text>

          <View style={styles.mainContainer}>
            {info.map(item => (
              <Option key={item.id} item={item} id="filter4" />
            ))}
          </View>
          <View style={styles.memberContainer}>
            <View style={styles.memberTextContainer}>
              <Text style={styles.memberText}>Notification</Text>
              <Text style={styles.memberText2}>
                Enable Notification to Stay Up to Date with New Likes, Matches
                and Massages
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.learnMore}>Active Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
    // </Drawer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    gap: 20,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  allImages: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    alignItems: 'center',
  },
  guidelineButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  guidelineText: {
    color: '#43A041',
    fontSize: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 600,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
  },
  mainContainer: {
    gap: 20,
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    gap: 40,
  },
  number: {
    fontSize: 25,
    fontWeight: 600,
    backgroundColor: '#47A146',
    color: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 20,
  },

  memberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#98C097',
    // opacity: 0.7,
    borderRadius: 10,
  },
  memberTextContainer: {
    width: '65%',
  },
  memberText: {
    fontSize: 24,
    color: 'white',
    opacity: 0.7,
    fontWeight: 600,
  },
  memberText2: {
    fontSize: 14,
    color: 'white',
    opacity: 0.7,
  },
  learnMore: {
    color: 'white',
    backgroundColor: '#379A35',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    fontSize: 16,
    fontWeight: 600,
    opacity: 1,
  },
});
const drawerStyles = {
  drawer: {shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 3},
};

export default EditScreen;
