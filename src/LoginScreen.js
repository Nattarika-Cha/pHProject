import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
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
    axios.post('http://10.0.2.2:3000/login', {
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
      <ScrollView>
        <Text style={styles.titleHead}>  LoginScreen </Text>
        <View style={styles.inputContainer}>
          <Text>Username :</Text>
          <TextInput
            style={styles.inputBorder}
            placeholder="Username"
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Password :</Text>
          <TextInput
            style={styles.inputBorder}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={this.onButtonLogin.bind(this)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Register" onPress={() => this.props.navigation.navigate('Register')} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleHead: {
    fontSize: 20,
    textAlign: 'center',
    margin: 30
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
    height: 40
  },
  buttonContainer: {
    margin: 10
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default LoginScreen;
