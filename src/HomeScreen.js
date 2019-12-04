import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import DeviceScreen from './DeviceScreen'
import ReportScreen from './ReportScreen'
import ProfileScreen from './ProfileScreen'

// import HomeIcon from './Grop3.png'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

export default createMaterialBottomTabNavigator(
  {
    Home: { 
      screen: HomeScreen,
      navigationOptions: {
        // headerLeft: <HomeIcon />
      }
    },
    Device: { screen: DeviceScreen , initialRouteName:'Device' },
    Report: { screen: ReportScreen, initialRouteName: 'Report'},
    Profile: { screen: ProfileScreen, initialRouteName: 'Profile'},
  }, 
    {
      initialRouteName: 'Home',
      activeColor: '#f0edf6',
      activeTincolor: '#3e2465',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: '#694fad' },
    }
);