import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { widthPercentageToDP } from 'react-native-responsive-screen';

class ShowhomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        markers: [
          {
            coordinate: {
              latitude: 45.524548,
              longitude: -122.6749817,
            },
            Humidity: "35 C",
            pH: "5.5",
            image: Images[0],
          },
          {
            coordinate: {
              latitude: 45.524698,
              longitude: -122.6655507,
            },
            Humidity: "35 C",
            pH: "5.5",
            image: Images[1],
          },
          {
            coordinate: {
              latitude: 45.5230786,
              longitude: -122.6701034,
            },
            Humidity: " 35 C",
            pH: "6.0",
            image: Images[2],
          },
          {
            coordinate: {
              latitude: 45.521016,
              longitude: -122.6561917,
            },
            Humidity: " 35 C",
            pH: "6.0",
            image: Images[3],
          },
          {
            coordinate: {
              latitude: 45.521016,
              longitude: -122.6561917,
            },
            Humidity: " 35 C",
            pH: "6.0",
            image: Images[3],
          },
        ],
        region: {
          latitude: 45.52220671242907,
          longitude: -122.6653281029795,
          latitudeDelta: 0.04864195044303443,
          longitudeDelta: 0.040142817690068,
        },
      };
      }

    render() {
        return (
            <View style={styles.card} key={index}>
            <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', padding: 5, alignItems: 'flex-start' }}>
                <Image style={{ width: 30, height: 30, resizeMode: 'contain', }}
                  source={require('../img/ph.png')}></Image>
                <Text style={{ fontSize: hp('3%'), color: '#000000', paddingLeft: widthPercentageToDP('10%') }}>:</Text> 
              <Text numberOfLines={1} style={styles.cardtitle}>{marker.Humidity}</Text>
            </View>
            <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', padding: 5, alignItems: 'flex-start' }}>
                <Image style={{ width: 30, height: 30, resizeMode: 'contain', }}
                  source={require('../img/h2.png')}></Image>
                <Text style={{ fontSize: hp('3%'), color: '#000000', paddingLeft: widthPercentageToDP('10%') }}>:</Text>
              <Text numberOfLines={1} style={styles.cardDescription}>{marker.pH}</Text>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
      fontSize: 25,
      color: '#000000',
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
      //justifyContent: 'center',
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
    box: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 5,
      paddingTop: 10,
      borderWidth: 1,
      borderColor: '#E5E5E5',
      // margin: 10 ,
      // marginRight:10, 
      marginLeft: 20,
  
      borderRadius: 10,
      backgroundColor: '#ffffff',
  
  
    },
    map: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    mapStyle: {
      width: 80,
      height: 80,
    },
    scrollView: {
      position: "absolute",
      bottom: 30,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    endPadding: {
      paddingRight: width - CARD_WIDTH,
    },
    card: {
      padding: 10,
      elevation: 2,
      backgroundColor: "#FFF",
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
      overflow: "hidden",
    },
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
    textContent: {
      flex: 1,
    },
    cardtitle: {
      fontSize: 15,
      marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 15,
      color: "#444",
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
    },
    marker: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgba(130,4,150, 0.9)",
    },
    ring: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: "rgba(130,4,150, 0.3)",
      position: "absolute",
      borderWidth: 1,
      borderColor: "rgba(130,4,150, 0.5)",
    },
    
  });

export default ShowhomeScreen;