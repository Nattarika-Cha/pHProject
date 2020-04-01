import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity,  Image, FontSize, Dimensions, ScrollView,Button } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
var nav;

class AdddeviceScreen extends Component {


  render() {
    return (
      <ScrollView style={{ backgroundColor: '#FAFAFA' }}>
        <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', }}>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#ffffff', }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Device')}>
              <Image style={{ padding: 10, width: wp("6%"), height: hp("6%"), resizeMode: 'contain', margin: hp('0.3%'), marginLeft: hp('2%') }}
                source={require('../img/back.png')}></Image>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ faex: 1, justifyContent: 'center', backgroundColor: '#FAFAFA', alignItems: 'center',}}>
              <Image style={{ padding: 10, width: wp('40%'), height: hp('15%'), resizeMode: 'contain', marginTop: hp('10%') }}
                source={require('../img/router.png')}></Image>


            </View>
            <View style={{ faex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', }}>

              <Text style={styles.header}>เพิ่มอุปกรณ์</Text>
            </View>

            <View style={{ marginTop: hp('1%') }}>
              <View style={{
                faex: 1, flexDirection: 'row',
                justifyContent: 'flex-start',
                alignContent: 'center',
                backgroundColor: "#FFFFFF", borderRadius: 5,
                margin: 5,
                width: wp('80%'),
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.20,
                shadowRadius: 1.41,
                elevation: 1,
              }}>
                
                <TextInput
                  style={{ backgroundColor: "#FFFFFF", height: hp('6%'), padding: 10, fontSize: hp('2.5%') ,width: wp('75%'), marginLeft:5}}
                  placeholder="กรอกรหัสอุปกรณ์"

                />
              </View>
              
            </View>
            

          </View>
          <View style={styles.buttonContainer}>
                                <Button title="ยืนยัน" color="#5BB95A" />
                            </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    fontSize: hp('3%'),
    color: '#5BB95A',
    fontWeight: 'bold',
    paddingVertical: 14,
    alignItems: 'center',
  },
  headerDevice: {
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  txtcanON: {
    fontSize: 15,
    color: '#51B1FB',
    alignItems: 'center',
    marginLeft: 10
  },
  txtcanOFF: {
    fontSize: 15,
    color: '#b7b7b7',
    alignItems: 'center',
    marginLeft: 10
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
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  // },
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
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'flex-end',
    justifyContent: 'center',
    height: 50,
    width: wp('80%'),
    color: "#5BB95A"

  },
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
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'flex-end',
    justifyContent: 'center',
    // height:100,
    marginBottom: 60,
    backgroundColor: '#ecf0f1',
    width: 200
  },
  buttonContainer: {
    flex: 1,
    margin: 10,
    fontSize: hp('2.5%'),
    width: wp('75%'),
    height: hp('8%'),
    marginLeft: wp('12%'),
    fontWeight: 'bold'

  },
});

export default withNavigation(AdddeviceScreen);