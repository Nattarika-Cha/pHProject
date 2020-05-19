import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome5, } from "@expo/vector-icons";
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
        tabBarLabel: '',
        tabBarIcon: ({ tintColor }) => {
          if (tintColor === '#F34C56') {
            return <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginStart: 10 }}>
              <Image
                style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                source={require('../img/Path8.png')}
              >
              </Image>
            </View>
          } else {
            return <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginStart: 10 }}>
              <Image
                style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                source={require('../img/Path8.png')}
              >
              </Image>
            </View>
          }
        }
      }
    },
    Device: {
      screen: DeviceScreen,
      navigationOptions: {
        tabBarLabel: 'อุปกรณ์',
        tabBarIcon: ({ tintColor }) => {
          if (tintColor === '#F34C56') {
            return <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginEnd: 5 }}>
              <Image style={{ width: 40, height: 30 }}
                source={require('../img/router_3.png')}
              />
              {/* <Text style={{ justifyContent: 'center', alignItems: 'center' }}>อุปกรณ์</Text> */}
            </View>
          } else {
            return <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginEnd: 5 }}>
              <Image style={{ width: 40, height: 30 }}
                source={require('../img/router_2.png')}
              />
            </View>
          }
        },
      },
    },
    Add: {
      screen: AdddeviceScreen,
      // screen:() => null,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (
          <View>
            {/* <Image source={require('../img/plus.png')} style={{
              width: 85, height: 85, shadowColor: "#5BB95A", marginBottom: 35,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.20,
              shadowRadius: 1.41,
              elevation: 4,
            }} /> */}

            <Image source={require('../img/sc.png')} style={{
              width: 70, height: 70, shadowColor: "#5BB95A", marginBottom: 35,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.20,
              shadowRadius: 1.41,
              elevation: 4,
            }} />
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
        tabBarIcon: ({ tintColor }) => {
          if (tintColor === '#F34C56') {
            return <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginStart: 85 }}>
              <Image
                source={require('../img/Path360.png')}
                style={{ width: 30, height: 30, marginEnd: 90 }}
              />
            </View>
          } else {
            return <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginStart: 85 }}>
              <Image
                source={require('../img/Path360.png')}
                style={{ width: 30, height: 30, marginEnd: 90 }}
              />
            </View>
          }
        },
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'โปรไฟล์',
        tabBarIcon: ({ tintColor }) => {
          if (tintColor === '#F34C56') {
            return <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Image
                source={require('../img/Path6.png')}
                style={{ width: 30, height: 30, marginEnd: 15 }}
              />
            </View>
          } else {
            return <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Image
                source={require('../img/Path6.png')}
                style={{ width: 30, height: 30, marginEnd: 15 }}
              />
            </View>
          }

        },
      },
    },
  },

  {
    initialRouteName: 'Home',
    // tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: '#F34C56',
      //inactiveTintColor: '#CBCBCB',
      style: {
        backgroundColor: 'darkcerulean',
      },
      showLabel: false
    },
    // activeColor: '#000000',
    // activeTincolor: '#000000',
    // inactiveColor: '#000000',
    // barStyle: { backgroundColor: '#000000' },
    // fontSize: hp('50%'),
    // tabBarOptions: { showLabel: false }
  }
);