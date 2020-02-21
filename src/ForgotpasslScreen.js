import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert, Switch } from 'react-native';
import axios from 'axios';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class ForgotpasslScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  onSubmit() {
    axios.post('http://165.22.250.24:3030/forget/forget_pass', {
      email: this.state.email
    })
      .then((response) => {
        if (response.data == "Change password success") {
          this.props.navigation.navigate('Confirmation', {
            email: this.state.email
          });
        } else {
          Alert.alert(
            'Error',
            response.data,
            [
              { text: 'OK' },
            ],
            { cancelable: false }
          )
        }
        //console.log(response.data);
      }, (error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#FAFAFA' }}>
        <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', }}>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#ffffff', }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <Image  style={{ padding: 10, width: wp("6%"), height: hp("6%"), resizeMode: 'contain', margin: hp('0.3%'),marginLeft:hp('2%')}}
                source={require('../img/back.png')}></Image>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ faex: 1, justifyContent: 'center', backgroundColor: '#FAFAFA', alignItems: 'center', padding: 5 }}>
              <Image style={{ padding: 10, width: wp('70%'), height: hp('30%'), resizeMode: 'contain', margin: 10, marginTop: hp('10%') }}
                source={require('../img/1.png')}></Image>
              <Text style={styles.header}>
                เราจะทำการส่งรหัสยืนยันตัวตนไปยังอีเมล์
                 </Text>
              <Text style={styles.header}>
                ที่ได้ทำงานลงทะเบียนไว้
              </Text>

            </View>
            <View style={{ marginTop: hp('1%') }}>
              <View style={{
                faex: 1, flexDirection: 'row',
                justifyContent: 'flex-start',
                alignContent: 'center',
                backgroundColor: "#FFFFFF", borderRadius: 5,
                margin: 5,
                width: wp('80%')
              }}>
                <Image style={{padding: 10, width: wp('5%'), height: hp('3.5%'), resizeMode: 'contain', margin: 10, marginTop: hp('1.5%')}} source={require('../img/email-icon.png')}></Image>
                <TextInput
                  style={{ backgroundColor: "#FFFFFF", height: hp('6%'), padding: 10, fontSize: hp('2.5%') }}
                  placeholder="กรุณากรอกอีเมล์"
                  onChangeText={(email) => this.setState({ email })}
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button title="ส่งรหัสยืนยันตัวตน" color="#5BB95A" onPress={this.onSubmit.bind(this)}/>
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

    fontWeight: 'bold',

    alignItems: 'center',
    justifyContent: 'center'
  },
  header3: {
    fontSize: 18,

    fontWeight: 'bold',
    paddingVertical: 14,
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
    alignItems: 'center',
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
    height: 33,
    margin: 7,
    borderRadius: 20,
  },
  buttonContainer: {
    margin: 10,
    height: hp('6%'),
    width: wp('60%'),
    color: "#5BB95A"

  },
});

export default ForgotpasslScreen;