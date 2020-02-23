import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert, Switch } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class ManualScreen extends Component {
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
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
            <Image style={{ padding: 10, width: wp("6%"), height: hp("6%"), resizeMode: 'contain', margin: hp('0.3%'),marginLeft:hp('2%') }}
                  source={require('../img/back.png')}></Image>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ faex: 1, justifyContent: 'center', backgroundColor: '#FAFAFA', alignItems: 'center', padding: 5 }}>
              <Text style={styles.header}>คู่มือการใช้งาน</Text>
            </View>
            <View style={{ flexDirection: 'column', width: wp('80%'), height: 700, borderRadius: 6, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft:25 }}>
              <Text>  </Text>
              <Text style={styles.header3}>หากแอปพลิเคชันมีปัญหาหรือมี
              อาการค้างให้ปิดแอปพลิเคชันแล้วเปิดใหม่</Text>
              <Text>  </Text>
              <Text style={styles.header3}>ติดต่อเราที่</Text>
              <Text style={styles.header3}>e-mail: easyfarm.smart@gmail.com  </Text>
              <Text>  </Text>
              <Text style={styles.header3}>โทร: 092-8104990 </Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
  },
});

export default ManualScreen;