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
  {id: 1, desc: 'Only Show Yourself' , img: require('../../assets/images/rightImage1.png')},
  {id: 2, desc: 'Clear Face' , img: require('../../assets/images/rightImage2.png')},

];

export const wrongImages = [
  {id: 1, desc: 'Not a Person' , img: require('../../assets/images/notaperson.png')},
  {id: 2, desc: 'Face Covered' , img: require('../../assets/images/facecovered.png')},
  {id: 3, desc: 'Far Away' , img: require('../../assets/images/faraway.png')},
  {id: 4, desc: 'Ai Image & filter' , img: require('../../assets/images/ai.png')},

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
  {id: 25, name: 'UserSect', component: UserSectScreen},
  {id: 26, name: 'Profession', component: ProfessionScreen},
  {id: 27, name: 'Salary', component: SalaryScreen},
  {id: 28, name: 'Ethinic', component: EthinicScreen},
  {id: 29, name: 'Education', component: EducationScreen},
  {id: 30, name: 'Notification', component: NotificationScreen},
  {id: 31, name: 'UploadPhotos', component: UploadPhotosScreen},
  {id: 32, name: 'SelfieVerify', component: SelfieVerifyScreen},
  {id: 33, name: 'FaceVerification', component: FaceVerificationScreen},
  {id: 34, name: 'VerificationComplete', component: VerificationCompleteScreen},
  {id: 35, name: 'BottomNavigator', component: BottomNavigatorScreen},

];
