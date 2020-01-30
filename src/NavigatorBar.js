import React, { Component } from 'react';
import {View} from 'react-native';
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
        // tabBarLabel: '',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: "#5e8c5b" }]} size={25} name={'md-home'} />
          </View>),
      }
    },
    Device: {
      screen: DeviceScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: "#5e8c5b" }]} size={25} name={'md-easel'} />
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
            <Icon style={[{ color: "#5e8c5b" }]} size={25} name={'md-stats'} />
          </View>),
      }, initialRouteName: 'Report'
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        // tabBarLabel: 'Report',o
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: "#5e8c5b" }]} size={25} name={'md-contact'} />
          </View>),
      }, initialRouteName: 'Profile'
    },
  },
  {
    activeColor: '#000000',
    activeTincolor: '#000000',
    inactiveColor: '#000000',
    barStyle: { backgroundColor: '#FFFFFF' },
  }
);