import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert, Switch } from 'react-native';

class ForgotpasslScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#FAFAFA' }}>
        <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', }}>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#ffffff', }}>
            <Image style={{ padding: 10, width: 30, height: 30, resizeMode: 'contain', margin: 10 }}
              source={require('../img/back.png')}></Image>
          </View>

          <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ faex: 1, justifyContent: 'center', backgroundColor: '#FAFAFA', alignItems: 'center', padding: 5 }}>
              <Image style={{ padding: 10, width: 318.5, height: 229, resizeMode: 'contain', margin: 10, marginTop: 40 }}
                source={require('../img/1.png')}></Image>
              <Text style={styles.header}>
                เราจะทำการส่งรหัสผ่านใหม่ไปยังอีเมล์
                 </Text>
              <Text style={styles.header}>
                ที่ได้ทำงานลงทะเบียนไว้
              </Text>

            </View>
            <View style={{ marginTop: 10 }}>
              <View style={{
                faex: 1, flexDirection: 'row',
                justifyContent: 'flex-start',
                alignContent: 'center',
                backgroundColor: "#FFFFFF", borderRadius: 5,
                margin: 5,
                width: 380
              }}>
                <Image style={{ padding: 10, width: 20, height: 20, resizeMode: 'contain', margin: 10, marginTop: 15 }} source={require('../img/email-icon.png')}></Image>
                <TextInput
                  style={{ backgroundColor: "#FFFFFF", height: 50, padding: 10, fontSize: 15 }}
                  placeholder="กรุณากรอกอีเมล์"
                  onChangeText={() => this.setState({})}

                />
              
              </View>
              

            </View>
            <View style={styles.buttonContainer}>
                <Button title="ส่งรหัสผ่านใหม่" color="#5BB95A" />
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
    height: 50,
    width: 200,
    color: "#5BB95A"

  },
});

export default ForgotpasslScreen;