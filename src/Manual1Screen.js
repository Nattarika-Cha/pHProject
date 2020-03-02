import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert, Switch } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Manual1creen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#FAFAFA' }}>
        <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', }}>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#ffffff', }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Image style={{ padding: 10, width: wp("6%"), height: hp("6%"), resizeMode: 'contain', margin: hp('0.3%'),marginLeft:hp('2%') }}
                  source={require('../img/back.png')}></Image>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ faex: 1, justifyContent: 'center', backgroundColor: '#FAFAFA', alignItems: 'center', padding: 5 }}>
              <Text style={styles.header}>คู่มือการใช้งาน</Text>
            </View>
            <View style={{ flexDirection: 'column', width: wp('90%'), borderRadius: 6, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'flex-start', }}>
              <Text>  </Text>

              <Image style={{  width: wp("90%"), height: hp("65%")}}
              source={require('../img/m1.jpg')}>
              </Image>
              <Image style={{  width: wp("90%"), height: hp("70%")}}
              source={require('../img/m2.jpg')}>
              </Image>
              <Image style={{  width: wp("90%"), height: hp("65%")}}
              source={require('../img/m3.jpg')}>
                </Image>
                <Image style={{  width: wp("90%"), height: hp("68%")}}
              source={require('../img/m4.jpg')}>
              </Image>
              <Image style={{  width: wp("90%"), height: hp("75%")}}
              source={require('../img/m5.jpg')}>
              </Image>
              <Image style={{  width: wp("90%"), height: hp("75%")}}
              source={require('../img/m6.jpg')}>
              </Image>
              <Image style={{  width: wp("90%"), height: hp("70%")}}
              source={require('../img/m7.jpg')}>
              </Image>
              <Image style={{  width: wp("90%"), height: hp("70%")}}
              source={require('../img/m8.jpg')}>
              </Image>
              <View style={{ flexDirection: 'column', width: wp('90%'), borderRadius: 6, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: wp('15%')}}>
              <Text style={styles.header3}>หากแอปพลิเคชันมีปัญหาหรือมี
              อาการค้าง</Text>
              <Text style={styles.header3}>ให้ปิดแอปพลิเคชันแล้วเปิดใหม่</Text>
              <Text>  </Text>
              <Text style={styles.header3}>ติดต่อเราที่</Text>
              <Text style={styles.header3}>e-mail: easyfarm.smart@gmail.com  </Text>
              <Text>  </Text>
              <Text style={styles.header3}>โทร: 092-8104990 </Text>
              </View>
              
            </View>
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
  header3: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    alignItems: 'center',
  },
});

export default Manual1creen;