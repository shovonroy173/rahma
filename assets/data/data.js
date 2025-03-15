/* eslint-disable react/react-in-jsx-scope */
import LoginScreen from '../../src/screens/LoginScreen';
import StartScreen from '../../src/screens/StartScreen';
import OtpScreen from '../../src/screens/OtpScreen';
import TermsScreen from '../../src/screens/TermsScreen';
import PrivacyPolicyScreen from '../../src/screens/PrivacyPolicyScreen';
import PhoneScreen from '../../src/screens/PhoneScreen';
import BeginScreen from '../../src/screens/BeginScreen';
import GenderScreen from '../../src/screens/GenderScreen';
import NameScreen from '../../src/screens/NameScreen';
import DOBScreen from '../../src/screens/DOBScreen';
import BirthCountryScreen from '../../src/screens/BirthCountryScreen';
import PresentCountryScreen from '../../src/screens/PresentCountryScreen';
import RulesScreen from '../../src/screens/RulesScreen';
import VerificationCancelScreen from '../../src/screens/VerificationCancelScreen';
import WarningsScreen from '../../src/screens/WarningsScreen';
import VerificationOptionScreen from '../../src/screens/VerificationOptionScreen';
import TakePhotoScreen from '../../src/screens/TakePhotoScreen';
import TakeFrontPhotoScreen from '../../src/screens/TakeFrontPhotoScreen';
import ConfirmFrontPhotoScreen from '../../src/screens/ConfirmFrontPhotoScreen';
import UpdatingInfoScreen from '../../src/screens/UpdatingInfoScreen';
import FrontErrorScreen from '../../src/screens/FrontErrorScreen';
import BackErrorScreen from '../../src/screens/BackErrorScreen';
import LoadingScreen from '../../src/screens/LoadingScreen';
import VerificationDoneScreen from '../../src/screens/VerificationDoneScreen';
import ProfileReadyScreen from '../../src/screens/ProfileReadyScreen';
import UserSectScreen from '../../src/screens/UserSectScreen';
import ProfessionScreen from '../../src/screens/ProfessionScreen';
import SalaryScreen from '../../src/screens/SalaryScreen';
import EthinicScreen from '../../src/screens/EthinicScreen';
import EducationScreen from '../../src/screens/EducationScreen';
import NotificationScreen from '../../src/screens/NotificationScreen';
import UploadPhotosScreen from '../../src/screens/UploadPhotosScreen';
import SelfieVerifyScreen from '../../src/screens/SelfieVerifyScreen';
import FaceVerificationScreen from '../../src/screens/FaceVerificationScreen';
import VerificationCompleteScreen from '../../src/screens/VerificationCompleteScreen';
import BottomNavigatorScreen from '../../src/screens/BottomNavigatorScreen';
import EthinicOriginScreen from '../../src/screens/EthinicOriginScreen';
import GrownUpScreen from '../../src/screens/GrownUpScreen';
import HeightScreen from '../../src/screens/HeightScreen';
import MaritalStatusScreen from '../../src/screens/MaritalStatusScreen';
import MaritalIntensionScreen from '../../src/screens/MaritalIntensionScreen';
import ReligiousTypeScreen from '../../src/screens/ReligiousTypeScreen';
import EatingHabitScreen from '../../src/screens/EatingHabitScreen';
import PrayingHabitScreen from '../../src/screens/PrayingHabitScreen';
import SmokingHabitScreen from '../../src/screens/SmokingHabitScreen';
import DrinkingHabitAlcoholScreen from '../../src/screens/DrinkingHabitAlcoholScreen';
import DrinkingHabitBeerScreen from '../../src/screens/DrinkingHabitBeerScreen';
import PresentChildrenScreen from '../../src/screens/PresentChildrenScreen';
import FutureChildrenScreen from '../../src/screens/FutureChildrenScreen';
import ConvertScreen from '../../src/screens/ConvertScreen';
import MoveAbroadScreen from '../../src/screens/MoveAboadScreen';
import InterestScreen from '../../src/screens/InterestScreen';
import PersonalityScreen from '../../src/screens/PersonalityScreen';
import BioScreen from '../../src/screens/BioScreen';
import LookingForScreen from '../../src/screens/LookingForScreen';
import FinishScreen from '../../src/screens/FinishScreen';
import FilterScreen from '../../src/screens/FilterScreen';
import EditPreviewScreen from '../../src/screens/EditPreviewScreen';
import OtpScreen2 from '../../src/screens/OtpScreen2';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const name = [
  {id: 1, name: 'firstName', placeHolder: 'First Name'},
  {id: 2, name: 'middleName', placeHolder: 'Middle Name'},
  {id: 3, name: 'lastName', placeHolder: 'Last Name'},
];

export const options = [
  {id: 'nid', title: 'National ID ', subTitle: 'Issued on or After 10/2016 '},
  {id: 'dl', title: 'Driving Licence '},
  {id: 'pass', title: 'Passport'},
  {id: 'bc', title: 'Birth Certificate'},
];

export const gender = [{id: 'male'}, {id: 'female'}];

export const warnings = [
  {
    id: 1,
    title: 'Make Sure the Details Sharp and not Covered.',
    icon: <SimpleLineIcons name="eye" size={24} />,
  },
  {
    id: 2,
    title: 'Make Sure the Details Sharp and not Covered.',
    icon: <Entypo name="light-down" size={24} />,
  },
  {
    id: 3,
    title: 'Make Sure the Details Sharp and not Covered.',
    icon: <FontAwesome name="photo" size={24} />,
  },
];

export const sects = [
  {id: 1, title: 'Sunni'},
  {id: 2, title: 'Shia'},
  {id: 3, title: 'Ahmadi'},
  {id: 4, title: 'Ibadi'},
  {id: 5, title: 'Ismaili'},
  {id: 6, title: 'Non Muslim'},
  {id: 7, title: 'Others..'},
  {id: 8, title: 'Prefer not to Say'},
];

