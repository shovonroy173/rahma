import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { Controller, useFormContext } from 'react-hook-form';

const Selection = ({ name, item, type }) => {
  const { control, watch } = useFormContext();
  const selectedValue = watch(name); // Get current selected value

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur } }) => (
        <TouchableOpacity
          style={[
            styles.container,
            selectedValue === item?.title && styles.selectedContainer, // Toggle selection style
          ]}
          onPress={() => {
            onChange(selectedValue === item?.title ? '' : item?.title); // Toggle between selected & deselected
          }}
          onBlur={onBlur}
        >
          {type === 'marriedStatus' ? (
            <FontAwesome6
              name="handcuffs"
              size={24}
              color={selectedValue === item?.title ? 'white' : '#47A146'} // Change icon color when selected
            />
          ) : (
            <MaterialCommunityIcons
              name="message-text-outline"
              size={24}
              color={selectedValue === item?.title ? 'white' : '#47A146'} // Change icon color when selected
            />
          )}

          <Text
            style={[
              styles.title,
              selectedValue === item?.title && styles.selectedText, // Change text color when selected
            ]}
          >
            {item?.title}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#47A146',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    gap: 8,
    alignSelf: 'flex-start',
    backgroundColor: 'white',
  },
  selectedContainer: {
    backgroundColor: '#47A146', // Change background when selected
    // borderColor: 'darkred',
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    color: '#47A146',
  },
  selectedText: {
    color: 'white', // Change text color when selected
  },
});

export default Selection;
