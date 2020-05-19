import React from 'react'
import { Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import { TabIcon } from './TabIcon'

const IconBar = ({ name, style, size }) => {
  //const icon = TabIcon[name]
  var img = '';
  switch (name) {
    case 'Home':
      img = require('../../img/Path8.png');
      break;
    case 'HomeActive':
      img = require('../../img/Path8.png');
      break;
    case 'Device':
      img = require('../../img/router_3.png');
      break;
    case 'DeviceActive':
      img = require('../../img/router_2.png');
      break;
    case 'Scan':
      img = require('../../img/sc.png');
      break;
    case 'ScanActive':
      img = require('../../img/sc.png');
      break;
    case 'Report':
      img = require('../../img/Path8.png');
      break;
    case 'ReportActive':
      img = require('../../img/Path360.png');
      break;
    case 'Profile':
      img = require('../../img/Path -1.png');
      break;
    case 'ProfileActive':
      img = require('../../img/Path6.png');
      break;
    default:
      img = require('../../img/Path8.png');
  }

  return (
    <Image
      source={img}
      style={[{ width: size, height: size }, style]}
    />
  )
}

export default IconBar

const styles = StyleSheet.create({

  MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: 'red'
  },
  button: {
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      //shadowColor: 'grey',
      shadowOpacity: 0.1,
      shadowOffset: { x: 2, y: 0 },
      shadowRadius: 2,
      borderRadius: 30,
      position: 'absolute',
      bottom: 20,
      right: 0,
      top: 5,
      left: 5,
      shadowOpacity: 5.0,

  },
  actionBtn: {

      //backgroundColor: '#1E90FF',
      textShadowOffset: { width: 5, height: 5 },
      textShadowRadius: 10,
      borderWidth: 2,
      //borderColor: '#fff'


  }


});