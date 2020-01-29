import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, AsyncStorage, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import axios from 'axios';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  static navigationOptions = {
    title: 'Login',
  };

  onButtonLogin() {
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
      });
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

  // _retrieveData = async () => {
  //   //console.log("test");
  //   try {
  //     const value = await AsyncStorage.getItem('user');
  //     if (value !== null) {
  //       console.log(value);
  //     } else {
  //       console.log("No data");
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //     console.log("No data");
  //   }
  // };

  // componentDidMount() {
  //   const { navigation } = this.props;
  //   this.focusListener = navigation.addListener('didFocus', () => {
  //     console.log("test");
  //     this._retrieveData();
  //   });
  // }

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
        <ScrollView styl={{faex:1, justifyContent: 'flex-start', alignContent: 'center', alignItems:'canter' }}>
          <View style={{ height: 180 }}></View>
          <View style={{
            faex: 1, flexDirection: 'column',
            padding: 40,
            justifyContent: 'center',
            alignContent: 'center',
          }} >
            <Text style={{ fontSize: 30, color: '#000000', fontWeight: "bold" }}>ยินดีต้อนรับ</Text>
          </View>
          <View style={{ faex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', padding: 5 }}>
            <View style={{
              faex: 1, flexDirection: 'row',
              justifyContent: 'flex-start',
              alignContent: 'center',
              backgroundColor: "#FFFFFF", borderRadius: 5,
              margin: 5,
              width: 300
            }}>
              <Image style={{ padding: 10, width: 20, height: 20, resizeMode: 'contain', margin: 10, marginTop: 15 }} source={require('../img/email-icon.png')}></Image>
              <TextInput
                style={{ backgroundColor: "#FFFFFF", height: 50, padding: 10, fontSize: 15 , width: 250}}
                placeholder="ชื่อผู้ใช้"
                onChangeText={(username) => this.setState({ username })}
                value={this.state.username}
              />
            </View>
            <View style={{
              faex: 1, flexDirection: 'row',
              justifyContent: 'flex-start',
              alignContent: 'center',
              backgroundColor: "#FFFFFF", borderRadius: 5, margin: 5, width: 300, height: 50,
            }}>
              <Image style={{ padding: 10, width: 20, height: 20, resizeMode: 'contain', margin: 10, marginTop: 15 }} source={require('../img/pass.png')}></Image>
              <TextInput
                style={{ backgroundColor: "#FFFFFF", padding: 10, height: 50, fontSize: 15, width: 250 }}
                placeholder="รหัสผ่าน"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              />
            </View>
          </View>
          {/* <View style={{ flexDirection: "row-reverse", padding: 10, width: 400 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgotpassl')}>
              <Text style={styles.label}>ลืมรหัสผ่าน?</Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.buttonContainer}>
            <Button title="เข้าสู่ระบบ" color="#5BB95A" onPress={this.onButtonLogin.bind(this)} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="ลงทะเบียน" color="#5BB95A" onPress={() => this.props.navigation.navigate('Register')} />
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
    width: 300,
    marginLeft: 27,
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
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default withNavigation(LoginScreen);
