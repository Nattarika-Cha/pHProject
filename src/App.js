import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './NavigatorBar';
import DeviceScreen from './DeviceScreen';
import ReportScreen from './ReportScreen';
import ProfileScreen from './ProfileScreen';
import ProfileEditScreen from './ProfileEditScreen';
import EditdeviceScreen from './EditdeviceScreen';
import ScanScreen from './ScanScreen';
import DevicedataScreen from './DevicedataScreen';
import TitleScreen from './TitleScreen';
import ShowdeviceScreen from './ShowdeviceScreen';
import TestScreen from './TestScreen';
import ChartScreen from './ChartScreen';
import ShowreportScreen from './ShowreportScreen';

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
  ChartScreen: {
    screen: ChartScreen,
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
}, { initialRouteName: 'Login' });

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

      </View>
    );
  }
}

export default createAppContainer(RootStack);