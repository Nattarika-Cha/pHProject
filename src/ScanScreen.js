import React, { Component } from "react";

import { View, Dimensions, Text, Image, Button, Alert } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from "react-native-animatable";
import axios from 'axios';

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

console.disableYellowBox = true;

class test extends Component {
  onSuccess(e) {
    axios.post('http://165.22.250.24:3030/device/select', {
      serialQR: e.data
    })
    .then((response) => {
      if (response.data == "Add device success") {
        Alert.alert(
          'Success',
          'Serial',
          [
            {text: 'OK', onPress: () => this.props.navigation.navigate('Device')},
          ],
          {cancelable: false},
        );
      } else {
        Alert.alert(
          'Error',
          'Not device',
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

  makeSlideOutTranslation(translationType, fromValue) {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18
      },
      to: {
        [translationType]: fromValue
      }
    };
  }

  render() {
    return (
      <QRCodeScanner
        showMarker
        onRead={this.onSuccess.bind(this)}
        cameraStyle={{ height: SCREEN_HEIGHT }}
        customMarker={
          <View style={styles.rectangleContainer}>
            <View style={styles.top}>
            <Icon
                  name="ios-close"
                  size={SCREEN_WIDTH * 0.15}
                  color={iconScanColor}
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    this.props.navigation.navigate('Device')
                  }}
                />
            </View>
            <View style={styles.topOverlay}>
              <Text style={{ fontSize: 30, color: "white" }}>
                โปรดสแกน
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.leftAndRightOverlay} />

              <View style={styles.rectangle}>
                  {/* scan squar black */}
                {/* <Icon
                  name="ios-qr-scanner"
                  size={SCREEN_WIDTH * 0.75}
                  color={iconScanColor}
                /> */}
                <Animatable.View
                  style={styles.scanBar}
                  direction="alternate-reverse"
                  iterationCount="infinite"
                  duration={1700}
                  easing="linear"
                //   animation={this.makeSlideOutTranslation(
                //     "translateY",
                //     SCREEN_WIDTH * -0.54
                //   )}
                />
              </View>

              <View style={styles.leftAndRightOverlay} />
            </View>

            <View style={styles.bottomOverlay} />
          </View>
        }
      />
    );
  }
}

const overlayColor = "rgba(0,0,0,0.5)"; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = "transparent";

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = "#22ff00";

const iconScanColor = "#000000";

const styles = {
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: "center",
    alignItems: "center"
  },
  top: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor

  }
};

export default test;
