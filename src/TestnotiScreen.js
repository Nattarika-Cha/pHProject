import React, { Component } from 'react';
import { View,Text } from 'react-native-animatable';
import { withNavigation } from 'react-navigation';
import { RNNotificationBanner } from 'react-native-notification-banner';
import Icon from 'react-native-vector-icons/FontAwesome'


let glass = <Icon name="copy" size={24} color="#FFFFFF" family={"FontAwesome"} />;

RNNotificationBanner.Show({ title: "Message", subTitle: "Message", withIcon: true, icon: glass})

class TestnotiScreen extends Component{
    render(){
        return(
            <View>
                <Text>notification</Text>
            </View>
        );
    }
}

export default withNavigation(TestnotiScreen);