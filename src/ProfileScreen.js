import React, { Component } from 'react';
import { Text, TextInput, View,Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert ,fontFamily ,AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }

  _removeData = async () => {
    try {
      await AsyncStorage.removeItem('user');
      this.props.navigation.navigate('Login');
    } catch (error) {
      Alert.alert(
        'Error',
        'ออกสู่ระบบผิดพลาด กรุณาลองใหม่',
        [
          { text: 'OK' },
        ],
        { cancelable: false }
      )
    }
  };

  clearAsyncStorage = async() => {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
}

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        console.log(value);
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'ดึงข้อมูลผิดพลาด กรุณาลองใหม่',
        [
          { text: 'OK' },
        ],
        { cancelable: false }
      )
    }
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', }}>
        <View style={{ faex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: 40 }}>
          <View style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#5BB95A', margin: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ padding: 5, width: 80, height: 80, resizeMode: 'contain', margin: 5, }}
              source={require('../img/user.png')}></Image>
          </View>
          <Text style={styles.header2}>Name......................</Text>
          <View style={styles.button}>
            <Button title="แก้ไขข้อมูล" color="#5BB95A" type="clear" onPress={() => this.props.navigation.navigate('ProfileEdit')}/>
          </View> 
        </View>

        <View style={{ faex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: 40 }}>
        <TouchableOpacity onPress={() => navigation.navigate('')}>
          <View style={{ flexDirection: 'row', width: 343, height: 64, borderRadius: 6, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Image style={{ padding: 5, width: 32, height: 32, resizeMode: 'contain', margin: 16, }}
              source={require('../img/setting.png')}></Image>
            <Text style={styles.header3}> ตั้งค่า </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
          <View style={{ flexDirection: 'row', width: 343, height: 64, borderRadius: 6, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Image style={{ padding: 5, width: 32, height: 32, resizeMode: 'contain', margin: 16, }}
              source={require('../img/help.png')}></Image>
            <Text style={styles.header3}>  แนะนำการใช้งาน</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.clearAsyncStorage.bind(this)}>
          <View style={{ flexDirection: 'row', width: 343, height: 64, borderRadius: 6, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Image style={{ padding: 5, width: 32, height: 32, resizeMode: 'contain', margin: 16, }}
              source={require('../img/log-out.png')}></Image>
            <Text style={styles.header3}> ออกจากระบบ </Text>
          </View>
          </TouchableOpacity>
        </View>
        </View>
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
  header2: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    paddingVertical: 14,
    alignItems: 'center',
  },
  header3: {
    fontFamily:'Prompt',
    fontSize: 17,
    color: '#000000',

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
  button: {
    padding:2,
    margin:2,
    fontSize:15
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

export default ProfileScreen;

