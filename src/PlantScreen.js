import React, { Component } from 'react';
import { Text, Linking, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert, fontFamily, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class PlantScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // plant: '',
      pomelo: '1',
      lemon: '2',
    };
    this.onPlant = this.onPlant.bind(this);
  }

  onPlant(Plant){
    this._storeData(Plant);
  }

  _storeData = async (plant) => {
    try {
      await AsyncStorage.setItem('plant', JSON.stringify(plant));
      this.props.navigation.navigate('Home');
    } catch (error) {
      Alert.alert(
        'Error',
        'เข้าสู่ระบบผิดพลาด กรุณาลองใหม่อีกครั้ง',
        [
          { text: 'OK' },
        ],
        { cancelable: false }
      )
    }
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', }}>
        <View style={{ faex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', }}>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start',  }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <Image style={{ padding: 10, width: wp("6%"), height: hp("6%"), resizeMode: 'contain', margin: hp('0.3%'), marginLeft: hp('2%') }}
                source={require('../img/back.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
          <View style={{ faex: 1, justifyContent: 'center', backgroundColor: '#FAFAFA', alignItems: 'center', }}>
            <Image style={{ padding: 10, width: wp('40%'), height: hp('20%'), resizeMode: 'contain' }}
              source={require('../img/logo1.png')}></Image>


          </View>
          <View style={{ faex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', }}>

            <Text style={styles.header}>เลือกชนิดพืช</Text>
          </View>
          <View style={{ faex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', }}>
            <TouchableOpacity onPress={() => this.onPlant(this.state.pomelo)}>
              <View style={{
                flexDirection: 'row', width: wp('70%'), height: hp('14%'), borderRadius: 6, backgroundColor: '#f2dc99', margin: 10, justifyContent: 'flex-start', alignItems: 'center'
                , shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 6,
              }}>
                <Image style={{ padding: 5, width: wp('20%'), height: hp('10%'), resizeMode: 'contain', margin: 10, }}
                  source={require('../img/orange2.jpg')}></Image>
                <Text style={styles.header3}> สวนส้มโอ </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPlant(this.state.lemon)}>
              <View style={{
                flexDirection: 'row', width: wp('70%'), height: hp('14%'), borderRadius: 6, backgroundColor: '#d0e6a5', margin: 10, justifyContent: 'flex-start', alignItems: 'center',
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 6,
              }}>
                <Image style={{ padding: 5, width: wp('20%'), height: hp('10%'), resizeMode: 'contain', margin: 10 }}
                  source={require('../img/lemon.jpg')}></Image>
                <Text style={styles.header3}> สวนมะนาว</Text>
              </View>
            </TouchableOpacity>

          </View>
           {/* <View style={styles.buttonContainer}>
                <Button title="ยืนยัน" color="#5BB95A" />
            </View> */}
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: '#5BB95A',
    fontWeight: 'bold',
    paddingVertical: 14,
    alignItems: 'center',
  },
  header2: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    paddingVertical: 14,
    alignItems: 'center',
  },
  header3: {
    fontFamily: 'Prompt',
    fontSize: 17,
    color: '#000000',

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
    justifyContent: 'center',
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
  button: {
    padding: 2,
    margin: 2,
    fontSize: 15
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
  label: {
    fontSize: hp('2%'),
    marginRight: wp('3%'),
    marginLeft: wp('5'),
    color: '#878787'
  },
  label2: {
    fontSize: hp('2%'),
    marginRight: wp('3%'),
    marginLeft: wp('3%'),
    color: '#878787'
  }
});

export default withNavigation(PlantScreen);

