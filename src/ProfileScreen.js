import React, { Component } from 'react';
import { Text,Linking, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert, fontFamily, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import axios from 'axios';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
var status = 0;
class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fname: '',
      lname: '',
      gender: '',
      image: ''
    };
  }

  // _removeData = async () => {
  //   try {
  //     await AsyncStorage.removeItem('user');
  //     this.props.navigation.navigate('Login');
  //   } catch (error) {
  //     Alert.alert(
  //       'Error',
  //       'ออกสู่ระบบผิดพลาด กรุณาลองใหม่',
  //       [
  //         { text: 'OK' },
  //       ],
  //       { cancelable: false }
  //     )
  //   }
  // };

  clearAsyncStorage = async () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  }

  _retrieveData = async () => {
    status += 1;
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        var data = JSON.parse(value);
        this.setState({ username: data.username });
        if (this.state.username != '') {
          status = 0;
          axios.get('http://165.22.250.24:3030/user/pro', {
            params: {
              username: this.state.username
            }
          })
            .then(response => {
              //console.log(response.data);
              this.setState({
                fname: response.data.fname,
                lname: response.data.lname,
                gender: response.data.gender,
                image: response.data.image
              });
              // console.log(this.state.Device.length);
              // console.log(this.state.Device);

            })
            .catch(function (error) {
              // console.log(error);
            })
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
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'ดึงข้อมูลผิดพลาด กรุณาลองใหม่',
        [
          { text: 'OK' },
        ],
        { cancelable: false }
      )
      //console.log(error);
    }
  };

  componentWillUnmount() {
    this.focusListener.remove();
  }

  componentDidMount(){ //
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus' , () => {
      this._retrieveData();
    });
  }

  // imageprofile(){
  //   //console.log(this.state.gender)
  //   if (this.state.gender == "Male"){
  //     return <Image style={{ padding: 5, width: 80, height: 80, resizeMode: 'contain', margin: 5,}}
  //       source={require('../img/us.png')} ></Image>
  //   } else {
  //     return <Image style={{ padding: 5, width: 80, height: 80, resizeMode: 'contain', margin: 5,}}
  //       source={require('../img/usw.png')} ></Image>
  //   }
  // }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', }}>
        <View style={{ faex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: 40 }}>
          <View style={{ width:  wp("28%"), height:  hp("17%"), borderRadius: 60, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#5BB95A', margin: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width:  wp("28%"), height:  hp("17%"), borderRadius: 60, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#5BB95A', margin: 10, justifyContent: 'center', alignItems: 'center' }}
            source={{ uri: this.state.image }}>
            </Image>
          </View>
          <Text style={styles.header2}>{this.state.fname} {this.state.lname}</Text>
          <View style={styles.button}>
            <Button title="แก้ไขข้อมูล" color="#5BB95A" type="clear" onPress={() => this.props.navigation.navigate('ProfileEdit')} />
          </View>
        </View>

        <View style={{ faex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: 40 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting')}>
            <View style={{ flexDirection: 'row', width: wp('80%'), height: hp('9%'), borderRadius: 6, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
              <Image style={{ padding: 5, width: wp('10%'), height: hp('5%'), resizeMode: 'contain', margin: 16, }}
                source={require('../img/setting.png')}></Image>
              <Text style={styles.header3}> ตั้งค่า </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Manual')}>
            <View style={{ flexDirection: 'row',width: wp('80%'), height: hp('9%'), borderRadius: 6, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
              <Image style={{ padding: 5, width: wp('10%'), height: hp('5%'), resizeMode: 'contain', margin: 16, }}
                source={require('../img/help.png')}></Image>
              <Text style={styles.header3}>  แนะนำการใช้งาน</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.clearAsyncStorage.bind(this)}>
            <View style={{ flexDirection: 'row', width: wp('80%'), height: hp('9%'), borderRadius: 6, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
              <Image style={{ padding: 5, width: wp('10%'), height: hp('5%'), resizeMode: 'contain', margin: 16, }}
                source={require('../img/log-out.png')}></Image>
              <Text style={styles.header3}> ออกจากระบบ </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
  header2: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    paddingVertical: 14,
    alignItems: 'center',
  },
  header3: {
    fontFamily: 'Prompt',
    fontSize: 17,
    color: '#000000',

    alignItems: 'center',
  },
  txtinput: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    margin: 7,
    width: 300,
    borderColor: '#000000',
    borderWidth: 1
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
  button: {
    padding: 2,
    margin: 2,
    fontSize: 15
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txt: {
    backgroundColor: "#FFFFFF",
    padding: 7,
    height: 33,
    margin: 7,
    borderRadius: 20,
  },
  buttonContainer: {
    margin: 10,
    height: 50,
    width: 200,
    color: "#5BB95A"

  },
});

export default withNavigation(ProfileScreen);

