import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class ShowreportScreen extends Component{

  // statusList() {
  //   if(this.props.obj.status == 'ON'){
  //       // console.log("ON");
  //       return <Image style={{ padding: 5, width: 43, height: 21, resizeMode: 'contain', marginTop: 10, }}
  //       source={require('../img/normal.png')}></Image>
  //   } else {
  //       // console.log("OFF");
  //       return <Image style={{ padding: 5, width: 43, height: 21, resizeMode: 'contain', marginTop: 10, }}
  //       source={require('../img/no-normal.png')}></Image>
  //   }
  // }
    render(){
        return(
            <View style={{ flexDirection: 'column', width: wp('90%'), borderRadius: 6,borderColor:'#FAFAFA ', 
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            elevation: 2,
            backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('80%'),borderRadius: 6, backgroundColor: '#FFFFFF',  }}>
                    {/* <View style={{ flexDirection: 'row', faex: 1, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <Image style={{ padding: 5, width: 20, height: 20, resizeMode: 'contain', margin: 2, }}
                        source={require('../img/sunc.png')}></Image>
                        <Text style={styles.header3}> ปรกติ/ไม่ปรกติ </Text>
                    </View> */}
                    {/* {this.statusList()} */}
                    <View style={{ flexDirection: 'row', faex: 1, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <Text style={styles.header3}> {this.props.day} {this.props.month} {this.props.year}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',width: wp('80%'), }}>
                  <View style={{ flexDirection: 'row', width: wp('37%'), backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                      <Image style={{ padding: 5, width: wp('12%'), height: hp('6%'), resizeMode: 'contain', margin: 2, }}
                      source={require('../img/hum.png')}></Image>
                      <View style={{ flexDirection: 'column', faex: 1, marginLeft: 5 }}>
                      <Text style={styles.header3}>ความชื้น</Text>
                      <Text style={styles.txtdata}>{parseFloat(this.props.hm).toFixed(2)}%</Text>
                      </View>
                  </View>
                  <View style={{ flexDirection: 'row', width: wp('37%'), backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                      <Image style={{ padding: 5, width: wp('12%'), height: hp('6%'), resizeMode: 'contain', margin: 2, }}
                      source={require('../img/ph2.png')}></Image>
                      <View style={{ flexDirection: 'column', faex: 1, marginLeft: 5 }}>
                      <Text style={styles.header3}>pH</Text>
                    <Text style={styles.txtdata}>{parseFloat(this.props.ph).toFixed(2)}</Text>
                      </View>
                  </View>
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
      fontSize: 15,
      color: '#5483EF',
  
      alignItems: 'flex-start'
  
    },
    txtdata: {
      fontSize: 17,
      color: '#000000',
  
      alignItems: 'flex-start'
  
    },
    txtname: {
      fontSize: 18,
      color: '#000000',
      fontWeight: 'bold',
      marginRight: 15,
      marginLeft: 15,
  
  
    },
    select: {
      justifyContent: 'flex-end',
      alignContent: 'center',
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      paddingLeft: 10,
      width: 100,
      height: 40,
      borderColor: '#000000',
      borderWidth: 1,
      fontSize: 15,
  
    },
  });
  
export default ShowreportScreen;