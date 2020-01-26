import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert, Switch } from 'react-native';

class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { switchValue: false };


  }
  toggleSwitch = value => {

    this.setState({ switchValue: value });

  };
  render() {
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
            <View style={{ flexDirection: 'row', width: 343, height: 64, borderRadius: 6, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
              <Image style={{ padding: 5, width: 35, height: 35, resizeMode: 'contain', margin: 16, }}
                source={require('../img/sound.png')}></Image>
              <Text style={styles.header3}> เสียงการแจ้งเตือน </Text>
              <View style={styles.container}>
                <Switch
                  onValueChange={this.toggleSwitch}
                  value={this.state.switchValue}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', width: 343, height: 64, borderRadius: 6, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
              <Image style={{ padding: 5, width: 35, height: 35, resizeMode: 'contain', margin: 16, }}
                source={require('../img/noti.png')}></Image>
              <Text style={styles.header3}> ข้อความการแจ้งเตือน </Text>
              <View style={styles.container}>
                <Switch
                  onValueChange={this.toggleSwitch}
                  value={this.state.switchValue}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', width: 343, height: 64, borderRadius: 6, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
              <Image style={{ padding: 5, width: 35, height: 35, resizeMode: 'contain', margin: 16, }}
                source={require('../img/gps.png')}></Image>
              <Text style={styles.header3}> GPS </Text>
              <View style={styles.container}>
                <Switch
                  onValueChange={this.toggleSwitch}
                  value={this.state.switchValue}
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


export default SettingScreen;
