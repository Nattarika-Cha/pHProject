import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class ShowdeviceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { };
      }

    deviceList() {
        if (this.props.obj.status == 'ON') {
            // console.log("ON");
            return <Image style={{ padding: '0.5%', width: wp('10%'), height: hp('6%'), resizeMode: 'contain', marginTop: hp('1%'), }}
                source={require('../img/on.png')}></Image>
        } else {
            // console.log("OFF");
            return <Image style={{ padding: '0.5%', width: wp('10%'), height: hp('6%'), resizeMode: 'contain', marginTop: hp('1%'), }}
                source={require('../img/off.png')}></Image>
        }
    }
    gotopage() {
        clearInterval(this.intervalId);
        this.props.pop.navigation.navigate('Devicedata', {
            serialDevice: this.props.obj.serialDevice,
            devive_EUI: this.props.obj.devive_EUI,
            port: this.props.obj.port
        })
    }

    _onClick = () => {
        props.onClick && props.onClick()
    }

    render() {
        return (
            <View style={{ justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center' }}>
                <TouchableOpacity onPress={this.gotopage.bind(this)}>
                    <View style={{
                        flexDirection: 'column', width: wp('85%'), borderRadius: 6, backgroundColor: '#FFFFFF',
                        margin: 5, justifyContent: 'flex-start', alignItems: 'center', borderWidth: 1, borderColor: '#E5E5E5',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.20,
                        shadowRadius: 1.41,
                        elevation: 2,
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: wp('80%'), }}>
                            <View style={{ flexDirection: 'row', faex: 1, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Image style={{ padding: 5, width: wp('15%'), height: hp('10%'), resizeMode: 'contain', margin: 2, }}
                                    source={require('../img/devce.png')}></Image>
                                <View style={{ flexDirection: 'column', faex: 1, marginLeft: wp('5%') }}>
                                    <Text style={styles.headerDevice}>{this.props.obj.serialDevice}</Text>
                                    {/* <Image style={{ padding: 5, width: 43, height: 21, resizeMode: 'contain', marginTop: 10, }}
                        source={require('../img/on.png')}></Image> */}
                                    {this.deviceList()}
                                    {/* <Text>{this.props.obj.status}</Text> */}
                                    {/* <View style={{ flexDirection: 'row', faex: 1, backgroundColor: '#FFFFFF', margin: 5, marginTop: 10, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Image style={{ padding: 5, width: 25, height: 25, resizeMode: 'contain', }}
                                        source={require('../img/can.png')}></Image>
                                    <Text style={styles.txtcanON}>ลดน้ำเมื่อ 3ชม. 5นาที</Text>
                                </View> */}
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            // <View style={styles.box}>
            //     <Image style={{ padding: 10, width: 40, height: 40, resizeMode: 'contain', margin: 10, }}
            //         source={require('../img/device.png')}></Image>
            //     <Text>Device 1</Text>

            //     <Text>Humidity</Text>
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    headerDevice: {
        fontSize: 17,
        color: '#000000',
        fontWeight: 'bold',
        alignItems: 'center',
    },
    txtcanON: {
        fontSize: 15,
        color: '#51B1FB',
        alignItems: 'center',
        marginLeft: wp('10%')
    },
    txtcanOFF: {
        fontSize: 15,
        color: '#b7b7b7',
        alignItems: 'center',
        marginLeft: wp('1%')

    },
});

export default ShowdeviceScreen;