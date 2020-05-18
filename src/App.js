import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
//import HomeScreen from './Bar/NavigatorBar';
import HomeScreen from './NavigatorBar';
//import HomeScreen from './FooterBar';
//import HomeScreen from './HomeScreen';
import DeviceScreen from './DeviceScreen';
import ReportScreen from './ReportScreen';
import ProfileScreen from './ProfileScreen';
import ProfileEditScreen from './ProfileEditScreen';
import EditdeviceScreen from './EditdeviceScreen';
import ScanScreen from './ScanScreen';
import DevicedataScreen from './DevicedataScreen';
import DevicedataWaterScreen from './DevicedataWaterScreen';
import TitleScreen from './TitleScreen';
import ShowdeviceScreen from './ShowdeviceScreen';
import TestScreen from './TestScreen';
import SettingScreen from './SettingScreen';
import ManualScreen from './ManualScreen';
import Manual1Screen from './Manual1Screen';
import CameraScreen from './CameraScreen'
import ForgotpasslScreen from './ForgotpasslScreen';
import TestnotiScreen from './TestnotiScreen';
import ShowreportScreen from './ShowreportScreen';
import ChangepassScreen from './ChangepassScreen';
import ConfirmationScreen from './ConfirmationScreen';
import ChangeForgetPassScreen from './ChangeForgetPassScreen';
import AdddeviceScreen from './AdddeviceScreen';
import PlantScreen from './PlantScreen';
import FooterBar from './FooterBar';
import PlantScreen2 from './PlantScreen2';
import MapHomeScreen from './HomeScreen'

import { createBottomTabNavigator } from 'react-navigation-tabs';

import { FontAwesome5, } from "@expo/vector-icons";

const RootStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null,
    },
  },
  FooterBar: {
    screen: FooterBar,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  Device: {
    screen: DeviceScreen,
    navigationOptions: {
      header: null,
    },
  },
  Report: {
    screen: ReportScreen,
    navigationOptions: {
      header: null,
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null,
    },
  },
  ProfileEdit: {
    screen: ProfileEditScreen,
    navigationOptions: {
      header: null,
    },
  },
  Scan: {
    screen: ScanScreen,
    navigationOptions: {
      header: null,
    },
  },
  Editdevice: {
    screen: EditdeviceScreen,
    navigationOptions: {
      header: null,
    },
  },
  Devicedata: {
    screen: DevicedataScreen,
    navigationOptions: {
      header: null,
    },
  },
  DevicedataWater: {
    screen: DevicedataWaterScreen,
    navigationOptions: {
      header: null,
    },
  },
  Title: {
    screen: TitleScreen,
    navigationOptions: {
      header: null,
    },
  },
  Showdevice: {
    screen: ShowdeviceScreen,
    navigationOptions: {
      header: null,
    },
  },
  Test: {
    screen: TestScreen,
    navigationOptions: {
      header: null,
    },
  },
  Manual: {
    screen: ManualScreen,
    navigationOptions: {
      header: null,
    },
  },
  Manual1: {
    screen: Manual1Screen,
    navigationOptions: {
      header: null,
    },
  },
  Camera: {
    screen: CameraScreen,
    navigationOptions: {
      header: null,
    },
  },
  Forgotpassl: {
    screen: ForgotpasslScreen,
    navigationOptions: {
      header: null,
    },
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      header: null,
    },
  },
  Testnoti: {
    screen: TestnotiScreen,
    navigationOptions: {
      header: null,
    },
  },
  Showreport: {
    screen: ShowreportScreen,
    navigationOptions: {
      header: null,
    },
  },
  Changepass: {
    screen: ChangepassScreen,
    navigationOptions: {
      header: null,
    },
  },
  Confirmation: {
    screen: ConfirmationScreen,
    navigationOptions: {
      header: null,
    },
  },
  ChangeForgetPass: {
    screen: ChangeForgetPassScreen,
    navigationOptions: {
      header: null,
    },
  },
  AddDeviceScreen: {
    screen: AdddeviceScreen,
    navigationOptions: {
      header: null,
    },
  },
  Plant: {
    screen: PlantScreen,
    navigationOptions: {
      header: null,
    },
  },
  Plant2: {
    screen: PlantScreen2,
    navigationOptions: {
      header: null,
    },
  },
}, { initialRouteName: 'Title' });

// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: MapHomeScreen,
//       navigationOptions: {

//         tabBarLabel: '',
//         tabBarIcon: ({ tintColor }) => (
//           <View >

//             <Image isFocused={tintColor} source={require('../img/Path8.png')} />
//           </View>),
//       }
//     },
//     Device: {
//       screen: DeviceScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <View>

//             <Image source={require('../img/router_3.png')} />
//           </View>),
//       }, 
//     },
//     Add: {
//       screen: () => null,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <AddButton/>
//           ),

//       }
//     },
//     Report: {
//       screen: ReportScreen,
//       navigationOptions: {
//         // tabBarLabel: 'Report',
//         tabBarIcon: ({ tintColor }) => (
//           <View>

//             <Image source={require('../img/Path360.png')} />
//           </View>),
//       }, initialRouteName: 'Report'
//     },
//     Profile: {
//       screen: ProfileScreen,
//       navigationOptions: {
//         // tabBarLabel: 'Report',o
//         tabBarIcon: ({ tintColor }) => (
//           <View>

//             <Image source={require('../img/Path6.png')} />
//           </View>),
//       }, initialRouteName: 'Profile'
//     },
//   },
//   {
//     tabBarOptions:{
//       showLabel:false
//     }
//   }
// )
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      // <RootStack></RootStack>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <RootStack></RootStack> */}
      </View>
    );
  }
}

export default createAppContainer(RootStack);