
import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';

import DeviceScreen from './DeviceScreen'
import ReportScreen from './ReportScreen'
import ProfileScreen from './ProfileScreen'
import MapHomeScreen from './HomeScreen'
export default class BottomNavigator extends Component {

    toggleOpen = () => {
        

    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'grey' }}>
                <View style={{ position: 'absolute', alignSelf: 'center', backgroundColor: 'grey', width: 70, height: 70, borderRadius: 35, bottom: 35, zIndex: 10 }}>
                    <TouchableWithoutFeedback onPress={this.toggleOpen}>
                        <View style={[styles.button, styles.actionBtn]}>
                            <Image style={{ width: 60, height: 60 }} resizeMode="contain" source={require('../img/sc.png')} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{
                    position: 'absolute', backgroundColor: 'white', border: 2, radius: 3, shadowOpacity: 0.3, shadowRadius: 3, shadowOffset: { height: 3, width: 3 },
                    x: 0, y: 0, style: { marginVertical: 5 }, bottom: 0, width: '100%', height: 70, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 25
                }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => { Alert.alert('click') }}>
                            <Image style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                                source={require('../img/Path8.png')}
                                onPress={() => { Alert.alert("") }}>
                            </Image>
                        </TouchableOpacity>
                        <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Home</Text>
                    </View>

                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginStart: 30 }}>
                        <TouchableOpacity onPress={() => { Alert.alert("click") }}>
                            <Image style={{ width: 40, height: 30 }}
                                source={require('../img/router_3.png')}
                                onPress={() => { Alert.alert("click") }}
                            />
                        </TouchableOpacity>
                        <Text style={{ justifyContent: 'center', alignItems: 'center' }}> Device</Text>
                    </View>

                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginStart: 85 }}>
                        <TouchableOpacity onPress={() => { Alert.alert("click") }} >
                            <Image
                                source={require('../img/Path360.png')}
                                onPress={() => { Alert.alert("click") }}
                                style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                containerStyle={{ marginHorizontal: 16 }}
                            />
                        </TouchableOpacity>
                        <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Report</Text>
                    </View>

                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => { Alert.alert("click") }} >
                            <Image
                                source={require('../img/Path6.png')}
                                style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                containerStyle={{ marginHorizontal: 16 }}
                            />
                        </TouchableOpacity>
                        <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Profile</Text>
                    </View>
                    {/* </View> */}
                </View>
            </View>
        );
    }
}


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
