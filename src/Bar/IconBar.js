import React from 'react'
import { Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import { TabIcon } from './TabIcon'

const IconBar = ({ name, style, size }) => {
  //const icon = TabIcon[name]
  var img = '';
  switch (name) {
    case 'Home':
      img = require('../../img/home.png');
      break;
    case 'HomeActive':
      img = require('../../img/home-2.svg');
      break;
    case 'Device':
      img = require('../../img/devicei.png');
      break;
    case 'DeviceActive':
      img = require('../../img/devicei-2.svg');
      break;
    case 'Scan':
      img = require('../../img/sc.png');
      break;
    case 'ScanActive':
      img = require('../../img/sc.png');
      break;
    case 'Report':
      img = require('../../img/report.png');
      break;
    case 'ReportActive':
      img = require('../../img/report-2.svg');
      break;
    case 'Profile':
      img = require('../../img/pro.png');
      break;
    case 'ProfileActive':
      img = require('../../img/report-2');
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