export const education = [
  {id: 1, title: 'High School'},
  {id: 2, title: 'Undergraduate Degree'},
  {id: 3, title: 'Postgraduate Degree'},
  {id: 4, title: 'Doctorate'},
  {id: 5, title: 'Non-degree Qualification'},
  {id: 6, title: 'Other Educational Level'},
  {id: 7, title: 'No Degree & No Education'},
];

export const professions = [
  {key: 1, value: 'Accountant'},
  {key: 2, value: 'Actor'},
  {key: 3, value: 'Acting Professional'},
  {key: 4, value: 'Administrator Employee'},
  {key: 5, value: 'Air Hostess'},
  {key: 6, value: 'Advertising Professional'},
  {key: 7, value: 'Alim'},
  {key: 8, value: 'Doctor'},
  {key: 9, value: 'Engineer'},
  {key: 10, value: 'Govt. Job'},
  {key: 11, value: 'Chef'},
  {key: 12, value: 'Army'},
  {key: 13, value: 'Police'},
];

export const images = [
  {id: 1, title: 'img1'},
  {id: 2, title: 'img2'},
  {id: 3, title: 'img3'},
  {id: 4, title: 'img4'},
  {id: 5, title: 'img5'},
  {id: 6, title: 'img6'},
  {id: 7, title: 'img7'},
  {id: 8, title: 'img8'},
];

export const rightImages = [
  {
    id: 1,
    desc: 'Only Yourself',
    img: require('../../assets/images/rightImage1.webp'),
  },
  {
    id: 2,
    desc: 'Clear Face',
    img: require('../../assets/images/rightImage2.webp'),
  },
];

export const wrongImages = [
  {
    id: 1,
    desc: 'Not a Person',
    img: require('../../assets/images/notaperson.webp'),
  },
  {
    id: 2,
    desc: 'Face Covered',
    img: require('../../assets/images/facecovered.webp'),
  },
  {id: 3, desc: 'Far Away', img: require('../../assets/images/faraway.webp')},
  {
    id: 4,
    desc: 'No AI',
    img: require('../../assets/images/ai.webp'),
  },
];

export const heights = [
  {id: 1, cm: 104, ft: 3.5},
  {id: 2, cm: 106, ft: 3.6},
  {id: 3, cm: 109, ft: 3.7},
  {id: 4, cm: 112, ft: 3.8},
  {id: 5, cm: 114, ft: 3.9},
  {id: 6, cm: 116, ft: 3.1},
  {id: 7, cm: 119, ft: 3.11},
  {id: 8, cm: 121, ft: 4.0},
  {id: 9, cm: 124, ft: 4.1},
  {id: 10, cm: 126, ft: 4.2},
  {id: 11, cm: 129, ft: 4.3},
  {id: 12, cm: 131, ft: 4.4},
  {id: 13, cm: 134, ft: 4.5},
  {id: 14, cm: 136, ft: 4.6},
  {id: 15, cm: 139, ft: 4.7},
  {id: 16, cm: 142, ft: 4.8},
  {id: 17, cm: 145, ft: 4.9},
  {id: 18, cm: 147, ft: 4.1},
  {id: 19, cm: 150, ft: 4.11},
  {id: 20, cm: 152, ft: 5.0},
  {id: 21, cm: 155, ft: 5.1},
  {id: 22, cm: 157, ft: 5.2},
  {id: 23, cm: 160, ft: 5.3},
  {id: 24, cm: 163, ft: 5.4},
  {id: 25, cm: 165, ft: 5.5},
  {id: 26, cm: 168, ft: 5.6},
  {id: 27, cm: 170, ft: 5.7},
  {id: 28, cm: 173, ft: 5.8},
  {id: 29, cm: 175, ft: 5.9},
  {id: 30, cm: 178, ft: 5.1},
  {id: 31, cm: 180, ft: 5.11},
  {id: 32, cm: 183, ft: 6.0},
  {id: 33, cm: 185, ft: 6.1},
  {id: 34, cm: 188, ft: 6.2},
  {id: 35, cm: 191, ft: 6.3},
  {id: 36, cm: 193, ft: 6.4},
  {id: 37, cm: 196, ft: 6.5},
  {id: 38, cm: 198, ft: 6.6},
  {id: 39, cm: 201, ft: 6.7},
  {id: 40, cm: 203, ft: 6.8},
];

export const maritalStatus = [
  {id: 1, title: 'Never Married'},
  {id: 2, title: 'Divorced'},
  {id: 3, title: 'Separated'},
  {id: 4, title: 'Annulled'},
  {id: 5, title: 'Widowed'},
  {id: 6, title: 'Partnership'},
];

export const knowStatus = [
  {id: 1, title: 'Immediate'},
  {id: 2, title: '1-2 months'},
  {id: 3, title: '3-4 months'},
  {id: 4, title: '4-12 months'},
  {id: 5, title: '1-2 Years'},
  {id: 6, title: '2+ Years'},
];

export const marriedStatus = [
  {id: 1, title: '1-2 months'},
  {id: 2, title: '3-4 months'},
  {id: 3, title: '4-12 months'},
  {id: 4, title: '1-2 Years'},
  {id: 5, title: '3-4 Years'},
  {id: 6, title: '2-3 Years'},
  {id: 7, title: 'Agree Together'},
];

export const religiousType = [
  {id: 1, title: 'Very Practicing'},
  {id: 2, title: 'Practicing'},
  {id: 3, title: 'Moderately Practicing'},
  {id: 4, title: 'Not Practicing'},
  {id: 5, title: 'Non Muslim'},
];

export const prayingHabit = [
  {id: 1, title: 'Always Prays'},
  {id: 2, title: 'Usually Prays'},
  {id: 3, title: 'Sometimes Prays'},
  {id: 4, title: 'Never Prays'},
  {id: 5, title: 'Want to Pray'},
  {id: 6, title: 'Non Muslim'},
];

export const eatingHabit = [
  {id: 1, title: 'Yes'},
  {id: 2, title: 'No'},
  {id: 3, title: 'Mostly Try'},
  {id: 4, title: "I don't Know"},
];

export const smokingHabit = [
  {id: 1, title: 'Yes'},
  {id: 2, title: 'No'},
  {id: 3, title: 'I do Vape'},
  {id: 4, title: 'I do Shisha'},
];

