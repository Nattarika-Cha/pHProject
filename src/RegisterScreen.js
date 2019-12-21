import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
// import Icon from 'react-native-ionicons';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fname: '',
      lname: '',
      gender: '',
      Cpassword: ''
    };
  }

  // static navigationOptions = {
  //   title: 'Register',
  // };

  onSubmit() {
    axios.post('http://165.22.250.24:3030/user/register', {
      username: this.state.username,
      password: this.state.password,
      fname: this.state.fname,
      lname: this.state.lname,
      gender: this.state.gender
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
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: '#ffffff', flexDirection: 'column', justifyContent: 'flex-start', }}>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#ffffff', }}>
            <Button title="Back" color="#5BB95A" onPress={() => this.props.navigation.navigate('Login')} />
          </View>

          <View style={{ flex: 1, backgroundColor: '#ffffff', flexDirection: 'column', justifyContent: 'flex-start', }}>
            <View style={{ faex: 1, justifyContent: 'center', backgroundColor: '#ffffff', alignItems: 'center', padding: 5 }}>
              <Text style={styles.header}>REGISTER</Text>
            </View>
            <View style={{ faex: 1, justifyContent: 'center', backgroundColor: '#ffffff', alignItems: 'center' }} >
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image style={{ padding: 5, width: 80, height: 80, resizeMode: 'contain', margin: 5, borderWidth: 1, borderColor: '#000000', }}
                  source={require('../img/add-img.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={{ faex: 1, flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: '#ffffff', alignItems: 'center', padding: 5 }}>
              <View style={styles.txtinput}>
                <TextInput
                  style={styles.txt}
                  placeholder="Frist Name"
                  onChangeText={(fname) => this.setState({ fname })}
                  value={this.state.fname}
                />
              </View>
              <View style={styles.txtinput}>
                <TextInput
                  style={styles.txt}
                  placeholder="Last Name"
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
                paddingLeft: 10,
                width: 300,
                borderColor: '#000000',
                borderWidth: 1
              }}>
                <RNPickerSelect
                  onValueChange={(gender) => this.setState({ gender })}
                  items={[
                    { label: 'Male', value: 'Male' },
                    { label: 'Female', value: 'Female' },
                  ]}
                  value={this.state.gender}
                />
              </View>
              <View style={styles.txtinput}>
                <TextInput
                  style={styles.txt}
                  placeholder="Username"
                  onChangeText={(username) => this.setState({ username })}
                  value={this.state.username}
                />
              </View>
              <View style={styles.txtinput}>
                <TextInput
                  style={styles.txt}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password}
                />
              </View>
              <View style={styles.txtinput}>
                <TextInput
                  style={styles.txt}
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  onChangeText={(Cpassword) => this.setState({ Cpassword })}
                  value={this.state.Cpassword}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button title="Contiune" color="#5BB95A" onPress={this.onSubmit.bind(this)} />
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
});

export default RegisterScreen;
