import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import DeviceScreen from './DeviceScreen'
// import ReportScreen from './ReportScreen'
// import ProfileScreen from './ProfileScreen'


class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#FAFAFA' }}>
        <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
          <Text style={{fontSize: 15, color: '#5483EF',padding: 10, margin:10}}>Bangkok, Thailand</Text>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'center',padding: 10, margin:10 }}>
            <Image style={{ width: 35, height: 35, resizeMode: 'contain',}}
              source={require('../img/tm.png')}></Image>
              <Text style={{fontSize: 20, color: '#000000',paddingLeft:5}}>35°c</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', }}>
          <View style={{ flexDirection: "row-reverse", padding: 10 }}>
            <TouchableOpacity >
              <Text style={{ fontSize: 17, color: '#3ED400' }}>+ Add Device</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', }}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', }}>
              {/* <Button></Button> */}
              <View style={styles.box}>
                <Image style={{ padding: 10, width: 40, height: 40, resizeMode: 'contain', margin: 10, }}
                  source={require('../img/device.png')}></Image>
                <Text>Device 1</Text>
                <Text>On</Text>
                <Text>Humidity</Text>
              </View>
              <View style={styles.box}>
                <Image style={{ padding: 10, width: 40, height: 40, resizeMode: 'contain', margin: 10, }}
                  source={require('../img/device.png')}></Image>
                <Text>Device 2</Text>
                <Text>Off</Text>
                <Text>Humidity</Text>
              </View>
              <View style={styles.box}>
                <Image style={{ padding: 10, width: 40, height: 40, resizeMode: 'contain', margin: 10, }}
                  source={require('../img/device.png')}></Image>
                <Text>Device 3</Text>
                <Text>Off</Text>
                <Text>Humidity</Text>
              </View>
              <View style={styles.box}>
                <Image style={{ padding: 10, width: 40, height: 40, resizeMode: 'contain', margin: 10, }}
                  source={require('../img/device.png')}></Image>
                <Text>Device 4</Text>
                <Text>Off</Text>
                <Text>Humidity</Text>
              </View>
            </View>
          </View>
        </View>
        <View>

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

export default HomeScreen;