export const drinkingHabit = [
  {id: 1, title: 'Yes'},
  {id: 2, title: 'No'},
];

export const presentChildren = [
  {id: 1, title: 'Yes'},
  {id: 2, title: 'No'},
  {id: 3, title: 'Adopted'},
];

export const futureChildren = [
  {id: 1, title: 'Yes'},
  {id: 2, title: 'No'},
  {id: 3, title: 'Maybe'},
  {id: 4, title: 'Prefer not to Say'},
  {id: 5, title: 'I Cant have Children '},
];

export const moveAbroad = [
  {id: 1, title: 'Yes'},
  {id: 2, title: 'No'},
  {id: 3, title: 'Maybe'},
];

export const convert = [
  {id: 1, title: 'Yes'},
  {id: 2, title: 'No'},
  {id: 3, title: 'Want to Convert'},
  {id: 4, title: 'Want to Revert'},
];

export const features = [
  {
    id: '1',
    title: 'Welcome to Our App',
    desc: 'Discover new features and enjoy a seamless experience.',
  },
  {
    id: '2',
    title: 'Stay Connected',
    desc: 'Keep in touch with your friends and never miss an update.',
  },
  {
    id: '3',
    title: 'Smart Notifications',
    desc: 'Receive important alerts and updates in real time.',
  },
  {
    id: '4',
    title: 'Explore the World',
    desc: 'Find new places, events, and experiences around you.',
  },
  {
    id: '5',
    title: 'Get Started Now',
    desc: 'Join millions of users and start your journey today!',
  },
];

export const interests = {
  arts: [
    {id: 1, title: 'Painting', icon: '🎨'},
    {id: 2, title: 'Sculpture', icon: '🗿'},
    {id: 3, title: 'Photography', icon: '📸'},
    {id: 4, title: 'Acting', icon: '🎭'},
    {id: 5, title: 'Design', icon: '🖼️'},
    {id: 6, title: 'Creative Writing', icon: '✍️'},
    {id: 7, title: 'Film Making', icon: '🎬'},
    {id: 8, title: 'Singing', icon: '🎤'},
    {id: 9, title: 'Dancing', icon: '💃'},
    {id: 10, title: 'Calligraphy', icon: '✒️'},
  ],
  technology: [
    {id: 11, title: 'Coding', icon: '💻'},
    {id: 12, title: 'Cybersecurity', icon: '🛡️'},
    {id: 13, title: 'Artificial Intelligence', icon: '🤖'},
    {id: 14, title: 'Game Development', icon: '🎮'},
    {id: 15, title: 'Web Design', icon: '🌐'},
    {id: 16, title: 'App Development', icon: '📱'},
    {id: 17, title: 'Blockchain', icon: '⛓️'},
    {id: 18, title: 'Data Science', icon: '📊'},
  ],
  sports: [
    {id: 19, title: 'Football', icon: '⚽'},
    {id: 20, title: 'Basketball', icon: '🏀'},
    {id: 21, title: 'Tennis', icon: '🎾'},
    {id: 22, title: 'Swimming', icon: '🏊'},
    {id: 23, title: 'Running', icon: '🏃'},
    {id: 24, title: 'Chess', icon: '♟️'},
    {id: 25, title: 'Gymnastics', icon: '🤸'},
    {id: 26, title: 'Martial Arts', icon: '🥋'},
  ],
  music: [
    {id: 27, title: 'Guitar', icon: '🎸'},
    {id: 28, title: 'Piano', icon: '🎹'},
    {id: 29, title: 'Drums', icon: '🥁'},
    {id: 30, title: 'Violin', icon: '🎻'},
    {id: 31, title: 'DJing', icon: '🎧'},
    {id: 32, title: 'Music Production', icon: '🎼'},
  ],
  science: [
    {id: 33, title: 'Astronomy', icon: '🔭'},
    {id: 34, title: 'Biology', icon: '🦠'},
    {id: 35, title: 'Chemistry', icon: '⚗️'},
    {id: 36, title: 'Physics', icon: '🌌'},
    {id: 37, title: 'Engineering', icon: '🛠️'},
    {id: 38, title: 'Mathematics', icon: '➗'},
  ],
  travel: [
    {id: 39, title: 'Hiking', icon: '🥾'},
    {id: 40, title: 'Camping', icon: '🏕️'},
    {id: 41, title: 'Backpacking', icon: '🎒'},
    {id: 42, title: 'Road Trips', icon: '🚗'},
    {id: 43, title: 'Beach Adventures', icon: '🏖️'},
    {id: 44, title: 'Exploring Cities', icon: '🌆'},
  ],
  community: [
    {id: 45, title: 'Volunteering', icon: '🤝'},
    {id: 46, title: 'Environmental Activism', icon: '🌿'},
    {id: 47, title: 'Animal Welfare', icon: '🐾'},
    {id: 48, title: 'Social Work', icon: '🏡'},
    {id: 49, title: 'Fundraising', icon: '💰'},
  ],
};

export const personalities = {
  extrovert: [
    {id: 1, title: 'Energetic', icon: '⚡'},
    {id: 2, title: 'Social', icon: '🎉'},
    {id: 3, title: 'Adventurous', icon: '🌍'},
    {id: 4, title: 'Charismatic', icon: '😃'},
    {id: 5, title: 'Spontaneous', icon: '🔥'},
    {id: 6, title: 'Persuasive', icon: '🗣️'},
  ],
  introvert: [
    {id: 7, title: 'Thoughtful', icon: '🤔'},
    {id: 8, title: 'Quiet', icon: '🤫'},
    {id: 9, title: 'Creative', icon: '🎨'},
    {id: 10, title: 'Empathetic', icon: '💙'},
    {id: 11, title: 'Deep Thinker', icon: '📚'},
    {id: 12, title: 'Observant', icon: '👀'},
  ],
};

