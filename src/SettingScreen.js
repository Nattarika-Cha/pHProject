import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert, Switch, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import axios from 'axios';

var status = 0;

class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      // soundValue: '' ,
      messegeValue: true,
      gpsValue: true,
      token : '',
    };
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  // soundValue = value => {
  //   this.setState({ soundValue: value });
  //   this.onSubmit();
  // };

  messegeValue = value => {
      this.setState({ messegeValue: value });
      // this.onSubmit();
  };

  gpsValue = value => {
    this.setState({ gpsValue: value });
    // this.onSubmit();
  };

  _retrieveData = async () => {
    status += 1;
    try {
      const value = await AsyncStorage.getItem('user');
      if (value != null) {
        // We have data!!
        var data = JSON.parse(value);
        this.setState({ token: data.token });
        if (this.state.token != '') {
          status = 0;
          axios.get('http://165.22.250.24:3030/setting/get_setting', {
            params: {
              token: this.state.token
            }
          })
            .then(response => {
              const setting = response.data;
              console.log(setting);
              this.setState({ 
                // soundValue: setting.sound ,
                messegeValue: setting.messege ,
                gpsValue: setting.gps 
               });
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

  onSubmit() {
    axios.post('http://165.22.250.24:3030/setting/add_setting', {
        // sound: this.state.soundValue,
        messege: this.state.messegeValue,
        gps: this.state.gpsValue,
        token: this.state.token,
    })
      .then((response) => {
        if (response.data == "Save success" || response.data == "Edit setting success") {
          console.log("save");
        } else {
            console.log("no save");
        }
        //console.log(response.data);
      }, (error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    // var device = [];
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this._retrieveData();
    });
  }

  render() {
    this.onSubmit();
    return (
      <ScrollView style={{ backgroundColor: '#FAFAFA' }}>
        <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', }}>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#ffffff', }}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
            <Image style={{ padding: 10, width: 30, height: 30, resizeMode: 'contain', margin: 10 }}
              source={require('../img/back.png')}></Image>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ faex: 1, justifyContent: 'center', backgroundColor: '#FAFAFA', alignItems: 'center', padding: 5 }}>
              <Text style={styles.header}>ตั้งค่า</Text>
            </View>
            {/* <View style={{ flexDirection: 'row', width: 300, height: 64, borderRadius: 6, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
              <Image style={{ padding: 5, width: 35, height: 35, resizeMode: 'contain', margin: 16, }}
                source={require('../img/sound.png')}></Image>
              <Text style={styles.header3}> เสียงการแจ้งเตือน </Text>
              <View style={styles.container}>
                <Switch
                  onValueChange={this.soundValue}
                  value={this.state.soundValue}
                />
              </View>
            </View> */}
            <View style={{ flexDirection: 'row', width: 300, height: 64, borderRadius: 6, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
              <Image style={{ padding: 5, width: 35, height: 35, resizeMode: 'contain', margin: 16, }}
                source={require('../img/noti.png')}></Image>
              <Text style={styles.header3}> ข้อความการแจ้งเตือน </Text>
              <View style={styles.container}>
                <Switch
                  onValueChange={this.messegeValue}
                  value={this.state.messegeValue}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', width: 300, height: 64, borderRadius: 6, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
              <Image style={{ padding: 5, width: 35, height: 35, resizeMode: 'contain', margin: 16, }}
                source={require('../img/gps.png')}></Image>
              <Text style={styles.header3}> GPS </Text>
              <View style={styles.container}>
                <Switch
                  onValueChange={this.gpsValue}
                  value={this.state.gpsValue}
                />
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
    height: 50,
    width: 200,
    color: "#5BB95A"

  },
});


export default withNavigation(SettingScreen);
