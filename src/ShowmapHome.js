import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Animated, TouchableOpacity, Button } from 'react-native';
import MapView from "react-native-maps";
import axios from 'axios';
// import { navigation } from 'react-navigation';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;
var serialDevice = undefined;
class ShowmapHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coordinate: [],
            Humidity: '',
            pH: '',
            serialDevice: '',
            date: ''
        };
    }

    componentDidMount() {
        axios.get('http://165.22.250.24:3030/senser/data_senser', {
            params: {
                serialDevice: this.props.obj.serialDevice
            }
        })
            .then(data_senser => {
                console.log(data_senser.data)
                this.setState({
                    coordinate: {
                        latitude: data_senser.data.latitude,
                        longitude: data_senser.data.longitude
                    },
                    // Humidity: data_senser.data.moisture,
                    // pH: data_senser.data.pH,
                    serialDevice: serialDevice,
                    date: data_senser.data.date
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <MapView.Marker coordinate={this.state.coordinate}>
                <Animated.View style={[styles.markerWrap]}>
                    <Animated.View style={[styles.ring]} />
                    <View style={styles.marker} />
                </Animated.View>
            </MapView.Marker>
        );
    }
}

const styles = StyleSheet.create({
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

export default ShowmapHome;