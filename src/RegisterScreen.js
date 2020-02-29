import React, { Component } from 'react';
import { Text, Label, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { set } from 'react-native-reanimated';
// import Icon from 'react-native-ionicons';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fname: '',
      lname: '',
      gender: '',
      Cpassword: '',
      fileUri: '',
      email: '',
      check_text:''
    };
  }

  // static navigationOptions = {
  //   title: 'Register',
  // };

  onSubmit() {
    if(this.state.username == '' || this.state.password == '' || this.state.fname == '' || this.state.lname == '' || this.state.gender == '' || this.state.email == ''){
      Alert.alert(
        'โปรดกรอกข้อมูล',
        'โปรดกรอกข้อมูลให้ครบถ้วน',
        [
          { text: 'OK'},
        ],
        { cancelable: false }
      )
    }else{
    if (this.state.password == this.state.Cpassword) {
      axios.post('http://165.22.250.24:3030/user/register', {
        username: this.state.username,
        password: this.state.password,
        fname: this.state.fname,
        lname: this.state.lname,
        gender: this.state.gender,
        image: this.state.fileUri,
        email: this.state.email
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

  chooseImage = () => {
    let options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });
  }

  renderFileUri() {
    if (this.state.fileUri) {
      return <Image
        source={{ uri: this.state.fileUri }}
        style={{width:  wp("27%"), height:  hp("17%"), borderRadius: 60, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#5BB95A',margin:10 , justifyContent:'center', alignItems:'center'}}
      />
    } else {
      return <Image
        source={require('../img/user.png')}
        style={{width:  wp("20%"), height:  hp("13%"), borderRadius: 60, backgroundColor: '#ffffff',margin:10 , justifyContent:'center', alignItems:'center'}}
      />
    }
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#fafafa' }}>
        <View style={{ flex: 1, backgroundColor: '#FAFaFa', flexDirection: 'column', justifyContent: 'flex-start', }}>          
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#FFFFFF', }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Image style={{ padding: 10, width: wp("6%"), height: hp("6%"), resizeMode: 'contain', margin: hp('0.3%'),marginLeft:hp('2%') }}
                  source={require('../img/back.png')}></Image>
              </TouchableOpacity>
            </View>
          <View style={{ flex: 1, backgroundColor: '#fafafa', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ faex: 1, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
              <Text style={styles.header}>ลงทะเบียน</Text>
            </View>
            <View style={{ width:  wp("27%"), height:  hp("16%"), borderRadius: 60, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#5BB95A',margin: 5 , justifyContent:'center', alignItems:'center'}}>
            {this.renderFileUri()}             
              <View style={{
                position: 'absolute', width:  wp("6.5%"), height:  hp("4%"), borderRadius: 20
                , backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', right: 0, top: 70,
                borderWidth: 1, borderColor: '#5BB95A'
              }}>
                <TouchableOpacity onPress={this.chooseImage}>
                  <Image style={{ padding: 5, width:  wp("5%"), height:  hp("3.5%"), resizeMode: 'contain', margin: 5, }}
                    source={require('../img/add.png')}></Image>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ faex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', padding: 5 }}>
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
                paddingLeft: wp('1%'),
                width: wp('75%'),
                borderColor: '#000000',
                borderWidth: 1
              }}>
                <RNPickerSelect
                  onValueChange={(gender) => this.setState({ gender })}
                  placeholder={{
                    label: 'เพศ',
                    value: '',
                  }}
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
                  placeholder="Email"
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email}
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
    borderRadius: 30,
    margin: 7,
    width: wp('75%'),
    borderColor: '#000000',
    borderWidth: 1
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

// export default RegisterScreen;