export const lookingFor = [
  {id: '1', title: 'Limit Location by', subTitle: 'No Limit'},
  {id: '2', title: 'Sect', subTitle: 'No Preference'},
  {id: '3', title: 'Ethnicity', subTitle: 'No Preference'},
  {id: '4', title: 'Travel Mode', subTitle: 'No Preference'},
];
export const info = [
  {id: '1', title: 'First Name', subTitle: 'Example'},
  {id: '2', title: 'Last Name', subTitle: 'Example'},
  {id: '3', title: 'Date of Birth', subTitle: '1 May, 1998'},
  {id: '4', title: 'Gender', subTitle: 'Male'},
  {id: '5', title: 'Email Address', subTitle: 'example@gmail.com'},
  {id: '6', title: 'Phone Number', subTitle: '+8801********9'},
];

export const preferences = [
  {id: '1', title: 'Height', subTitle: 'No Limit'},
  {id: '2', title: 'Marital Status', subTitle: 'No Preference'},
];

export const salary = [
  {id: 1, placeholder: 'Min', name: 'min'},
  {id: 2, placeholder: 'Max', name: 'max'},
];

export const users = [
  {
    id: '67c7bcb38ab695921963166e',
    birthCountry: 'Andorra',
    bio: 'describe',
    convert: {id: 3, title: 'Want to Convert'},
    drinkingHabitAlcohol: {id: 2, title: 'No'},
    drinkingHabitBeer: {id: 2, title: 'No'},
    eatingHabit: {id: 1, title: 'Yes'},
    education: {id: 7, title: 'No Degree & No Education'},
    email: 'email@valid.com',
    emailOtp: '123214',
    ethnic: 'Andorra',
    ethnicOrigin: 'AmericanSamoa',
    futureChildren: {id: 3, title: 'Maybe'},
    gender: 'female',
    grownUp: 'AmericanSamoa',
    height: {id: 10, cm: 126, ft: 4.2},
    idType: {id: 'bc', title: 'Birth Certificate'},
    // images: {
    img: require('../../assets/images/preview.webp'),
    // },
    knowStatus: ['Immediate'],
    looking: {id: 1, title: 'Limit Location by', subTitle: 'No Limit'},
    maritalStatus: {id: 3, title: 'Separated'},
    marriedStatus: ['3-4 months'],
    moveAbroad: {id: 2, title: 'No'},
    phone: '01904178448',
    prayingHabit: {id: 5, title: 'Want to Pray'},
    presentChildren: {id: 2, title: 'No'},
    profession: 'Administrator Employee',
    religiousType: {id: 1, title: 'Very Practicing'},
    salary: {min: 4000, max: 40000},
    sect: {id: 6, title: 'Non Muslim'},
    selectedOptions: {
      arts: [
        {id: 4, title: 'Acting', icon: '🎭'},
        {id: 9, title: 'Dancing', icon: '💃'},
        {id: 2, title: 'Sculpture', icon: '🗿'},
        {id: 8, title: 'Singing', icon: '🎤'},
        {id: 1, title: 'Painting', icon: '🎨'},
      ],
      technology: [
        {id: 13, title: 'Artificial Intelligence', icon: '🤖'},
        {id: 14, title: 'Game Development', icon: '🎮'},
        {id: 18, title: 'Data Science', icon: '📊'},
        {id: 11, title: 'Coding', icon: '💻'},
      ],
    },
    selectedPersonalities: {
      extrovert: [
        {id: 4, title: 'Charismatic', icon: '😃'},
        {id: 1, title: 'Energetic', icon: '⚡'},
      ],
      introvert: [
        {id: 9, title: 'Creative', icon: '🎨'},
        {id: 7, title: 'Thoughtful', icon: '🤔'},
      ],
    },
    smokingHabit: {id: 2, title: 'No'},
    user: {firstName: 'first', lastName: 'last'},
    calendar: 1457145240000,
    createdAt: 1741143219326,
    updatedAt: 1741143219326,
    presentCountry: 'Bangladesh',
  },
  {
    id: '67c7bcb38ab695921963167f',
    birthCountry: 'Australia',
    bio: 'bio example',
    convert: {id: 3, title: 'Interested in Conversion'},
    drinkingHabitAlcohol: {id: 1, title: 'Yes'},
    drinkingHabitBeer: {id: 2, title: 'No'},
    eatingHabit: {id: 2, title: 'No'},
    education: {id: 6, title: 'High School Graduate'},
    email: 'email2@valid.com',
    emailOtp: '567890',
    ethnic: 'Australian',
    ethnicOrigin: 'English',
    futureChildren: {id: 2, title: 'No'},
    gender: 'male',
    grownUp: 'Australia',
    height: {id: 12, cm: 175, ft: 5.7},
    idType: {id: 'id', title: 'National ID'},
    // images: {
    img: require('../../assets/images/profile.webp'),
    // },
    knowStatus: ['Pending'],
    looking: {id: 1, title: 'Limit Location by', subTitle: 'No Limit'},
    maritalStatus: {id: 1, title: 'Single'},
    marriedStatus: ['Not Married'],
    moveAbroad: {id: 1, title: 'Yes'},
    phone: '01712345678',
    prayingHabit: {id: 3, title: 'Occasionally Prays'},
    presentChildren: {id: 2, title: 'Yes'},
    profession: 'Software Developer',
    religiousType: {id: 1, title: 'Very Practicing'},
    salary: {min: 3000, max: 50000},
    sect: {id: 7, title: 'Muslim'},
    selectedOptions: {
      arts: [
        {id: 5, title: 'Photography', icon: '📸'},
        {id: 6, title: 'Writing', icon: '✍️'},
      ],
      technology: [
        {id: 10, title: 'Web Development', icon: '🌐'},
        {id: 12, title: 'Mobile Development', icon: '📱'},
      ],
    },
    selectedPersonalities: {
      extrovert: [{id: 3, title: 'Adventurous', icon: '🌍'}],
      introvert: [{id: 5, title: 'Analytical', icon: '🧠'}],
    },
    smokingHabit: {id: 1, title: 'Yes'},
    user: {firstName: 'John', lastName: 'Doe'},
    calendar: 1457145240000,
    createdAt: 1741143219326,
    updatedAt: 1741143219326,
    presentCountry: 'Australia',
  },
  {
    id: '67c7bcb38ab6959219631680',
    birthCountry: 'USA',
    bio: 'new user example',
    convert: {id: 1, title: 'Already Converted'},
    drinkingHabitAlcohol: {id: 1, title: 'Yes'},
    drinkingHabitBeer: {id: 1, title: 'Yes'},
    eatingHabit: {id: 1, title: 'Yes'},
    education: {id: 5, title: "Bachelor's Degree"},
    email: 'email3@valid.com',
    emailOtp: '111222',
    ethnic: 'American',
    ethnicOrigin: 'Caucasian',
    futureChildren: {id: 1, title: 'Yes'},
    gender: 'female',
    grownUp: 'USA',
    height: {id: 13, cm: 160, ft: 5.3},
    idType: {id: 'id', title: 'Social Security Number'},
    // images: {
    img: require('../../assets/images/male.webp'),
    // },
    knowStatus: ['Confirmed'],
    looking: {id: 1, title: 'Limit Location by', subTitle: 'City Only'},
    maritalStatus: {id: 2, title: 'Married'},
    marriedStatus: ['1 year'],
    moveAbroad: {id: 2, title: 'No'},
    phone: '01987654321',
    prayingHabit: {id: 4, title: 'Rarely Prays'},
    presentChildren: {id: 3, title: 'Yes'},
    profession: 'Engineer',
    religiousType: {id: 1, title: 'Very Practicing'},
    salary: {min: 5000, max: 70000},
    sect: {id: 1, title: 'Christian'},
    selectedOptions: {
      arts: [
        {id: 7, title: 'Writing', icon: '✍️'},
        {id: 10, title: 'Music', icon: '🎶'},
      ],
      technology: [
        {id: 15, title: 'AI Research', icon: '🧠'},
        {id: 19, title: 'Cloud Computing', icon: '☁️'},
      ],
    },
    selectedPersonalities: {
      extrovert: [{id: 2, title: 'Talkative', icon: '🗣️'}],
      introvert: [{id: 4, title: 'Strategic', icon: '♟️'}],
    },
    smokingHabit: {id: 2, title: 'No'},
    user: {firstName: 'Jane', lastName: 'Doe'},
    calendar: 1457145240000,
    createdAt: 1741143219326,
    updatedAt: 1741143219326,
    presentCountry: 'USA',
  },
  {
    id: '67c7bcb38ab6959219631681',
    birthCountry: 'India',
    bio: 'indian user',
    convert: {id: 2, title: 'Not Converted'},
    drinkingHabitAlcohol: {id: 3, title: 'Occasionally'},
    drinkingHabitBeer: {id: 2, title: 'No'},
    eatingHabit: {id: 2, title: 'No'},
    education: {id: 4, title: 'Postgraduate Degree'},
    email: 'email4@valid.com',
    emailOtp: '222333',
    ethnic: 'Indian',
    ethnicOrigin: 'South Asian',
    futureChildren: {id: 2, title: 'No'},
    gender: 'male',
    grownUp: 'India',
    height: {id: 11, cm: 170, ft: 5.6},
    idType: {id: 'id', title: 'Voter ID'},
    // images: {
    img: require('../../assets/images/facecovered.webp'),
    // },
    knowStatus: ['Pending'],
    looking: {id: 2, title: 'Limit Location by', subTitle: 'No Limit'},
    maritalStatus: {id: 4, title: 'Divorced'},
    marriedStatus: ['5 years ago'],
    moveAbroad: {id: 3, title: 'Yes'},
    phone: '01945678901',
    prayingHabit: {id: 2, title: 'Prays Regularly'},
    presentChildren: {id: 1, title: 'Yes'},
    profession: 'Teacher',
    religiousType: {id: 2, title: 'Moderately Practicing'},
    salary: {min: 2000, max: 30000},
    sect: {id: 4, title: 'Hindu'},
    selectedOptions: {
      arts: [{id: 2, title: 'Drawing', icon: '🎨'}],
      technology: [{id: 5, title: 'Database Management', icon: '🗄️'}],
    },
    selectedPersonalities: {
      extrovert: [{id: 3, title: 'Bold', icon: '💥'}],
      introvert: [{id: 6, title: 'Focused', icon: '🎯'}],
    },
    smokingHabit: {id: 1, title: 'Yes'},
    user: {firstName: 'Amit', lastName: 'Sharma'},
    calendar: 1457145240000,
    createdAt: 1741143219326,
    updatedAt: 1741143219326,
    presentCountry: 'India',
  },
  {
    id: '67c7bcb38ab6959219631682',
    birthCountry: 'United Kingdom',
    bio: 'uk user',
    convert: {id: 2, title: 'Not Interested'},
    drinkingHabitAlcohol: {id: 3, title: 'Occasionally'},
    drinkingHabitBeer: {id: 1, title: 'Yes'},
    eatingHabit: {id: 1, title: 'Yes'},
    education: {id: 3, title: 'High School'},
    email: 'email5@valid.com',
    emailOtp: '333444',
    ethnic: 'British',
    ethnicOrigin: 'Celtic',
    futureChildren: {id: 1, title: 'Yes'},
    gender: 'female',
    grownUp: 'United Kingdom',
    height: {id: 9, cm: 160, ft: 5.2},
    idType: {id: 'id', title: 'National ID'},
    // images: {
    img: require('../../assets/images/home.webp'),
    // },
    knowStatus: ['Confirmed'],
    looking: {id: 2, title: 'Limit Location by', subTitle: 'Country Only'},
    maritalStatus: {id: 1, title: 'Single'},
    marriedStatus: ['Not Married'],
    moveAbroad: {id: 1, title: 'Yes'},
    phone: '01998765432',
    prayingHabit: {id: 5, title: 'Occasionally Prays'},
    presentChildren: {id: 2, title: 'No'},
    profession: 'Nurse',
    religiousType: {id: 1, title: 'Very Practicing'},
    salary: {min: 2000, max: 40000},
    sect: {id: 5, title: 'Jewish'},
    selectedOptions: {
      arts: [{id: 6, title: 'Writing', icon: '✍️'}],
      technology: [{id: 16, title: 'Web Design', icon: '🌐'}],
    },
    selectedPersonalities: {
      extrovert: [{id: 4, title: 'Adventurous', icon: '🏞️'}],
      introvert: [{id: 5, title: 'Observant', icon: '🔍'}],
    },
    smokingHabit: {id: 2, title: 'No'},
    user: {firstName: 'Sarah', lastName: 'Williams'},
    calendar: 1457145240000,
    createdAt: 1741143219326,
    updatedAt: 1741143219326,
    presentCountry: 'United Kingdom',
  },
];

