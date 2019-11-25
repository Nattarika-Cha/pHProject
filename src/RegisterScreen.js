import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import axios from 'axios';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fname: '',
      lname: '',
      sex: ''
    };
  }

  static navigationOptions = {
    title: 'Register',
  };

  onSubmit() {
    axios.post('http://10.0.2.2:3000/register', {
      username: this.state.username,
      password: this.state.password,
      fname: this.state.fname,
      lname: this.state.lname,
      sex: this.state.sex
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
        <View style={styles.inputContainer}>
          <Text>Frist Name :</Text>
          <TextInput
            style={styles.inputBorder}
            placeholder="Frist Name"
            onChangeText={(fname) => this.setState({ fname })}
            value={this.state.fname}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Last Name :</Text>
          <TextInput
            style={styles.inputBorder}
            placeholder="Last Name"
            onChangeText={(lname) => this.setState({ lname })}
            value={this.state.lname}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Sex :</Text>
          <TextInput
            style={styles.inputBorder}
            placeholder="Sex"
            onChangeText={(sex) => this.setState({ sex })}
            value={this.state.sex}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Register" onPress={this.onSubmit.bind(this)} />
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
    height: 40,
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

export default RegisterScreen;
