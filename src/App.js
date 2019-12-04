import React, { Component } from 'react';
import { View, Text } from 'react-native';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import DeviceScreen from './DeviceScreen';
import ReportScreen from './ReportScreen';
import ProfileScreen from './ProfileScreen';
import ProfileEditScreen from './ProfileEditScreen';

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
  Device:{
    screen: DeviceScreen,
    navigationOptions: {
      header: null,
    },
  },
  Report:{
    screen: ReportScreen,
    navigationOptions: {
      header: null,
    },
  },
  Profile:{
    screen: ProfileScreen,
    navigationOptions: {
      header: null,
    },
  },
  ProfileEdit:{
    screen: ProfileEditScreen,
    navigationOptions: {
      header: null,
    },
  },
}, 
{ initialRouteName: 'Login' },);

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