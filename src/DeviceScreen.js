import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Linking, AppRegistry, Image, FontSize, ScrollView, Alert, AsyncStorage } from 'react-native';
import { Button } from 'react-native-paper';
import { withNavigation } from 'react-navigation';


import axios from 'axios';
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import ShowdeviceScreen from './ShowdeviceScreen';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// var token = '';
var status = 0;
var pop = [];
class DeviceScreen extends Component {
  constructor(props) {
    super(props);
    pop = this.props;
    this.state = { Device: [], token: '' };
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
        //console.log(data.token);
        this.setState({ token: data.token });
        if (this.state.token != '') {
          status = 0;
          axios.get('http://165.22.250.24:3030/device/device_list', {
            params: {
              token: this.state.token
            }
          })
            .then(response => {
              const Device = response.data;
              this.setState({ Device });
            })
            .catch(function (error) {
              console.log(error);
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
      // Error retrieving data
      console.log(error);
    }
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this._retrieveData();
      // if (this.state.token != '') {
      //   status = 0;
      //   axios.get('http://165.22.250.24:3030/device/device_list', {
      //     params: {
      //       token: this.state.token
      //     }
      //   })
      //     .then(response => {
      //       const Device = response.data;
      //       this.setState({ Device });
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     })
      // } else {
      //   if (status == 5) {
      //     status = 0;
      //     Alert.alert(
      //       'Error',
      //       'หมดอายุเข้าใช้งาน',
      //       [
      //         { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
      //       ],
      //       { cancelable: false }
      //     )
      //   }
      // }
    });
  }

  deviceList() {
    return this.state.Device.map(function (object, i) {
      return <ShowdeviceScreen obj={object} key={i} pop={pop} />
    });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#FAFAFA' }}>

        <View style={{ faex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: 7 }}>

          <Text style={styles.header}>อุปกรณ์</Text>
        </View>

        {/* <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingLeft: 10, paddingRight: 10, }}>
        
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-end', }}>
            <Image style={{ padding: 10, width: 25, height: 25, resizeMode: 'contain', margin: 10, }}
              source={require('../img/noti.png')}></Image>
          </View>
        </View> */}
        {/* <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', }}>
          <View style={{ flex: 1, padding: 10, }}>
          
          </View>
        </View> */}

        <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center' }}>


          {this.deviceList()}
          
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center' }}>
            < MenuContext style={styles.container}>
              <View>
                <Menu>
                  <MenuTrigger >
                    <Text style={{ fontSize: hp('2.5%'), color: '#3ED400' }}>+ เพิ่มอุปกรณ์</Text>
                  </MenuTrigger>
                  <MenuOptions>
                    <MenuOption >
                      <TouchableOpacity >
                        <Text style={{ fontSize: hp('2.3%'),paddingLeft:6}} onPress={() => this.props.navigation.navigate('AddDeviceScreen')}>กรอกรหัสอุปกรณ์</Text>
                      </TouchableOpacity>
                    </MenuOption>
                    <MenuOption >
                      <TouchableOpacity >
                        <Text style={{ fontSize: hp('2.3%'), borderTopColor:'#000000',borderTopWidth:1,padding:6 }} onPress={() => this.props.navigation.navigate('Scan')}>แสกน QR-Code</Text>
                      </TouchableOpacity>
                    </MenuOption>

                  </MenuOptions>
                </Menu>
              </View>
            </MenuContext>
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
  headerDevice: {
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  txtcanON: {
    fontSize: 15,
    color: '#51B1FB',
    alignItems: 'center',
    marginLeft: 10
  },
  txtcanOFF: {
    fontSize: 15,
    color: '#b7b7b7',
    alignItems: 'center',
    marginLeft: 10
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
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  // },
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
  box: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    // margin: 10 ,
    // marginRight:10, 
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'flex-end',
    justifyContent: 'center',
    // height:100,
    marginBottom: 100,
    // backgroundColor: '#ecf0f1',
    width: 230
  },
});

export default withNavigation(DeviceScreen);

