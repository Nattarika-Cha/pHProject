import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
// import Icon from 'react-native-ionicons';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fname: '',
      lname: '',
      gender: '',
      Cpassword: ''
    };
  }

  // static navigationOptions = {
  //   title: 'Register',
  // };

  onSubmit() {
    axios.post('http://165.22.250.24:3030/user/register', {
      username: this.state.username,
      password: this.state.password,
      fname: this.state.fname,
      lname: this.state.lname,
      gender: this.state.gender
    })
      .then((response) => {
        if (response.data == "Registration success") {
          Alert.alert(
            'Success',
            'Registration success',
            [
              { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
            ],
            { cancelable: false }
          )
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
      <ScrollView style={{backgroundColor:'#fafafa'}}>
        <View style={{ flex: 1, backgroundColor: '#FAFaFa', flexDirection: 'column', justifyContent: 'flex-start', }}>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#ffffff', }}>
            <Button title="Back" color="#5BB95A" onPress={() => this.props.navigation.navigate('Login')} />
          </View>

          <View style={{ flex: 1, backgroundColor: '#fafafa', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ faex: 1, justifyContent: 'center',  alignItems: 'center', padding: 5 }}>
              <Text style={styles.header}>ลงทะเบียน</Text>
            </View>
            <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#5BB95A',margin:10 , justifyContent:'center', alignItems:'center'}}>
              <Image style={{ padding: 5, width: 80, height: 80, resizeMode: 'contain', margin: 5,}}
                source={require('../img/user.png')}></Image>

              <View style={{
                position: 'absolute', width: 40, height: 40, borderRadius: 20
                , backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', right: 0, top: 60,
                borderWidth: 1, borderColor: '#5BB95A'
              }}>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Image style={{ padding: 5, width: 30, height: 30, resizeMode: 'contain', margin: 5, }}
                    source={require('../img/add.png')}></Image>
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={{ faex: 1, flexDirection: 'column', justifyContent: 'flex-start',  alignItems: 'center', padding: 5 }}>
              <View style={styles.txtinput}>
                <TextInput
                  style={styles.txt}
                  placeholder="ชื่อ"
                  onChangeText={(fname) => this.setState({ fname })}
                  value={this.state.fname}
                />
              </View>
              <View style={styles.txtinput}>
                <TextInput
                  style={styles.txt}
                  placeholder="นามสกุล"
                  onChangeText={(lname) => this.setState({ lname })}
                  value={this.state.lname}
                />
              </View>
              <View style={{
                justifyContent: 'flex-end',
                alignContent: 'center',
                backgroundColor: "#FFFFFF",
                borderRadius: 30,
                margin: 7,
                paddingLeft: 10,
                width: 300,
                borderColor: '#000000',
                borderWidth: 1
              }}>
                <RNPickerSelect
                  onValueChange={(gender) => this.setState({ gender })}
                  items={[
                    { label: 'ชาย', value: 'Male' },
                    { label: 'หญิง', value: 'Female' },
                  ]}
                  value={this.state.gender}
                />
              </View>
              <View style={styles.txtinput}>
                <TextInput
                  style={styles.txt}
                  placeholder="ชื่อผู้ใช้"
                  onChangeText={(username) => this.setState({ username })}
                  value={this.state.username}
                />
              </View>
              <View style={styles.txtinput}>
                <TextInput
                  style={styles.txt}
                  placeholder="รหัสผ่าน"
                  secureTextEntry={true}
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password}
                />
              </View>
              <View style={styles.txtinput}>
                <TextInput
                  style={styles.txt}
                  placeholder="ยืนยัน รหัสผ่าน"
                  secureTextEntry={true}
                  onChangeText={(Cpassword) => this.setState({ Cpassword })}
                  value={this.state.Cpassword}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button title="สร้างบัญชีผู้ใช้" color="#5BB95A" onPress={this.onSubmit.bind(this)} />
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
    height: 50,
    width: 200,
    color: "#5BB95A"

},
});

export default RegisterScreen;
