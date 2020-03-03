import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import DeviceScreen from './DeviceScreen'
import ReportScreen from './ReportScreen'
import ProfileScreen from './ProfileScreen'
import MapHomeScreen from './HomeScreen'

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: MapHomeScreen,
      navigationOptions: {
        
        tabBarLabel: '',
        tabBarIcon: ({ tintColor }) => (
          <View >
            {/* {0 && <Image source={require('../img/Path8.png')} />} */}
            <Image isFocused={tintColor} source={require('../img/Path8.png')} />
          </View>),
      }
    },
    Device: {
      screen: DeviceScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            {/* <Icon style={[{ color: "#5e8c5b" }]} size={25} name={'md-easel'} /> */}
            <Image source={require('../img/router_3.png')} />
          </View>),
      }, initialRouteName: 'Device'
    },
    Report: {
      screen: ReportScreen,
      navigationOptions: {
        // tabBarLabel: 'Report',
        tabBarIcon: ({ tintColor }) => (
          <View>
            {/* <Icon type="bar-chart" /> */}
            {/* <Icon style={[{ color: "#5e8c5b" }]} size={25} name={'md-stats'} /> */}
            <Image source={require('../img/Path360.png')} />
          </View>),
      }, initialRouteName: 'Report'
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        // tabBarLabel: 'Report',o
        tabBarIcon: ({ tintColor }) => (
          <View>
            {/* <Icon style={[{ color: "#5e8c5b" }]} size={25} name={'md-contact'} /> */}
            <Image source={require('../img/Path6.png')} />
          </View>),
      }, initialRouteName: 'Profile'
    },
  },
  {
    activeColor: '#000000',
    activeTincolor: '#ffc13d',
    inactiveColor: '#d0e6a5',
    barStyle: { backgroundColor: '#FFFFFF' },
    borderbottomendradius:"20",
    // fontSize: hp('50%')
  }
);
