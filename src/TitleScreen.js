import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
var nav;

class TitleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  componentDidMount() {
    const { navigation } = this.props;
    nav = this.props
    console.log(nav);
    this.focusListener = navigation.addListener('didFocus', () => {
      setTimeout(async function () {
          // status += 1;
          try {
            const value = await AsyncStorage.getItem('user');
            if (value != null) {
              nav.navigation.navigate('Home');
            } else {
              nav.navigation.navigate('Login');
            }
          } catch (error) {
            // Error retrieving data
            console.log(error);
          }
      }, 3000);
    });
    setTimeout(async function () {   
        try {
          const value = await AsyncStorage.getItem('user');
          if (value != null) {
            nav.navigation.navigate('Home');
          } else {
            nav.navigation.navigate('Login');
          }
        } catch (error) {
          // Error retrieving data
          console.log(error);
        }
    }, 3000);
  }

  render() {
    return (
      <View>
        <Text> TitleScreen </Text>
      </View>
    );
  }
}

export default withNavigation(TitleScreen);