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
  {id: 9, title: 'Prefer '},
  {id: 10, title: ' not to Say'},
  {id: 11, title: 'fer not to Say'},
  {id: 12, title: 'Prfer n Say'},
  {id: 13, title: 'Prenot to y'},
];

export const screens = [
  {id: 1, name: 'Start', component: StartScreen},
  {id: 2, name: 'Login', component: LoginScreen},
  {id: 3, name: 'Otp', component: OtpScreen},
  {id: 3, name: 'Terms', component: TermsScreen},
  {id: 4, name: 'PrivacyPolicy', component: PrivacyPolicyScreen},
  {id: 5, name: 'Phone', component: PhoneScreen},
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
  {id: 24, name: 'UserSect', component: UserSectScreen},
];
