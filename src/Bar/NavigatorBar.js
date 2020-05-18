import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback, TouchableOpacity ,StyleSheet , Text} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
import IconBar from './IconBar'
import TabBar from './TabBar'
import navigationBar from '../FooterBar'

import DeviceScreen from '../DeviceScreen'
import ReportScreen from '../ReportScreen'
import ProfileScreen from '../ProfileScreen'
import MapHomeScreen from '../HomeScreen'
import ScanScreen from '../ScanScreen';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default createMaterialBottomTabNavigator(
    {
        Home: {
            screen: MapHomeScreen,
            navigationOptions: () => {
            // navigationOptions: {
                // return {
                // tabBarLabel: '',
                // tabBarIcon: ({ tintColor }) => (
                //     // <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'grey', }}>
                //     //     <View style={{ position: 'absolute', alignSelf: 'center', backgroundColor: 'grey', width: 70, height: 70, borderRadius: 35, bottom: 35, zIndex: 10 }}>
                //     //         <TouchableWithoutFeedback>
                //     //             <View style={[styles.button, styles.actionBtn]}>
                //     //                 <Image style={{ width: 60, height: 60 }}
                //     //                     resizeMode="contain"
                //     //                     isFocused={tintColor}
                //     //                     source={require('../../img/sc.png')} />
                //     //             </View>
                //     //         </TouchableWithoutFeedback>
                //     //     </View>
                //     // </View>
                //     <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                //         <TouchableOpacity >
                //             <Image
                //                 style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                //                 isFocused={tintColor}
                //                 source={require('../../img/Path8.png')}>
                //             </Image>
                //         </TouchableOpacity>
                //         {/* <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Home</Text> */}
                //     </View>
                // )
                return {
                    tabBarIcon: ({ tintColor }) => {
                        var soureImge
                        if (tintColor == '#CBCBCB') {
                            soureImge = 'Home'
                        } else {
                            soureImge = 'HomeActive'
                        }
                        return <IconBar name={soureImge} size={30} color={tintColor} />
                    }
                }
                // }
            }
        },
        Device: {
            screen: DeviceScreen,
            navigationOptions: () => {
                return {
                    tabBarIcon: ({ tintColor }) => {
                        var soureImge
                        if (tintColor == '#CBCBCB') {
                            soureImge = 'Device'
                        } else {
                            soureImge = 'DeviceActive'
                        }
                        return <IconBar name={soureImge} size={26} color={tintColor} />
                    }
                }
            }
        },
        Scan: {
            screen: ScanScreen,
            navigationOptions: () => {
                return {
                    tabBarIcon: ({ tintColor }) => {
                        var soureImge
                        if (tintColor == '#CBCBCB') {
                            soureImge = 'Scan'
                        } else {
                            soureImge = 'ScanActive'
                        }
                        return <IconBar name={soureImge} size={40} color={tintColor} />
                    }
                }
            }
        },
        Report: {
            screen: ReportScreen,
            navigationOptions: () => {
                return {
                    tabBarIcon: ({ tintColor }) => {
                        var soureImge
                        if (tintColor == '#CBCBCB') {
                            soureImge = 'Report'
                        } else {
                            soureImge = 'ReportActive'
                        }
                        return <IconBar name={soureImge} size={26} color={tintColor} />
                    }
                }
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: () => {
                return {
                    tabBarIcon: ({ tintColor }) => {
                        var soureImge
                        if (tintColor == '#CBCBCB') {
                            soureImge = 'Profile'
                        } else {
                            soureImge = 'ProfileActive'
                        }
                        return <IconBar name={soureImge} size={26} color={tintColor} />
                    }
                }
            }
        },
    },
    {
        initialRouteName: 'Home', // initialization page
        // barStyle: { 
        //     position: 'absolute', 
        //     backgroundColor: 'white', 
        //     border: 2, 
        //     radius: 3, 
        //     shadowOpacity: 0.3, 
        //     shadowRadius: 3, 
        //     shadowOffset: { height: 3, width: 3 }, 
        //     x: 0, 
        //     y: 0, 
        //     // style: { marginVertical: 5 }, 
        //     bottom: 0, 
        //     width: '100%', 
        //     height: 70, 
        //     // flexDirection: 'row', 
        //     justifyContent: 'space-between', 
        //     // paddingVertical: 10, 
        //     // paddingHorizontal: 25 
        // },
        tabBarComponent: navigationBar,
        tabBarOptions: {
            activeTintColor: '#F34C56',
            inactiveTintColor: '#CBCBCB'
        },
        // tabBarPosition: 'bottom',
        // activeColor: '#000000',
        // activeTincolor: '#ffc13d',
        // inactiveColor: '#d0e6a5',
        // barStyle: { backgroundColor: '#FFFFFF' },
        // fontSize: hp('50%')
    }
);

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,

    },
    actionBtn: {

        backgroundColor: '#1E90FF',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'


    }


});