export const languages = [
  {label: 'English', value: 'en'},
  {label: 'Arabic - العربية', value: 'ar'},
  {label: 'Bengali - বাংলা', value: 'bn'},
  {label: 'Turkish - Türkçe', value: 'tr'},
  {label: 'Urdu - اردو', value: 'ur'},
  {label: 'Persian - فارسی', value: 'fa'},
  {label: 'Malay - Melayu', value: 'ms'},
  {label: 'Pashto - پښتو', value: 'ps'},
];

export const translations = {
  en: 'Login',
  ar: 'تسجيل الدخول',
  bn: 'লগইন',
  tr: 'Giriş yap',
  ur: 'لاگ ان کریں',
  fa: 'ورود',
  ms: 'Log masuk',
  ps: 'ننوتل',
};

export const screens = [
  {id: 1, name: 'Start', component: StartScreen},
  {id: 2, name: 'Login', component: LoginScreen},
  {id: 3, name: 'Otp', component: OtpScreen},
  {id: 3, name: 'Terms', component: TermsScreen},
  {id: 4, name: 'PrivacyPolicy', component: PrivacyPolicyScreen},
  {id: 5, name: 'Phone', component: PhoneScreen},
  {id: 3, name: 'Otp2', component: OtpScreen2},

  {id: 6, name: 'Begin', component: BeginScreen},
  {id: 7, name: 'Gender', component: GenderScreen},
  {id: 8, name: 'Name', component: NameScreen},
  {id: 9, name: 'DOB', component: DOBScreen},
  {id: 10, name: 'BirthCountry', component: BirthCountryScreen},
  {id: 11, name: 'PresentCountry', component: PresentCountryScreen},
  {id: 12, name: 'Rules', component: RulesScreen},
  {id: 13, name: 'VerificationCancel', component: VerificationCancelScreen},
  {id: 14, name: 'Warnings', component: WarningsScreen},
  {id: 15, name: 'VerificationOption', component: VerificationOptionScreen},
  {id: 16, name: 'TakePhoto', component: TakePhotoScreen},
  {id: 17, name: 'TakeFrontPhoto', component: TakeFrontPhotoScreen},
  {id: 18, name: 'ConfirmFrontPhoto', component: ConfirmFrontPhotoScreen},
  {id: 19, name: 'UpdatingInfo', component: UpdatingInfoScreen},
  {id: 20, name: 'FrontError', component: FrontErrorScreen},
  {id: 21, name: 'BackError', component: BackErrorScreen},
  {id: 22, name: 'Loading', component: LoadingScreen},
  {id: 23, name: 'VerificationDone', component: VerificationDoneScreen},
  {id: 24, name: 'ProfileReady', component: ProfileReadyScreen},
  {id: 25, name: 'UserSect', component: UserSectScreen},
  {id: 26, name: 'Profession', component: ProfessionScreen},
  {id: 27, name: 'Salary', component: SalaryScreen},
  {id: 28, name: 'Ethinic', component: EthinicScreen},
  {id: 28, name: 'EthinicOrigin', component: EthinicOriginScreen},
  {id: 29, name: 'GrownUp', component: GrownUpScreen},
  {id: 30, name: 'Height', component: HeightScreen},
  {id: 31, name: 'Education', component: EducationScreen},
  {id: 32, name: 'Notification', component: NotificationScreen},
  {id: 33, name: 'UploadPhotos', component: UploadPhotosScreen},
  {id: 34, name: 'SelfieVerify', component: SelfieVerifyScreen},
  {id: 35, name: 'FaceVerification', component: FaceVerificationScreen},
  {id: 36, name: 'VerificationComplete', component: VerificationCompleteScreen},
  {id: 37, name: 'BottomNavigator', component: BottomNavigatorScreen},

  {id: 38, name: 'MaritalStatus', component: MaritalStatusScreen},
  {id: 39, name: 'MaritalIntension', component: MaritalIntensionScreen},
  {id: 40, name: 'ReligiousType', component: ReligiousTypeScreen},
  {id: 41, name: 'PrayingHabit', component: PrayingHabitScreen},
  {id: 42, name: 'EatingHabit', component: EatingHabitScreen},
  {id: 43, name: 'SmokingHabit', component: SmokingHabitScreen},
  {id: 44, name: 'DrinkingHabitAlcohol', component: DrinkingHabitAlcoholScreen},
  {id: 45, name: 'DrinkingHabitBeer', component: DrinkingHabitBeerScreen},
  {id: 46, name: 'PresentChildren', component: PresentChildrenScreen},
  {id: 47, name: 'FutureChildren', component: FutureChildrenScreen},
  {id: 48, name: 'MoveAbroad', component: MoveAbroadScreen},
  {id: 49, name: 'Convert', component: ConvertScreen},
  {id: 50, name: 'Interest', component: InterestScreen},
  {id: 51, name: 'Personality', component: PersonalityScreen},

  {id: 52, name: 'Bio', component: BioScreen},
  {id: 53, name: 'LookingFor', component: LookingForScreen},
  {id: 54, name: 'Finish', component: FinishScreen},

  {id: 55, name: 'Filter', component: FilterScreen},
  {id: 56, name: 'EditPreview', component: EditPreviewScreen},
];

