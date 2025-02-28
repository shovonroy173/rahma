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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
    desc: 'Only Show Yourself',
    img: require('../../assets/images/rightImage1.png'),
  },
  {
    id: 2,
    desc: 'Clear Face',
    img: require('../../assets/images/rightImage2.png'),
  },
];

export const wrongImages = [
  {
    id: 1,
    desc: 'Not a Person',
    img: require('../../assets/images/notaperson.png'),
  },
  {
    id: 2,
    desc: 'Face Covered',
    img: require('../../assets/images/facecovered.png'),
  },
  {id: 3, desc: 'Far Away', img: require('../../assets/images/faraway.png')},
  {
    id: 4,
    desc: 'Ai Image & filter',
    img: require('../../assets/images/ai.png'),
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
  {id: 17, cm: 149, ft: 4.9},
  {id: 18, cm: 152, ft: 4.1},
  {id: 19, cm: 157, ft: 4.11},
  {id: 20, cm: 160, ft: 5.0},
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

export const screens = [
  // {id: 1, name: 'Start', component: StartScreen},
  // {id: 2, name: 'Login', component: LoginScreen},
  // {id: 3, name: 'Otp', component: OtpScreen},
  // {id: 3, name: 'Terms', component: TermsScreen},
  // {id: 4, name: 'PrivacyPolicy', component: PrivacyPolicyScreen},
  // {id: 5, name: 'Phone', component: PhoneScreen},
  // {id: 6, name: 'Begin', component: BeginScreen},
  // {id: 7, name: 'Gender', component: GenderScreen},
  // {id: 8, name: 'Name', component: NameScreen},
  // {id: 9, name: 'DOB', component: DOBScreen},
  // {id: 10, name: 'BirthCountry', component: BirthCountryScreen},
  // {id: 11, name: 'PresentCountry', component: PresentCountryScreen},
  // {id: 12, name: 'Rules', component: RulesScreen},
  // {id: 13, name: 'VerificationCancel', component: VerificationCancelScreen},
  // {id: 14, name: 'Warnings', component: WarningsScreen},
  // {id: 15, name: 'VerificationOption', component: VerificationOptionScreen},
  // {id: 16, name: 'TakePhoto', component: TakePhotoScreen},
  // {id: 17, name: 'TakeFrontPhoto', component: TakeFrontPhotoScreen},
  // {id: 18, name: 'ConfirmFrontPhoto', component: ConfirmFrontPhotoScreen},
  // {id: 19, name: 'UpdatingInfo', component: UpdatingInfoScreen},
  // {id: 20, name: 'FrontError', component: FrontErrorScreen},
  // {id: 21, name: 'BackError', component: BackErrorScreen},
  // {id: 22, name: 'Loading', component: LoadingScreen},
  // {id: 23, name: 'VerificationDone', component: VerificationDoneScreen},
  // {id: 24, name: 'ProfileReady', component: ProfileReadyScreen},
  // {id: 25, name: 'UserSect', component: UserSectScreen},
  // {id: 26, name: 'Profession', component: ProfessionScreen},
  // {id: 27, name: 'Salary', component: SalaryScreen},
  // {id: 28, name: 'Ethinic', component: EthinicScreen},
  // {id: 28, name: 'EthinicOrigin', component: EthinicOriginScreen},
  // {id: 29, name: 'GrownUp', component: GrownUpScreen},
  // {id: 30, name: 'Height', component: HeightScreen},
  // {id: 31, name: 'Education', component: EducationScreen},
  // {id: 32, name: 'Notification', component: NotificationScreen},
  // {id: 33, name: 'UploadPhotos', component: UploadPhotosScreen},
  // {id: 34, name: 'SelfieVerify', component: SelfieVerifyScreen},
  // {id: 35, name: 'FaceVerification', component: FaceVerificationScreen},
  // {id: 36, name: 'VerificationComplete', component: VerificationCompleteScreen},
  // {id: 37, name: 'BottomNavigator', component: BottomNavigatorScreen},
  // {id: 38, name: 'MaritalStatus', component: MaritalStatusScreen},
  {id: 38, name: 'MaritalIntension', component: MaritalIntensionScreen},
  {id: 38, name: 'ReligiousType', component: ReligiousTypeScreen},
  // {id: 38, name: 'PrayingHabit', component: PrayingHabitScreen},
  // {id: 38, name: 'EatingHabit', component: EatingHabitScreen},
  // {id: 38, name: 'SmokingHabit', component: SmokingHabitScreen},
  // {id: 38, name: 'DrinkingHabitAlcohol', component: DrinkingHabitAlcoholScreen},
  // {id: 38, name: 'DrinkingHabitBeer', component: DrinkingHabitBeerScreen},
  // {id: 38, name: 'PresentChildren', component: PresentChildrenScreen},
  // {id: 38, name: 'FutureChildren', component: FutureChildrenScreen},
  // {id: 38, name: 'MoveAbroad', component: MoveAbroadScreen},
  // {id: 38, name: 'Convert', component: ConvertScreen},
  {id: 38, name: 'Interest', component: InterestScreen},
];
