import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image, Animated, TouchableWithoutFeedback ,TouchableOpacity} from "react-native"
import { FontAwesome5, Feather } from "@expo/vector-icons";
import transform from "css-to-react-native-transform"


export default class AddButton extends React.Component {

    animation = new Animated.View(0)

    toggleMenu = () =>{
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation,{
            toValue,
            friction:5
        }).start()

        this.open = !this.open
    }

    // handlePress = () => {
    //     Animated.sequence([
    //         Animated.timing(this.bouttonSize, {
    //             toValue: 0.95,
    //             duration: 200
    //         }),
    //         Animated.timing(this.bouttonSize, {
    //             toValue: 1,
    //         }),
    //         Animated.timing(this.mode,{
    //             toValue: this.mode._value === 0 ? 1 : 0
    //         })
    //     ]).start();

    // }

    render() {
        // const pinStyle = {
        //     transform 
        // };
        // const sizeStyle = {
        //     transform: [
        //         {
        //             rotate: this.mode.interpolate({
        //                 inputRange:[0,1],
        //                 outputRange:["0deg", "45deg"]
        //             })
        //         }
        //     ]

        // };

        // const rotation = this.mode.interpolate({
        //     inputRange:[0,1],
        //     outputRange:["0deg", "45deg"]
        // });
        // const scanX = this.mode.interpolate({
        //     inputRange:[0,1],
        //     outputRange:[-23, -100]
        // });

        // const scanY = this.mode.interpolate({
        //     inputRange:[0,1],
        //     outputRange:[-40, -100]
        // });
        return (
            <View style={[Styles.co, this.props.style]}>
                {/* <Animated.View style={{position: "absolute", left: scanX, top:scanY}}>
                    <View style={Styles.secondaryButton}>
                    <Image style={{ width: 50, height: 50, }} source={require('../img/sc.png')} />
                    </View>
                </Animated.View> */}
                {/* <Animated.View style={Styles.boutton}> */}   
                {/* <TouchableWithoutFeedback >
                    <Animated.View style={Styles.boutton,Styles.secondaryButton2}>
                        <Animated.View >
                            <Image style={{ width: 45, height: 45, }} source={require('../img/sc.png')} />
                        </Animated.View>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback >
                    <Animated.View style={Styles.boutton,Styles.secondaryButton}>
                        <Animated.View >
                            <Image style={{ width: 45, height: 45, }} source={require('../img/sc.png')} />
                        </Animated.View>
                    </Animated.View>
                </TouchableWithoutFeedback> */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddDeviceScreen')}>
                    <View style={Styles.boutton}>
                       
                            <Image style={{ width: 73, height: 73, }} source={require('../img/plus.png')} />
                       
                    </View>
                </TouchableOpacity>
                {/* </Animated.View> */}

            </View>
        )
    }
}

const Styles = StyleSheet.create({
    co: {
        position: "absolute",
        alignItems: 'center'
    },
    boutton: {
        backgroundColor: "#5BB95A",
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
       marginLeft:7,
        borderRadius: 35,
        position: "absolute",
        top: -25,
        // shadowColor:"#000000",
        // shadowRadius: 5,
        // shadowOffset: {height:10},
        // shadowOpacity: 0.3,
        shadowColor: "#5BB95A",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 4,
        borderWidth: 3,
        borderColor: '#FFFFFF',

    },
    secondaryButton: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center"
        ,
        width: 48,
        height: 48,
        borderRadius: 24,
        top: -50,
        borderWidth: 3,
        borderColor: '#FFFFFF',
    },
    secondaryButton2: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center"
        ,
        width: 48,
        height: 48,
        borderRadius: 24,
        top: -50,
        borderWidth: 3,
        borderColor: '#FFFFFF',
    }


})