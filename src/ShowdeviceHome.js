import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';
// import { navigation } from 'react-navigation';
import { RNNotificationBanner } from 'react-native-notification-banner';
import Icon from 'react-native-vector-icons/FontAwesome'
import { withNavigation } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const { width, height } = Dimensions.get("window");
// const CARD_HEIGHT = 130;
// const CARD_WIDTH = 150;
var serialDevice = undefined;
class ShowdeviceHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Humidity: '',
            pH: '',
            waterpH: '',
            serialDevice: '',
            date: ''
        };
    }

    componentWillUnmount() {
        this.focusListener.remove();
        // clearInterval(intervalId);
    }

    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            // console.log(this.props.obj.serialDevice);
            this.intervalId = setInterval(() => {
                // console.log(this.intervalId);
                axios.get('http://165.22.250.24:3030/senser/data_senser', {
                    params: {
                        serialDevice: this.props.obj.serialDevice
                    }
                })
                    .then(data_senser => {
                        //console.log(data_senser.data.moisture , " 1.data_senser.data.moisture");
                        // console.log("device: " + data_senser.data);
                        this.setState({
                            Humidity: data_senser.data.moisture,
                            pH: data_senser.data.pH,
                            waterpH: data_senser.data.WaterpH,
                            serialDevice: serialDevice,
                            date: data_senser.data.date
                        });
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }, 1000);
        });

        this.intervalId = setInterval(() => {
            // console.log(this.intervalId);
            axios.get('http://165.22.250.24:3030/senser/data_senser', {
                params: {
                    serialDevice: this.props.obj.serialDevice
                }
            })
                .then(data_senser => {
                    // console.log(this.intervalID);
                    // console.log("device: " + data_senser.data);
                    //console.log(data_senser.data.moisture , " 2.data_senser.data.moisture");
                    this.setState({
                        Humidity: data_senser.data.moisture,
                        pH: data_senser.data.pH,
                        waterpH: data_senser.data.WaterpH,
                        serialDevice: serialDevice,
                        date: data_senser.data.date
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }, 1000);

    }

    gotopage() {
        //console.log(this.props.obj.serialDevice);
        // console.log(intervalId);
        clearInterval(this.intervalId);
        if (this.props.obj.senser_type === "1") {
            this.props.pop.navigation.navigate('Devicedata', {
                serialDevice: this.props.obj.serialDevice,
                devive_EUI: this.props.obj.devive_EUI,
                port: this.props.obj.port,
                //senser_type: this.props.obj.senser_type
            })
        } else if (this.props.obj.senser_type === "2") {
            this.props.pop.navigation.navigate('DevicedataWater', {
                serialDevice: this.props.obj.serialDevice,
                devive_EUI: this.props.obj.devive_EUI,
                port: this.props.obj.port,
                //senser_type: this.props.obj.senser_type
            })
        }

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
        const { navigation } = this.props;
        this.didBlurListener = navigation.addListener('didBlur', () => {
            clearInterval(this.intervalId);
        });
        return (
            <TouchableOpacity onPress={this.gotopage.bind(this)}>
                {this.props.obj.senser_type === "1" ?
                    <View style={styles.card}>
                        <View style={{ alignItems: 'center' , marginBottom: wp('2%')}}>
                            <Text style={styles.header}>{this.props.obj.serialDevice}</Text>

                        </View>
                        <View style={{
                            faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', borderColor: '#c2c9c9',
                            borderWidth: 1,
                            borderRadius: wp('3%'), height: ('27%'), margin: ('2%'), paddingLeft: ('10%'), paddingEnd: ('10%')
                        }}>
                            <Image style={{ width: wp('6%'), height: hp('6%'), resizeMode: 'contain', marginTop: wp('-1.5%') }}
                                source={require('../img/h3.png')}></Image>
                            <Text style={{ fontSize: hp('3%'), color: '#000000', paddingLeft: wp('2%'), marginTop: wp('0.5%') }}>:</Text>
                            <Text numberOfLines={1} style={styles.cardtitle}> {this.state.pH}</Text>
                        </View>
                        <View style={{
                            faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', borderColor: '#c2c9c9',
                            borderWidth: 1,
                            borderRadius: wp('3%'), height: ('27%'), margin: ('2%'), paddingLeft: ('10%'), paddingEnd: ('10%')
                        }}>
                            <Image style={{ width: wp('6%'), height: hp('6%'), resizeMode: 'contain', marginTop: wp('-1.5%') }}
                                source={require('../img/h2.png')}></Image>
                            <Text style={{ fontSize: hp('3%'), color: '#000000', paddingLeft: wp('2%'), marginTop: wp('0.5%') }}>:</Text>
                            <Text numberOfLines={1} style={styles.cardDescription}> {this.state.Humidity}</Text>
                        </View>
                        {/* <View style={{
                        faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', borderColor: '#c2c9c9',
                        borderWidth: 1,
                        borderRadius: wp('3%'), height: ('27%'), margin: ('2%'), paddingLeft: ('10%'), paddingEnd: ('10%')
                    }}>
                        <Image style={{ width: wp('6%'), height: hp('6%'), resizeMode: 'contain',marginTop: wp('-1.5%')}}
                            source={require('../img/w-ph2.png')}></Image>
                        <Text style={{ fontSize: hp('3%'), color: '#000000', paddingLeft: wp('2%'), marginTop: wp('0.5%') }}>:</Text>
                        <Text numberOfLines={1} style={styles.cardDescription}> {this.state.Humidity}</Text>
                    </View>  */}
                    </View>
                    :
                    // waterPH
                    <View style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.header}>{this.props.obj.serialDevice}</Text>

                        </View>
                        <View style={{
                            faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', borderColor: '#c2c9c9',
                            borderWidth: 1,
                            borderRadius: wp('3%'), height: ('27%'), margin: ('2%'), paddingLeft: ('10%'), paddingEnd: ('10%')
                        }}>
                            <Image style={{ width: wp('6%'), height: hp('6%'), resizeMode: 'contain', marginTop: wp('-1.5%') }}
                                source={require('../img/w-ph2.png')}></Image>
                            <Text style={{ fontSize: hp('3%'), color: '#000000', paddingLeft: wp('2%'), marginTop: wp('0.5%') }}>:</Text>
                            <Text numberOfLines={1} style={styles.cardDescription}> {this.state.waterpH}</Text>
                        </View>
                    </View>
                }
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        height: hp('20%'),
        width: wp('30%'),
        overflow: "hidden",
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    cardtitle: {
        fontSize: hp('2%'),

        fontWeight: "bold",
        marginTop: wp('2%')
    },
    cardDescription: {

        fontSize: hp('2%'),
        marginTop: wp('2%')
    },
    header: {
        fontSize: hp('2%'),
        color: '#5BB95A',
        fontWeight: 'bold',

        alignItems: 'center',
    },
});

export default withNavigation(ShowdeviceHome);