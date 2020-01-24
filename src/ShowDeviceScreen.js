import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import axios from 'axios';

class ShowdeviceScreen extends Component {

    deviceList() {
        if(this.props.obj.status == 'ON'){
            // console.log("ON");
            return <Image style={{ padding: 5, width: 43, height: 21, resizeMode: 'contain', marginTop: 10, }}
            source={require('../img/on.png')}></Image>
        } else {
            // console.log("OFF");
            return <Image style={{ padding: 5, width: 43, height: 21, resizeMode: 'contain', marginTop: 10, }}
            source={require('../img/off.png')}></Image>
        }
    }

    render() {
        return (
            <View style={{ justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center' }}>
                <View style={{
                    flexDirection: 'column', width: 400, borderRadius: 6, backgroundColor: '#FFFFFF',
                    margin: 5, justifyContent: 'flex-start', alignItems: 'center', borderWidth: 1, borderColor: '#E5E5E5',
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: 400, }}>
                        <View style={{ flexDirection: 'row', faex: 1, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Image style={{ padding: 5, width: 65, height: 65, resizeMode: 'contain', margin: 2, }}
                                source={require('../img/device.png')}></Image>
                            <View style={{ flexDirection: 'column', faex: 1, marginLeft: 15 }}>
                                <Text style={styles.headerDevice}>เครื่องที่ 2</Text>
                                {/* <Image style={{ padding: 5, width: 43, height: 21, resizeMode: 'contain', marginTop: 10, }}
                        source={require('../img/on.png')}></Image> */}
                                {this.deviceList()}
                                {/* <Text>{this.props.obj.status}</Text> */}
                                <View style={{ flexDirection: 'row', faex: 1, backgroundColor: '#FFFFFF', margin: 5, marginTop: 10, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Image style={{ padding: 5, width: 25, height: 25, resizeMode: 'contain', }}
                                        source={require('../img/can.png')}></Image>
                                    <Text style={styles.txtcanON}>ลดน้ำเมื่อ 3ชม. 5นาที</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
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
        marginLeft: 10
    },
    txtcanOFF: {
        fontSize: 15,
        color: '#b7b7b7',
        alignItems: 'center',
        marginLeft: 10
    },
});

export default ShowdeviceScreen;