import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView } from 'react-native';
import axios from 'axios';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  static navigationOptions = {
    title: 'Login',
  };

  onButtonLogin() {
    axios.post('https://phproject-260514.appspot.com/user/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then((response) => {
        if (response.data == "Login success") {
          this.props.navigation.navigate('Home');
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
      <ImageBackground style={styles.container2} source={require('../img/bg_login.jpg')}>
        <ScrollView>
          <View style={{
            faex: 1, flexDirection: 'column',
            padding: 40,
            justifyContent: 'center',
            alignContent: 'center',
          }} >
            <Text style={{ fontSize: 30 }}>Welcome to App</Text>
          </View>
          <View style={{
            faex: 1, flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'center',
            backgroundColor: "#FFFFFF", borderRadius: 5,
            margin: 5
          }}>
            <Image style={{ padding: 10, width: 20, height: 20, resizeMode: 'contain', margin: 10 }} source={require('../img/email-icon.png')}></Image>
            <TextInput
              style={{ backgroundColor: "#FFFFFF", height: 40, padding: 10 }}
              placeholder="Username"
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
            />
          </View>
          <View style={{
            faex: 1, flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'center',
            backgroundColor: "#FFFFFF", borderRadius: 5, margin: 5
          }}>
            <Image style={{ padding: 10, width: 20, height: 20, resizeMode: 'contain', margin: 10 }} source={require('../img/pass.png')}></Image>
            <TextInput
              style={{ backgroundColor: "#FFFFFF", padding: 10, height: 40, }}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            />
          </View>
          <View style={{ flexDirection: "row-reverse", padding: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Text style={styles.label}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="LOGIN" color="#5BB95A" onPress={this.onButtonLogin.bind(this)} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="REGISTER" color="#5BB95A" onPress={() => this.props.navigation.navigate('Register')} />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 10
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container2: {
    flex: 1,
    position: 'relative',
    resizeMode: 'cover'
  },
  buttonContainer: {
    margin: 10
  },
});

export default LoginScreen;
