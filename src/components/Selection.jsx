import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Controller, useFormContext} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {ThemeContext} from '../context/DarkThemeContext';

const Selection = ({name, item, type}) => {
  const {control, watch, setValue} = useFormContext();
  const selectedValue = watch(name);
  const savedValue = useSelector(state => state.form.formData[name] || '');
  useEffect(() => {
    if (savedValue) {
      setValue(name, savedValue);
    } else {
      console.log('no cache data');
    }
  }, [savedValue, setValue, name]);

  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, onBlur}}) => (
        <TouchableOpacity
          style={[
            styles.container,
            selectedValue === item?.title && styles.selectedContainer,
          ]}
          onPress={() => {
            onChange(selectedValue === item?.title ? '' : item?.title);
          }}
          onBlur={onBlur}>
          {type === 'marriedStatus' ? (
            <FontAwesome6
              name="handcuffs"
              size={24}
              color={selectedValue === item?.title ? '#14532d' : 'gray'}
            />
          ) : (
            <MaterialCommunityIcons
              name="message-text-outline"
              size={24}
              color={selectedValue === item?.title ? '#14532d' : 'gray'}
            />
          )}

          <Text
            style={[
              styles.title,
              selectedValue === item?.title && styles.selectedText,
            ]}>
            {item?.title}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: theme === 'dark' ? '#1C1C1C' : '#47A146',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 8,
      gap: 8,
      alignSelf: 'flex-start',
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
    },
    selectedContainer: {
      backgroundColor: theme === 'dark' ? '#16a34a' : '#47A146',
      borderColor: theme === 'dark' ? '#16a34a' : '#47A146',
    },
    title: {
      fontSize: 16,
      fontFamily: 'Poppins-SemiBold',
      opacity: theme === 'dark' ? 0.8 : 0.5,
      color: theme === 'dark' ? '#1C1C1C' : '#47A146',
    },
    selectedText: {
      color: theme === 'dark' ? '#111827' : '#ffffff',
      opacity:1,
    },
  });

export default Selection;
