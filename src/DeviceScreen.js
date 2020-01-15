import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Linking, AppRegistry, Image, FontSize, ScrollView, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import axios from 'axios';

import ShowDeviceScreen from './ShowdeviceScreen';

class DeviceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { Device: [] };
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      axios.get('http://165.22.250.24:3030/device/device_list')
        .then(response => {
          const Device = response.data;
          this.setState({ Device });
        })
        .catch(function (error) {
          console.log(error);
        })
    });
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  deviceList() {
    return this.state.Device.map(function (object, i) {
      return <ShowDeviceScreen obj={object} key={i} />
    });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#FAFAFA' }}>
        <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
          <Button>Device</Button>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', }}>
            <Image style={{ padding: 10, width: 25, height: 25, resizeMode: 'contain', margin: 10, }}
              source={require('../img/noti.png')}></Image>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', }}>
          <View style={{ flexDirection: "row-reverse", padding: 10 }}>
            <TouchableOpacity >
              <Text style={{ fontSize: 17, color: '#3ED400' }} onPress={() => this.props.navigation.navigate('Scan')}>+ Add Device</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center' }}>
          {this.deviceList()}
        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    color: '#000000',
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
    marginLeft:10
  },
  txtcanOFF: {
    fontSize: 15,
    color: '#b7b7b7',
    alignItems: 'center',
    marginLeft:10
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
  }
});

export default withNavigation(DeviceScreen);

