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
            <Image isFocused={tintColor} source={require('../img/home.png')} style={{ width: 25, height: 25,}} />
          </View>),
      }
    },
    Device: {
      screen: DeviceScreen,
      navigationOptions: {
        tabBarLabel: 'อุปกรณ์',
        tabBarIcon: ({ tintColor }) => (
          <View>
           <Image source={require('../img/devicei.png')}  style={{ width: 25, height: 25,}} />
          </View>),
      }, 
    },
    Add: {
      screen: AdddeviceScreen,
        // screen:() => null,
        navigationOptions: {
          tabBarLabel: ' ',
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Image source={require('../img/plus.png')}   style={{ width: 65, height: 65,shadowColor: "#5BB95A",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 4, }} />
            </View>),
//           tabBarIcon: <View              >
// <Image source={require('../img/plus.png')}   style={{ width: 50, height: 50, }} />

//           </View> 
          
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
           
            <Image source={require('../img/report.png')}   style={{ width: 25, height: 25,}}/>
          </View>),
      }, initialRouteName: 'Report'
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'โปรไฟล์',
        tabBarIcon: ({ tintColor }) => (
          <View>
            
            <Image source={require('../img/pro.png')}  style={{ width: 25, height: 25,}}/>
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