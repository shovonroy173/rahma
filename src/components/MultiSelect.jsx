// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import {Controller, useFormContext} from 'react-hook-form';
// import ProgressContainer from '../components/ProgressContainer';
// import Button from '../components/Button';

// const MultiSelect = ({currentPage, navigation, title, options, id, path}) => {
//   const {control, setValue, watch} = useFormContext();
//   const selectedOptions = watch(id);

//   const toggleSelection = (category, item) => {
//     const currentSelection = selectedOptions[category] || [];
//     const isSelected = currentSelection.includes(item.title);

//     const newCategorySelection = isSelected
//       ? currentSelection.filter(data => data !== item.title)
//       : [...currentSelection, item.title];

//     setValue(id, {
//       ...selectedOptions,
//       [category]: newCategorySelection,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.contentContainer}>
//         <ProgressContainer navigation={navigation} currentPage={currentPage} />
//         <Text style={styles.title}>{title}</Text>
//         <Text style={styles.subtitle}>
//           Select Up to 15 interests to Make your Profile Stand Out!
//         </Text>
//       </View>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Controller
//           control={control}
//           name={id}
//           render={() => (
//             <View>
//               {Object.keys(options).map(category => (
//                 <View key={category} style={styles.categoryContainer}>
//                   <Text style={styles.categoryTitle}>
//                     {category.toUpperCase()}
//                   </Text>
//                   <View style={styles.optionsContainer}>
//                     {options[category]
//                       .sort((a, b) => a.title.localeCompare(b.title))
//                       .map(item => (
//                         <TouchableOpacity
//                           key={item.id}
//                           style={[
//                             styles.optionButton,
//                             selectedOptions[category]?.includes(item.title) &&
//                               styles.selectedOption,
//                           ]}
//                           onPress={() => toggleSelection(category, item)}>
//                           <Text style={styles.optionText}>{item.icon}</Text>
//                           <Text
//                             style={[
//                               styles.optionText,
//                               selectedOptions[category]?.includes(item.title) &&
//                                 styles.selectedOptionText,
//                             ]}>
//                             {item.title}
//                           </Text>
//                         </TouchableOpacity>
//                       ))}
//                   </View>
//                 </View>
//               ))}
//             </View>
//           )}
//         />
//       </ScrollView>
//       <View style={styles.buttonContainer}>
//         <Button title="Continue" navigation={navigation} path={path} id={id} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     padding: 30,
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     paddingBottom: 20,
//   },
//   title: {
//     fontSize: 30,
//     marginBottom: 10,
//     fontWeight: 600,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   categoryContainer: {
//     marginBottom: 20,
//   },
//   contentContainer: {
//     gap: 10,
//   },
//   categoryTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     textTransform: 'capitalize',
//   },
//   optionsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 10,
//   },
//   optionButton: {
//     display: 'flex',
//     flexDirection: 'row',
//     gap: 8,
//     paddingVertical: 7,
//     paddingHorizontal: 15,
//     borderWidth: 1,
//     borderColor: '#78B377',
//     borderRadius: 15,
//     backgroundColor: 'white',
//   },
//   selectedOption: {
//     backgroundColor: '#47A146',
//     borderColor: '#47A146',
//   },
//   optionText: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: 500,
//   },
//   selectedOptionText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 500,
//   },
//   buttonContainer: {
//     paddingVertical: 20,
//     width: '100%',
//   },
// });

// export default MultiSelect;


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';
import ProgressContainer from '../components/ProgressContainer';
import Button from '../components/Button';

const MultiSelect = ({ currentPage, navigation, title, options, id, path }) => {
  const { control, setValue, watch } = useFormContext();
  const selectedOptions = watch(id);

  const toggleSelection = (category, item) => {
    const currentSelection = selectedOptions[category] || [];
    const isSelected = currentSelection.some(selectedItem => selectedItem.id === item.id);

    const newCategorySelection = isSelected
      ? currentSelection.filter(data => data.id !== item.id)
      : [...currentSelection, item];

    setValue(id, {
      ...selectedOptions,
      [category]: newCategorySelection,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <ProgressContainer navigation={navigation} currentPage={currentPage} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          Select Up to 15 interests to Make your Profile Stand Out!
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Controller
          control={control}
          name={id}
          render={() => (
            <View>
              {Object.keys(options).map(category => (
                <View key={category} style={styles.categoryContainer}>
                  <Text style={styles.categoryTitle}>
                    {category.toUpperCase()}
                  </Text>
                  <View style={styles.optionsContainer}>
                    {options[category]
                      .sort((a, b) => a.title.localeCompare(b.title))
                      .map(item => (
                        <TouchableOpacity
                          key={item.id}
                          style={[
                            styles.optionButton,
                            selectedOptions[category]?.some(selectedItem => selectedItem.id === item.id) && styles.selectedOption,
                          ]}
                          onPress={() => toggleSelection(category, item)}>
                          <Text style={styles.optionText}>{item.icon}</Text>
                          <Text
                            style={[
                              styles.optionText,
                              selectedOptions[category]?.some(selectedItem => selectedItem.id === item.id) && styles.selectedOptionText,
                            ]}>
                            {item.title}
                          </Text>
                        </TouchableOpacity>
                      ))}
                  </View>
                </View>
              ))}
            </View>
          )}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Continue" navigation={navigation} path={path} id={id} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 600,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  contentContainer: {
    gap: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  optionButton: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#78B377',
    borderRadius: 15,
    backgroundColor: 'white',
  },
  selectedOption: {
    backgroundColor: '#47A146',
    borderColor: '#47A146',
  },
  optionText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 500,
  },
  selectedOptionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 500,
  },
  buttonContainer: {
    paddingVertical: 20,
    width: '100%',
  },
});

export default MultiSelect;
