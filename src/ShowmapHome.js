import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Animated, TouchableOpacity, Button } from 'react-native';
import MapView from "react-native-maps";
import axios from 'axios';
import { withNavigation } from 'react-navigation';
// import { navigation } from 'react-navigation';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;
var serialDevice = undefined;
class ShowmapHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0.0,
            longitude: 0.0,
            serialDevice: '',
            date: ''
        };
    }

    componentWillUnmount() {
        this.focusListener.remove();
        // clearInterval(intervalId);
    }

    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            // console.log(this.props.obj.serialDevice);
            this.intervalId = setInterval(() => {
                axios.get('http://165.22.250.24:3030/senser/data_senser', {
                    params: {
                        serialDevice: this.props.obj.serialDevice
                    }
                })
                    .then(data_senser => {
                        this.setState({
                            latitude: parseFloat(data_senser.data.latitude),
                            longitude: parseFloat(data_senser.data.longitude),
                            serialDevice: serialDevice,
                            date: data_senser.data.date
                        });
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }, 1000);
        });
        this.intervalId = setInterval(() => {
            axios.get('http://165.22.250.24:3030/senser/data_senser', {
                params: {
                    serialDevice: this.props.obj.serialDevice
                }
            })
                .then(data_senser => {
                    this.setState({
                        latitude: parseFloat(data_senser.data.latitude),
                        longitude: parseFloat(data_senser.data.longitude),
                        serialDevice: serialDevice,
                        date: data_senser.data.date
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }, 1000);
    }

    render() {
        const { navigation } = this.props;
        this.didBlurListener = navigation.addListener('didBlur', () => {
            clearInterval(this.intervalId);
        });
        return (
            <MapView.Marker key={this.props.key} 
                coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}
                image={require('../img/devce.png')}
                title={this.props.obj.serialDevice}>      
                {/* <View style={sty/les.marker} /> */}
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
    maphight: {
        // width: 300,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default withNavigation(ShowmapHome);