// import { lazy } from 'react';

// export const screens = [
//   {name: 'Start', component: '../../src/screens/StartScreen'},
//   {name: 'Login', component: '../../src/screens/LoginScreen'},
//   {name: 'Otp', component: '../../src/screens/OtpScreen'},
//   {name: 'Terms', component: '../../src/screens/TermsScreen'},
//   {name: 'PrivacyPolicy', component: '../../src/screens/PrivacyPolicyScreen'},
//   {name: 'Phone', component: '../../src/screens/PhoneScreen'},
//   {name: 'Begin', component: '../../src/screens/BeginScreen'},
//   {name: 'Gender', component: '../../src/screens/GenderScreen'},
//   //   { name: 'Name', component: lazy(() => import('../../src/screens/NameScreen')) },
//   //   { name: 'DOB', component: lazy(() => import('../../src/screens/DOBScreen')) },
//   //   { name: 'BirthCountry', component: lazy(() => import('../../src/screens/BirthCountryScreen')) },
//   //   { name: 'PresentCountry', component: lazy(() => import('../../src/screens/PresentCountryScreen')) },
//   //   { name: 'Rules', component: lazy(() => import('../../src/screens/RulesScreen')) },
//   //   { name: 'VerificationCancel', component: lazy(() => import('../../src/screens/VerificationCancelScreen')) },
//   //   { name: 'Warnings', component: lazy(() => import('../../src/screens/WarningsScreen')) },
//   //   { name: 'VerificationOption', component: lazy(() => import('../../src/screens/VerificationOptionScreen')) },
//   //   { name: 'TakePhoto', component: lazy(() => import('../../src/screens/TakePhotoScreen')) },
//   //   { name: 'TakeFrontPhoto', component: lazy(() => import('../../src/screens/TakeFrontPhotoScreen')) },
//   //   { name: 'ConfirmFrontPhoto', component: lazy(() => import('../../src/screens/ConfirmFrontPhotoScreen')) },
//   //   { name: 'UpdatingInfo', component: lazy(() => import('../../src/screens/UpdatingInfoScreen')) },
//   //   { name: 'FrontError', component: lazy(() => import('../../src/screens/FrontErrorScreen')) },
//   //   { name: 'BackError', component: lazy(() => import('../../src/screens/BackErrorScreen')) },
//   //   { name: 'Loading', component: lazy(() => import('../../src/screens/LoadingScreen')) },
//   //   { name: 'VerificationDone', component: lazy(() => import('../../src/screens/VerificationDoneScreen')) },
//   //   { name: 'ProfileReady', component: lazy(() => import('../../src/screens/ProfileReadyScreen')) },
//   //   { name: 'UserSect', component: lazy(() => import('../../src/screens/UserSectScreen')) },
//   //   { name: 'Profession', component: lazy(() => import('../../src/screens/ProfessionScreen')) },
//   //   { name: 'Salary', component: lazy(() => import('../../src/screens/SalaryScreen')) },
//   //   { name: 'Ethinic', component: lazy(() => import('../../src/screens/EthinicScreen')) },
//   //   { name: 'EthinicOrigin', component: lazy(() => import('../../src/screens/EthinicOriginScreen')) },
//   //   { name: 'GrownUp', component: lazy(() => import('../../src/screens/GrownUpScreen')) },
//   //   { name: 'Height', component: lazy(() => import('../../src/screens/HeightScreen')) },
//   //   { name: 'Education', component: lazy(() => import('../../src/screens/EducationScreen')) },
//   //   { name: 'Notification', component: lazy(() => import('../../src/screens/NotificationScreen')) },
//   //   { name: 'UploadPhotos', component: lazy(() => import('../../src/screens/UploadPhotosScreen')) },
//   //   { name: 'SelfieVerify', component: lazy(() => import('../../src/screens/SelfieVerifyScreen')) },
//   //   { name: 'FaceVerification', component: lazy(() => import('../../src/screens/FaceVerificationScreen')) },
//   //   { name: 'VerificationComplete', component: lazy(() => import('../../src/screens/VerificationCompleteScreen')) },
//   //   // { name: 'BottomNavigator', component: lazy(() => import('./src/screens/BottomNavigatorScreen')) },
//   //   // { name: 'MaritalStatus', component: lazy(() => import('./src/screens/MaritalStatusScreen')) },
//   //   // { name: 'MaritalIntension', component: lazy(() => import('./src/screens/MaritalIntensionScreen')) },
//   //   // { name: 'ReligiousType', component: lazy(() => import('./src/screens/ReligiousTypeScreen')) },
//   //   // { name: 'PrayingHabit', component: lazy(() => import('./src/screens/PrayingHabitScreen')) },
//   //   // { name: 'EatingHabit', component: lazy(() => import('./src/screens/EatingHabitScreen')) },
//   //   // { name: 'SmokingHabit', component: lazy(() => import('./src/screens/SmokingHabitScreen')) },
//   //   // { name: 'DrinkingHabitAlcohol', component: lazy(() => import('./src/screens/DrinkingHabitAlcoholScreen')) },
//   //   // { name: 'DrinkingHabitBeer', component: lazy(() => import('./src/screens/DrinkingHabitBeerScreen')) },
//   //   // { name: 'PresentChildren', component: lazy(() => import('./src/screens/PresentChildrenScreen')) },
//   //   // { name: 'FutureChildren', component: lazy(() => import('./src/screens/FutureChildrenScreen')) },
//   //   // { name: 'MoveAbroad', component: lazy(() => import('./src/screens/MoveAbroadScreen')) },
//   //   // { name: 'Convert', component: lazy(() => import('./src/screens/ConvertScreen')) },
//   //   // { name: 'Interest', component: lazy(() => import('./src/screens/InterestScreen')) },
//   //   // { name: 'Personality', component: lazy(() => import('./src/screens/PersonalityScreen')) },
//   //   // { name: 'Bio', component: lazy(() => import('./src/screens/BioScreen')) },
//   //   // { name: 'LookingFor', component: lazy(() => import('./src/screens/LookingForScreen')) },
//   //   // { name: 'Finish', component: lazy(() => import('./src/screens/FinishScreen')) },
//   //   // { name: 'Filter', component: lazy(() => import('./src/screens/FilterScreen')) },
//   //   // { name: 'EditPreview', component: lazy(() => import('./src/screens/EditPreviewScreen')) },
// ];

