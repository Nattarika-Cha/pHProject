import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Home() {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                source={require('../img/Path8.png')}
            //onPress={() => navigation.navigate('Home')}
            >
            </Image>
            {/* <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Home</Text> */}
        </View>
    );
}

function Device() {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginStart: 30 }}>
            <Image style={{ width: 40, height: 30 }}
                source={require('../img/router_3.png')}
            //onPress={() => { Alert.alert("click") }}
            />
            {/* <Text style={{ justifyContent: 'center', alignItems: 'center' }}> Device</Text> */}
        </View>
    );
}

function Report() {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginStart: 85 }}>
            <Image
                source={require('../img/Path360.png')}
                // onPress={() => { Alert.alert("click") }}
                style={{ marginHorizontal: 16, width: 30, height: 30 }}
                containerStyle={{ marginHorizontal: 16 }}
            />
            {/* <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Report</Text> */}
        </View>
    );
}

function Profile() {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Image
                source={require('../img/Path6.png')}
                style={{ marginHorizontal: 16, width: 30, height: 30 }}
                containerStyle={{ marginHorizontal: 16 }}
            />
            {/* <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Profile</Text> */}
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Device" component={Device} />
            <Tab.Screen name="Report" component={Report} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default function NavigatorBar3() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
