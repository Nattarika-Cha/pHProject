import React, { Component } from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import axios from 'axios';

class ShowdeviceScreen extends Component {

    render() {
        return (
            <View style={styles.box}>
                <Image style={{ padding: 10, width: 40, height: 40, resizeMode: 'contain', margin: 10, }}
                    source={require('../img/device.png')}></Image>
                <Text>Device 1</Text>
                <Text>{this.props.obj.status}</Text>
                <Text>Humidity</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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

export default ShowdeviceScreen;