// export const screens = [
//   { name: 'Start', component: lazy(() => import('../../src/screens/StartScreen')) },
//   { name: 'Login', component: lazy(() => import('../../src/screens/LoginScreen')) },
//   { name: 'Otp', component: lazy(() => import('../../src/screens/OtpScreen')) },
//   { name: 'Terms', component: lazy(() => import('../../src/screens/TermsScreen')) },
//   { name: 'PrivacyPolicy', component: lazy(() => import('../../src/screens/PrivacyPolicyScreen')) },
//   { name: 'Phone', component: lazy(() => import('../../src/screens/PhoneScreen')) },
//   { name: 'Begin', component: lazy(() => import('../../src/screens/BeginScreen')) },
//   { name: 'Gender', component: lazy(() => import('../../src/screens/GenderScreen')) },
//   { name: 'Name', component: lazy(() => import('../../src/screens/NameScreen')) },
//   { name: 'DOB', component: lazy(() => import('../../src/screens/DOBScreen')) },
//   { name: 'BirthCountry', component: lazy(() => import('../../src/screens/BirthCountryScreen')) },
//   { name: 'PresentCountry', component: lazy(() => import('../../src/screens/PresentCountryScreen')) },
//   { name: 'Rules', component: lazy(() => import('../../src/screens/RulesScreen')) },
//   { name: 'VerificationCancel', component: lazy(() => import('../../src/screens/VerificationCancelScreen')) },
//   { name: 'Warnings', component: lazy(() => import('../../src/screens/WarningsScreen')) },
//   { name: 'VerificationOption', component: lazy(() => import('../../src/screens/VerificationOptionScreen')) },
//   { name: 'TakePhoto', component: lazy(() => import('../../src/screens/TakePhotoScreen')) },
//   { name: 'TakeFrontPhoto', component: lazy(() => import('../../src/screens/TakeFrontPhotoScreen')) },
//   { name: 'ConfirmFrontPhoto', component: lazy(() => import('../../src/screens/ConfirmFrontPhotoScreen')) },
//   { name: 'UpdatingInfo', component: lazy(() => import('../../src/screens/UpdatingInfoScreen')) },
//   { name: 'FrontError', component: lazy(() => import('../../src/screens/FrontErrorScreen')) },
//   { name: 'BackError', component: lazy(() => import('../../src/screens/BackErrorScreen')) },
//   { name: 'Loading', component: lazy(() => import('../../src/screens/LoadingScreen')) },
//   { name: 'VerificationDone', component: lazy(() => import('../../src/screens/VerificationDoneScreen')) },
//   { name: 'ProfileReady', component: lazy(() => import('../../src/screens/ProfileReadyScreen')) },
//   { name: 'UserSect', component: lazy(() => import('../../src/screens/UserSectScreen')) },
//   { name: 'Profession', component: lazy(() => import('../../src/screens/ProfessionScreen')) },
//   { name: 'Salary', component: lazy(() => import('../../src/screens/SalaryScreen')) },
//   { name: 'Ethinic', component: lazy(() => import('../../src/screens/EthinicScreen')) },
//   { name: 'EthinicOrigin', component: lazy(() => import('../../src/screens/EthinicOriginScreen')) },
//   { name: 'GrownUp', component: lazy(() => import('../../src/screens/GrownUpScreen')) },
//   { name: 'Height', component: lazy(() => import('../../src/screens/HeightScreen')) },
//   { name: 'Education', component: lazy(() => import('../../src/screens/EducationScreen')) },
//   { name: 'Notification', component: lazy(() => import('../../src/screens/NotificationScreen')) },
//   { name: 'UploadPhotos', component: lazy(() => import('../../src/screens/UploadPhotosScreen')) },
//   { name: 'SelfieVerify', component: lazy(() => import('../../src/screens/SelfieVerifyScreen')) },
//   { name: 'FaceVerification', component: lazy(() => import('../../src/screens/FaceVerificationScreen')) },
//   { name: 'VerificationComplete', component: lazy(() => import('../../src/screens/VerificationCompleteScreen')) },
//   // { name: 'BottomNavigator', component: lazy(() => import('./src/screens/BottomNavigatorScreen')) },
//   // { name: 'MaritalStatus', component: lazy(() => import('./src/screens/MaritalStatusScreen')) },
//   // { name: 'MaritalIntension', component: lazy(() => import('./src/screens/MaritalIntensionScreen')) },
//   // { name: 'ReligiousType', component: lazy(() => import('./src/screens/ReligiousTypeScreen')) },
//   // { name: 'PrayingHabit', component: lazy(() => import('./src/screens/PrayingHabitScreen')) },
//   // { name: 'EatingHabit', component: lazy(() => import('./src/screens/EatingHabitScreen')) },
//   // { name: 'SmokingHabit', component: lazy(() => import('./src/screens/SmokingHabitScreen')) },
//   // { name: 'DrinkingHabitAlcohol', component: lazy(() => import('./src/screens/DrinkingHabitAlcoholScreen')) },
//   // { name: 'DrinkingHabitBeer', component: lazy(() => import('./src/screens/DrinkingHabitBeerScreen')) },
//   // { name: 'PresentChildren', component: lazy(() => import('./src/screens/PresentChildrenScreen')) },
//   // { name: 'FutureChildren', component: lazy(() => import('./src/screens/FutureChildrenScreen')) },
//   // { name: 'MoveAbroad', component: lazy(() => import('./src/screens/MoveAbroadScreen')) },
//   // { name: 'Convert', component: lazy(() => import('./src/screens/ConvertScreen')) },
//   // { name: 'Interest', component: lazy(() => import('./src/screens/InterestScreen')) },
//   // { name: 'Personality', component: lazy(() => import('./src/screens/PersonalityScreen')) },
//   // { name: 'Bio', component: lazy(() => import('./src/screens/BioScreen')) },
//   // { name: 'LookingFor', component: lazy(() => import('./src/screens/LookingForScreen')) },
//   // { name: 'Finish', component: lazy(() => import('./src/screens/FinishScreen')) },
//   // { name: 'Filter', component: lazy(() => import('./src/screens/FilterScreen')) },
//   // { name: 'EditPreview', component: lazy(() => import('./src/screens/EditPreviewScreen')) },
// ];
// export default screens;
