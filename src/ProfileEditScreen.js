import React, { Component } from 'react';
import { Dimensions, SafeAreaView, Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, StatusBar, Alert, AsyncStorage, Handle, Header ,Title} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';
import { withNavigation } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var status = 0;
class ProfileEditScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fname: '',
      lname: '',
      // fileData: '',
      fileUri: ''
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
        // We have data!!
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
              console.log(response.data);
              this.setState({
                fname: response.data.fname,
                lname: response.data.lname,
                gender: response.data.gender,
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
      } else {
        console.log("test3");
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  // static navigationOptions = {
  //   title: 'Register',
  // };

  onSubmit() {
    if (this.state.username == '' || this.state.fname == '' || this.state.lname == '' || this.state.gender == '') {
      Alert.alert(
        'โปรดกรอกข้อมูล',
        'โปรดกรอกข้อมูลให้ครบถ้วน',
        [
          { text: 'OK' },
        ],
        { cancelable: false }
      )
    } else {
      axios.post('http://165.22.250.24:3030/user/edituser', {
        username: this.state.username,
        fname: this.state.fname,
        lname: this.state.lname,
        gender: this.state.gender,
        image: this.state.fileUri
      })
        .then((response) => {
          if (response.data == "Edit user success") {
            Alert.alert(
              'Success',
              'Edit user success',
              [
                { text: 'OK', onPress: () => this.props.navigation.navigate('Profile') },
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
  }

  componentDidMount() { //
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this._retrieveData();
    });
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
        style={{ width: wp("27%"), height: hp("17%"), borderRadius: 60, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#5BB95A', margin: 10, justifyContent: 'center', alignItems: 'center' }}
      />
    } else {
      return <Image
        source={require('../img/us.png')}
        style={{ width: wp("27%"), height: hp("17%"), borderRadius: 60, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#5BB95A', margin: 10, justifyContent: 'center', alignItems: 'center' }}
      />
    }
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
                

          <View style={{ flex: 1, backgroundColor: 'FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ faex: 1, justifyContent: 'center', backgroundColor: '#FAFAFA', alignItems: 'center', padding: 5 }}>
              <Text style={styles.header}>แก้ไขข้อมูลส่วนตัว</Text>
            </View>
            <View style={{ width: wp("25%"), height: hp("15%"), borderRadius: wp('60%'), backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#5BB95A', margin: 10, justifyContent: 'center', alignItems: 'center' }}>
              {this.renderFileUri()}
              <View style={{
                position: 'absolute', width: wp("6.5%"), height: hp("4%"), borderRadius: 20
                , backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', right: 0, top: 80,
                borderWidth: 1, borderColor: '#5BB95A'
              }}>
                <TouchableOpacity onPress={this.chooseImage}>
                  <Image style={{ padding: 5, width: wp("5%"), height: hp("3.5%"), resizeMode: 'contain', margin: 5, }}
                    source={require('../img/add.png')}></Image>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ faex: 1, flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: '#FAFAFA', alignItems: 'center', padding: 5, marginTop: hp('1%') }}>
              <View style={styles.txtinput}>
                <TextInput
                  style={styles.txt}
                  placeholder="ชื่อ                          "
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
                borderWidth: 1,
                height:hp('8%'),
              }}>
                <RNPickerSelect
                  onValueChange={(gender) => this.setState({ gender })}
                  title="เพศ"
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
                  placeholder="ชื่อผู้ใช้"
                  onChangeText={(username) => this.setState({ username })}
                  value={this.state.username}
                  // display: "none"
                  editable={false}
                />
              </View>
              {/* <View style={styles.txtinput}>
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
                  placeholder="ยืนยันรหัสผ่าน"
                  secureTextEntry={true}
                  onChangeText={(Cpassword) => this.setState({ Cpassword })}
                  value={this.state.Cpassword}
                />
              </View> */}
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
    borderRadius: wp('30%'),
    margin: 7,
    width: wp('75%'),
    borderColor: '#000000',
    borderWidth: 1,
    height:hp('8%'),
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

export default withNavigation(ProfileEditScreen);
