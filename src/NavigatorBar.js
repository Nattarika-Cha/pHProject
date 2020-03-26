import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator} from  'react-navigation-tabs';
import { FontAwesome5,  } from "@expo/vector-icons";
import DeviceScreen from './DeviceScreen'
import ReportScreen from './ReportScreen'
import ProfileScreen from './ProfileScreen'
import MapHomeScreen from './HomeScreen'
import AddButton from './AddButton'
import AdddeviceScreen from './AdddeviceScreen';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default createBottomTabNavigator(
  {
    Home: {
      screen: MapHomeScreen,
      navigationOptions: {
        
        tabBarLabel: 'หน้าแรก',
        tabBarIcon: ({ tintColor }) => (
          <View >            
            <Image isFocused={tintColor} source={require('../img/Path8.png')} />
          </View>),
      }
    },
    Device: {
      screen: DeviceScreen,
      navigationOptions: {
        tabBarLabel: 'อุปกรณ์',
        tabBarIcon: ({ tintColor }) => (
          <View>
           
            <Image source={require('../img/router_3.png')} />
          </View>),
      }, 
    },
    Add: {
      screen: AdddeviceScreen,
        // screen:() => null,
        navigationOptions: {
          tabBarLabel: ' ',
          tabBarIcon: <View>
<AddButton/>
          </View> 
          
             },
            //  tabBarOptions:{
            //   showLabel:false
            // }
    },
    Report: {
      screen: ReportScreen,
      navigationOptions: {
        tabBarLabel: 'รายงาน',
        tabBarIcon: ({ tintColor }) => (
          <View>
           
            <Image source={require('../img/Path360.png')} />
          </View>),
      }, initialRouteName: 'Report'
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'โปรไฟล์',
        tabBarIcon: ({ tintColor }) => (
          <View>
            
            <Image source={require('../img/Path6.png')} />
          </View>),
      }, initialRouteName: 'Profile'
    },
  },
  
  {
    activeColor: '#ffffff',
    activeTincolor: '#ffffff',
    inactiveColor: '#ffffff',
    barStyle: { backgroundColor: '#FFFFFF' },
    fontSize: hp('50%')
  }
);