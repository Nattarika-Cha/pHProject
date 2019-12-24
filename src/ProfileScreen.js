import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, AsyncStorage } from 'react-native';
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
      <View style={{ flex: 1, backgroundColor: '#ffffff', flexDirection: 'column', justifyContent: 'flex-start', }}>
        <Button title="Logout" color="#990000" onPress={this._removeData.bind(this)} />
        <Button title="Getdata" color="#990000" onPress={this._retrieveData.bind(this)} />
      </View>
    );
  }

}

// const styles = StyleSheet.create({
//   header: {
//     fontSize: 20,
//     color: '#5BB95A',
//     fontWeight: 'bold',
//     paddingVertical: 14,
//     alignItems: 'center',
//   },
//   txtinput: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignContent: 'center',
//     backgroundColor: "#FFFFFF",
//     borderRadius: 30,
//     margin: 7,
//     width: 300,
//     borderColor: '#000000',
//     borderWidth: 1
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   inputContainer: {
//     marginRight: 20,
//     marginTop: 5,
//     marginLeft: 20
//   },
//   inputBorder: {
//     borderRadius: 4,
//     borderWidth: 0.5,
//     borderColor: '#d6d7da',
//     height: 40,
//   },
//   buttonContainer: {
//     margin: 10
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   },
//   txt: {
//     backgroundColor: "#FFFFFF",
//     padding: 7,
//     height: 33,
//     margin: 7,
//     borderRadius: 20,
//   },
//   buttonContainer: {
//     margin: 10,
//     height: 50,
//     width: 200,
//     color: "#5BB95A"

//   },
// });

export default ProfileScreen;

