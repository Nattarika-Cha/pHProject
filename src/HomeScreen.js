import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView, Alert, Dimensions, Animated, AsyncStorage } from 'react-native';
// import { createAppContainer } from 'react-navigation';
import MapView from "react-native-maps";
import { withNavigation } from 'react-navigation';
import axios from 'axios';

import ShowdeviceHome from './ShowdeviceHome';
import ShowmapHome from './ShowmapHome';

const Images = [
  { uri: "https://i.imgur.com/sNam9iJ.jpg" },
  { uri: "https://i.imgur.com/N7rlQYt.jpg" },
  { uri: "https://i.imgur.com/UDrH0wm.jpg" },
  { uri: "https://i.imgur.com/Ka8kNST.jpg" }
]
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

//var token = '';
var status = 0;
var pop = [];
class HomeScreen extends React.Component {
  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  constructor(props) {
    super(props);
    pop = this.props;
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
      Device: [],
      token: '',
      fname: '',
      lname: '',
    };
  }

  _retrieveData = async () => {
    status += 1;
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        // We have data!!
        var data = JSON.parse(value);
        this.setState({ 
          token: data.token,
          fname: data.fname,
          lname: data.lname
        });
        if (this.state.token != '') {
          status = 0;
          axios.get('http://165.22.250.24:3030/device/device_list', {
            params: {
              token: this.state.token
            }
          })
            .then(response => {
              const Device = response.data;
              this.setState({ Device: Device });
            })
            .catch(function (error) {
              // console.log(error);
            })
        } else {
          if (status == 2) {
            status = 0;
            Alert.alert(
              'Error',
              'หมดอายุเข้าใช้งาน',
              [
                { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
              ],
              { cancelable: false }
            )
          }
        }
      } else {
        console.log("test3");
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this._retrieveData();
    });
  }

  deviceList() {
    return this.state.Device.map(function (object, i) {
      return <ShowdeviceHome obj={object} key={i} pop={pop} />
    });
  }

  mapList() {
    return this.state.Device.map(function (object, i) {
      return <ShowmapHome obj={object} key={i} pop={pop} />
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 5, alignItems: 'flex-start', backgroundColor: '#FFF' }}>
        <Text style={{fontSize: 20, marginTop: 13}}>สวัสดี {this.state.fname} {this.state.lname}</Text>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'center', padding: 10, margin: 0 }}>
            <Image style={{ width: 35, height: 35, resizeMode: 'contain', }}
              source={require('../img/tm.png')}></Image>
            <Text style={{ fontSize: 20, color: '#000000', paddingLeft: 5 }}>35°c</Text>
          </View>
        </View>
        <View style={{ marginTop: 15, marginLeft: 15, marginRight: 15, marginBottom: 150, height: 400 }}>
          <MapView
            ref={map => this.map = map}
            initialRegion={this.state.region}
            style={styles.maphight}
          >
            {/* {this.mapList()} */}
          </MapView>
        </View>
        <View >
          <Animated.ScrollView
            horizontal
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: this.animation,
                    },
                  },
                },
              ],
              { useNativeDriver: true }
            )}
            style={styles.scrollView}
            contentContainerStyle={styles.endPadding}
          >
            {this.deviceList()}
          </Animated.ScrollView>
        </View>
        {/* </View> */}
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
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
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
  maphight: {
    // width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default withNavigation(HomeScreen);