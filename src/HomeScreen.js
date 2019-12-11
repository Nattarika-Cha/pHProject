import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import DeviceScreen from './DeviceScreen'
import ReportScreen from './ReportScreen'
import ProfileScreen from './ProfileScreen'
import Icon from 'react-native-vector-icons/Ionicons';

// import HomeIcon from './img/Group3.png'

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
      navigationOptions:{  
        tabBarLabel:'',  
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Image style={{ padding: 5, width: 35, height: 35, resizeMode: 'contain', margin: 5, borderWidth: 0, }}
                  source={require('../img/Path8.png')}></Image>  
            </View>),  
    }  
    },
    Device: { screen: DeviceScreen ,
      navigationOptions:{  
          
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={25} name={'stepforward'}/>  
            </View>),  
    }, initialRouteName:'Device' },
    Report: { screen: ReportScreen, 
      navigationOptions:{  
        tabBarLabel:'Report',  
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={25} name={'line-graph'}/>  
            </View>),  
    },
      initialRouteName: 'Report'},
    Profile: { screen: ProfileScreen, initialRouteName: 'Profile'},
  }, 
    {
      initialRouteName: 'Home',
      activeColor: '#ffffff',
      activeTincolor: '#ffffff',
      inactiveColor: '#ffffff',
      barStyle: { backgroundColor: '#ffffff' },
    }
);