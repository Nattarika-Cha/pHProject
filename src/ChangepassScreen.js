import React, { Component } from 'react';
import { Dimensions, SafeAreaView, Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, StatusBar, Alert, AsyncStorage } from 'react-native';
import axios from 'axios';
import { withNavigation } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var status = 0;
class ChangepassScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            passwordOld: '',
            passwordNew: '',
            CpasswordNew: ''
        };
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    _retrieveData = async () => {
        status += 1;
        try {
            const value = await AsyncStorage.getItem('user');
            if (value != null) {
                var data = JSON.parse(value);
                this.setState({ username: data.username });
                if (this.state.username != '') {
                    status = 0;
                } else {
                    if (status == 2) {
                        status = 0;
                        Alert.alert(
                            'Error',
                            'หมดอายุเข้าใช้งาน',
                            [
                                { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
                            ],
                            { cancelable: false }
                        )
                    }
                }
            } else {
                console.log("test3");
            }
        } catch (error) {
            console.log(error);
        }
    };

    onSubmit() {
        if (this.state.passwordOld == '' || this.state.passwordNew == '') {
            Alert.alert(
                'โปรดกรอกข้อมูล',
                'โปรดกรอกข้อมูลให้ครบถ้วน',
                [
                    { text: 'OK' },
                ],
                { cancelable: false }
            )
        } else {
            if (this.state.passwordNew == this.state.CpasswordNew) {
                axios.post('http://165.22.250.24:3030/user/change_pass', {
                    username: this.state.username,
                    passwordOld: this.state.passwordOld,
                    passwordNew: this.state.passwordNew,
                })
                    .then((response) => {
                        if (response.data == "Email not exists") {
                            Alert.alert(
                                'Error',
                                'เกิดข้อผิดพลาด กรุณาเข้าสู่ระบบใหม่',
                                [
                                    { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
                                ],
                                { cancelable: false }
                            )
                        } else if (response.data == "Wrong password") {
                            Alert.alert(
                                'Error',
                                'Password ไม่ถูกต้อง',
                                [
                                    { text: 'OK' },
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
                                    { text: 'OK', onPress: () => this.props.navigation.navigate('Profile') },
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
    }

    componentDidMount() { //
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            this._retrieveData();
        });
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#FAFAFA' }}>
                <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', }}>
                    <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#ffffff', }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profile') }}>
                            <Image style={{ padding: 10, width: wp("6%"), height: hp("6%"), resizeMode: 'contain', margin: hp('0.3%'), marginLeft: hp('2%') }}
                                source={require('../img/back.png')} ></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{ faex: 1, justifyContent: 'center', backgroundColor: '#FAFAFA', alignItems: 'center', padding: 5 }}>
                        <Image style={{ padding: 10, width: wp('40%'), height: hp('15%'), resizeMode: 'contain', margin: 10, marginTop: hp('10%') }}
                            source={require('../img/CP.png')}></Image>


                    </View>
                    <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ faex: 1, justifyContent: 'center', backgroundColor: '#FAFAFA', alignItems: 'center', padding: 5 }}>
                            <Text style={styles.header}>เปลียนรหัส</Text>
                        </View>
                        <View style={{ faex: 1, flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: '#FAFAFA', alignItems: 'center', padding: 5 }}>

                            <View style={styles.txtinput}>
                                <TextInput
                                    style={styles.txt}
                                    placeholder="รหัสผ่านเก่า"
                                    secureTextEntry={true}
                                    onChangeText={(passwordOld) => this.setState({ passwordOld })}
                                    value={this.state.passwordOld}
                                />
                            </View>
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
        fontSize: 20,
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
        elevation: 2,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        marginRight: 20,
        marginTop: 5,
        marginLeft: 20
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
        marginTop:5,
        margin: 7,
        borderRadius: 20,
    },
    buttonContainer: {
        margin: 10,
        height: 50,
        width: 200,
        color: "#5BB95A"
    },
    images: {
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 3
    },
});

export default withNavigation(ChangepassScreen);
