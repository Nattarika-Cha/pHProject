import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, Button } from 'react-native';
// import { navigation } from 'react-navigation';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;
var serialDevice = undefined;
class ShowdeviceHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    gotopage() {
        //console.log(this.props.obj.serialDevice);
        this.props.pop.navigation.navigate('Devicedata', {
            serialDevice: this.props.obj.serialDevice
        })
    }

    render() {
        return (
            <TouchableOpacity onPress={this.gotopage.bind(this)}>
                <View style={styles.card}>
                    <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', padding: 5, alignItems: 'flex-start' }}>
                        <Image style={{ width: 20, height: 20, resizeMode: 'contain', }}
                            source={require('../img/h1.png')}></Image>
                        <Text style={{ fontSize: 15, color: '#000000', paddingLeft: 5 }}>:</Text>
                        <Text numberOfLines={1} style={styles.cardtitle}>{this.props.obj.Humidity} </Text>
                    </View>

                    <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', padding: 5, alignItems: 'flex-start' }}>
                        <Image style={{ width: 20, height: 20, resizeMode: 'contain', }}
                            source={require('../img/h3.png')}></Image>
                        <Text style={{ fontSize: 15, color: '#000000', paddingLeft: 5 }}>:</Text>
                        <Text numberOfLines={1} style={styles.cardtitle}>{this.props.obj.Humidity}</Text>
                    </View>
                    <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', padding: 5, alignItems: 'flex-start' }}>
                        <Image style={{ width: 20, height: 20, resizeMode: 'contain', }}
                            source={require('../img/h2.png')}></Image>
                        <Text style={{ fontSize: 15, color: '#000000', paddingLeft: 5 }}>:</Text>
                        <Text numberOfLines={1} style={styles.cardDescription}>{this.props.obj.pH}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
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
    cardtitle: {
        fontSize: 12,
        marginTop: 5,
        fontWeight: "bold",
    },
    cardDescription: {
        fontSize: 12,
        color: "#444",
    },
});

export default ShowdeviceHome;