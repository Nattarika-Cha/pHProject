import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, AsyncStorage, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      check_text:''
    };
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  static navigationOptions = {
    title: 'Login',
  };

  onButtonLogin() {
    if(this.state.username == '' || this.state.password == ''){
      Alert.alert(
        'โปรดกรอกข้อมูล',
        'โปรดกรอกข้อมูลให้ครบถ้วน',
        [
          { text: 'OK'},
        ],
        { cancelable: false }
      )
    }else{
    axios.post('http://165.22.250.24:3030/user/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then((response) => {
        if (response.data === 'Email not exists' || response.data === 'Wrong password') {
          Alert.alert(
            'Error',
            response.data,
            [
              { text: 'OK' },
            ],
            { cancelable: false }
          )
        } else {
          this._storeData(response.data);
        }
        //console.log(response.data);
      }, (error) => {
        console.log(error);
        Alert.alert(
          'Error',
          'มีปัญหากับการเชื่อมต่อ Server กรุณาลองใหม่ภายหลัง',
          [
            { text: 'OK' },
          ],
          { cancelable: false }
        )
      });
    }
  }

  _storeData = async (user) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
      this.props.navigation.navigate('Home');
    } catch (error) {
      Alert.alert(
        'Error',
        'เข้าสู่ระบบผิดพลาด กรุณาลองใหม่อีกครั้ง',
        [
          { text: 'OK' },
        ],
        { cancelable: false }
      )
    }
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this.setState({
        username: '',
        password: ''
      });
    });
  }


  render() {
    return (
      <ImageBackground style={styles.container2} source={require('../img/bg_login.jpg')}>
        <ScrollView styl={{ faex: 1, justifyContent: 'flex-start', alignContent: 'center', alignItems: 'canter' }}>
          <View style={{ height: hp('25%') }}></View>
          <View style={{
            faex: 1, flexDirection: 'column',
            padding: 40,
            justifyContent: 'center',
            alignContent: 'center',
          }} >
            <Text style={{ fontSize: hp('4%'), color: '#1f1f1f1', fontWeight: "bold" }}>ยินดีต้อนรับ</Text>
          </View>
          <View style={{ faex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', padding: 5 }}>
            <View style={{
              faex: 1, flexDirection: 'row',
              justifyContent: 'flex-start',
              alignContent: 'center',
              backgroundColor: "#FFFFFF", borderRadius: 5,
              margin: 5,
              width: wp('75%')
            }}>           
              <Image style={{ padding: 10, width: wp('5%'), height: hp('3.5%'), resizeMode: 'contain', margin: 10, marginTop: hp('1.5%') }} source={require('../img/email-icon.png')}></Image>
              <TextInput
                style={{ backgroundColor: "#FFFFFF", height: hp('7%'), padding: 10, fontSize: 15, width: wp('63%') }}
                placeholder="ชื่อผู้ใช้"
                onChangeText={(username) => this.setState({ username })}
                value={this.state.username}
              />
            </View>
            <View style={{
              faex: 1, flexDirection: 'row',
              justifyContent: 'flex-start',
              alignContent: 'center',
              backgroundColor: "#FFFFFF", borderRadius: 5, margin: 5, width: wp('75%'),
            }}>
              <Image style={{ padding: 10, width: wp('5%'), height: hp('3.5%'), resizeMode: 'contain', margin: 10, marginTop: hp('1.5%') }} source={require('../img/pass.png')}></Image>
              <TextInput
                style={{ backgroundColor: "#FFFFFF", padding: 10, height: hp('7%'), fontSize: 15, width: wp('63%') }}
                placeholder="รหัสผ่าน"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row-reverse", padding: 10, width: wp('100%') }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgotpassl')}>
              <Text style={styles.label}>ลืมรหัสผ่าน?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="เข้าสู่ระบบ" color="#5BB95A" onPress={this.onButtonLogin.bind(this)} />
          </View>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'center', padding: 5, marginLeft: wp('12%'), width: wp('75%') }}>
            <Text style={{
              fontSize: hp('2.2%'),
              marginLeft: wp('2%'),
              color: '#FFFFFF',
              fontWeight: 'bold',
            }}>
              หากยังไม่มีบัญชี!
                    </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.label2}>สร้างบัญชีใหม่</Text>
            </TouchableOpacity>
          </View>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'center',alignItems:'center', padding: 5, marginLeft: wp('12%'), width: wp('75%'),marginTop:hp('10%')}}>
          <Image style={{ padding: 10, width: wp("6%"), height: hp("6%"), resizeMode: 'contain', margin: hp('0.3%'),marginLeft:hp('2%') }}
                  source={require('../img/i.png')}></Image>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Manual')}>
            
              <Text style={styles.label2}>ช่วยเหลือ</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    margin: 10,
    fontSize: 15,
    width: wp('75%'),
    marginLeft: wp('12%'),
    fontWeight: 'bold'




  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container2: {
    flex: 1,
    position: 'relative',
    resizeMode: 'cover'
  },

  label: {
    fontSize: hp('2%'),
    marginRight: wp('10%'),
    color: '#5BB95A'
  },
  label2: {
    fontSize: hp('2.2%'),
    marginLeft: wp('2%'),
    color: '#5BB95A',
    fontWeight: 'bold'
  }
});

export default withNavigation(LoginScreen);
