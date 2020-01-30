import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';
// import { navigation } from 'react-navigation';
import { RNNotificationBanner } from 'react-native-notification-banner';
import Icon from 'react-native-vector-icons/FontAwesome'

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 130;
const CARD_WIDTH = 150;
var serialDevice = undefined;
class ShowdeviceHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude: '',
            Humidity: '',
            pH: '',
            serialDevice: '',
            date: ''
        };
    }

    componentDidMount() {
        axios.get('http://165.22.250.24:3030/senser/data_senser', {
            params: {
                serialDevice: this.props.obj.serialDevice
            }
        })
            .then(data_senser => {
                this.setState({ 
                    // latitude: data_senser.data.latitude,
                    // longitude: data_senser.data.longitude,
                    Humidity: data_senser.data.moisture,
                    pH: data_senser.data.pH,
                    serialDevice: serialDevice,
                    date: data_senser.data.date });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    gotopage() {
        //console.log(this.props.obj.serialDevice);
        this.props.pop.navigation.navigate('Devicedata', {
            serialDevice: this.props.obj.serialDevice
        })
    }

    _onClick = () => {
        props.onClick && props.onClick()
    }
    
    // Humidity_analyze(){
    //     if( (parseFloat(this.state.Humidity) <= parseFloat(this.state.humidity_low)) && (parseFloat(this.state.pH) >= parseFloat(this.state.humidity_hight))){
    //     //   return <Text>ความชื้นปรกติ</Text>
    //     } else if ( (parseFloat(this.state.Humidity) < parseFloat(this.state.humidity_low))) {
    //         let glass = <Icon name="copy" size={24} color="#FFFFFF" family={"FontAwesome"} />;
    //         RNNotificationBanner.Show({ title: "ความชื้น", subTitle: "ค่าความชื้นในดินน้อยกว่าที่คุณกำหนด ควรรดน้ำหรือเชคสถานะความชื้น", withIcon: true, icon: glass,})
    //     //   return <Text>ความชื้นผิดปรกติ</Text>
    //     }else {
            
    //         let glass = <Icon name="copy" size={24} color="#FFFFFF" family={"FontAwesome"} />;
    //         RNNotificationBanner.Show({ title: "ความชื้น", subTitle: "ค่าความชื้นในดินมากกว่าที่คุณกำหนด เชคสถานะความชื้นของคุณ", withIcon: true, icon: glass})
    //     }
    //   }

    render() {
        return (
            <TouchableOpacity onPress={this.gotopage.bind(this)}>
                <View style={styles.card}>
                    {/* <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', padding: 5, alignItems: 'flex-start' }}>
                        <Image style={{ width: 20, height: 20, resizeMode: 'contain', }}
                            source={require('../img/h1.png')}></Image>
                        <Text style={{ fontSize: 15, color: '#000000', paddingLeft: 5 }}>:</Text>
                        <Text numberOfLines={1} style={styles.cardtitle}>{this.props.obj.Humidity} </Text>
                    </View> */}

                    <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', padding: 5, alignItems: 'flex-start' }}>
                        <Image style={{ width: 30, height: 30, resizeMode: 'contain', }}
                            source={require('../img/h3.png')}></Image>
                        <Text style={{ fontSize: 20, color: '#000000', paddingLeft: 5 }}>:</Text>
                        <Text numberOfLines={1} style={styles.cardtitle}> {this.state.pH}</Text>
                    </View>
                    <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', padding: 5, alignItems: 'flex-start' }}>
                        <Image style={{ width: 30, height: 30, resizeMode: 'contain', }}
                            source={require('../img/h2.png')}></Image>
                        <Text style={{ fontSize: 20, color: '#000000', paddingLeft: 5 }}>:</Text>
                        <Text numberOfLines={1} style={styles.cardDescription}> {this.state.Humidity}</Text>
                        {/* {this.Humidity_analyze()} */}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
        justifyContent: 'flex-start',
        flexDirection:'column'
    },
    cardtitle: {
        fontSize: 18,
        marginTop: 5,
        fontWeight: "bold",
    },
    cardDescription: {
        fontSize: 18,
        color: "#444",
    },
});

export default ShowdeviceHome;