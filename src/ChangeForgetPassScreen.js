import React, { Component } from 'react';
import { Dimensions, SafeAreaView, Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, StatusBar, Alert, AsyncStorage, } from 'react-native';
import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class ChangeForgetPassScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            CpasswordNew: ''
        };
    }

    onSubmit() {
        if (this.state.passwordNew == this.state.CpasswordNew) {
            axios.post('http://165.22.250.24:3030/user/forget_pass', {
                email: this.props.navigation.state.params.email,
                passwordNew: this.state.passwordNew,
            })
                .then((response) => {
                    if (response.data == "Email not exists") {
                        Alert.alert(
                            'Error',
                            'เกิดข้อผิดพลาด กรุณาลองใหม่',
                            [
                                { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
                            ],
                            { cancelable: false }
                        )
                    } else if (response.data == "unable edit password to database") {
                        Alert.alert(
                            'Error',
                            'เกิดข้อผิดพลาด กรุณาลองใหม่',
                            [
                                { text: 'OK' },
                            ],
                            { cancelable: false }
                        )
                    } else if (response.data == "Edit password success") {
                        Alert.alert(
                            'Success',
                            'เปลี่ยนรหัสผ่านสำเร็จ',
                            [
                                { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
                            ],
                            { cancelable: false }
                        )
                    }
                    //console.log(response.data);
                }, (error) => {
                    console.log(error);
                });
        } else {
            Alert.alert(
                'Error',
                'Password ไม่ตรงกัน',
                [
                    { text: 'OK' },
                ],
                { cancelable: false }
            )
        }
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#FAFAFA' }}>
                <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', }}>
                    <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#ffffff', }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
                            <Image style={{ padding: 10, width: 30, height: 30, resizeMode: 'contain', margin: 10 }}
                                source={require('../img/back.png')} ></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ faex: 1, justifyContent: 'center', backgroundColor: '#FAFAFA', alignItems: 'center', padding: 5 }}>
                            <Text style={styles.header}>เปลียนรหัส</Text>
                        </View>
                        <View style={{ faex: 1, flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: '#FAFAFA', alignItems: 'center', padding: 5 }}>

                            <View style={styles.txtinput}>
                                <TextInput
                                    style={styles.txt}
                                    placeholder="รหัสผ่านใหม่"
                                    secureTextEntry={true}
                                    onChangeText={(passwordNew) => this.setState({ passwordNew })}
                                    value={this.state.passwordNew}
                                />
                            </View>
                            <View style={styles.txtinput}>
                                <TextInput
                                    style={styles.txt}
                                    placeholder="ยืนยันรหัสผ่านใหม่"
                                    secureTextEntry={true}
                                    onChangeText={(CpasswordNew) => this.setState({ CpasswordNew })}
                                    value={this.state.CpasswordNew}
                                />
                            </View>
                            <View style={styles.buttonContainer}>
                                <Button title="ยืนยัน" color="#5BB95A" onPress={this.onSubmit.bind(this)} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: hp('3%'),
        color: '#5BB95A',
        fontWeight: 'bold',
        paddingVertical: 14,
        alignItems: 'center',
    },
    txtinput: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        backgroundColor: "#FFFFFF",
        borderRadius: 6,
        margin: 7,
        width: wp('75%'),
        height: hp('6%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        marginRight: wp('2%'),
        marginTop: hp('0.5%'),
        marginLeft: wp('2%')
    },
    inputBorder: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        height: 40,
    },
    buttonContainer: {
        margin: 10
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txt: {
        backgroundColor: "#FFFFFF",
        padding: 7,
        height: hp('5%'),
        width: wp('70%'),

        margin: 7,
        borderRadius: 20,
    },
    buttonContainer: {
        margin: 10,
        height: hp('8%'),
        width: wp('50%'),
        color: "#5BB95A"
    },
});

export default ChangeForgetPassScreen;
