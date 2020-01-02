import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Linking, AppRegistry, Image, FontSize, ScrollView, Alert } from 'react-native';

class DevicedataScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#FAFAFA' }}>
        <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginTop: 10 }}>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', }}>
            <Image style={{ padding: 10, width: 27, height: 27, resizeMode: 'contain', margin: 10, marginTop: 21 }}
              source={require('../img/back.png')}></Image>
          </View>
          <Text style={styles.header}>เครื่องที่ 1</Text>
          <TouchableOpacity >
            <Text style={{ fontSize: 17, color: '#00000', margin: 10, marginTop: 21, fontWeight: 'bold' }}>แก้ไข</Text>
          </TouchableOpacity>
        </View>


        <View style={{ justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>

          <View style={{
            flexDirection: 'column', width: 343, borderRadius: 6, backgroundColor: '#FEE7E7',
            margin: 5, justifyContent: 'flex-start', alignItems: 'center',
          }}>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: 343, }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 343, }}>
                <View style={{ flexDirection: 'row', faex: 1, margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                  <Image style={{ padding: 5, width: 25, height: 25, resizeMode: 'contain', margin: 2, }}
                    source={require('../img/h1.png')}></Image>
                  <Text style={styles.txtHea}>อุณหภูมิ</Text>
                </View>
                <View style={{ flexDirection: 'row', faex: 1, margin: 10, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <Image style={{ padding: 5, width: 72, height: 24, resizeMode: 'contain', margin: 2, }}
                    source={require('../img/normal.png')}></Image>
                </View>
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'flex-start', width: 343, marginLeft: 25, marginBottom: 10
              }}>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: 151.5, borderEndWidth: 1, borderEndColor: '#000000', marginEnd: 15 }}>
                  <Text style={styles.txtTitle}>ค่าตั้งต้น</Text>
                  <Text style={styles.txtData}>25-35 °C</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: 171.5, marginBottom: 10 }}>
                  <Text style={styles.txtTitle}>ค่าที่ได้</Text>
                  <Text style={styles.txtData}>30 °C</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{
            flexDirection: 'column', width: 343, borderRadius: 6, backgroundColor: '#FFFBE9',
            margin: 5, justifyContent: 'flex-start', alignItems: 'flex-start',
          }}>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: 343, alignItems: 'flex-start' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 343, }}>
                <View style={{ flexDirection: 'row', faex: 1, margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                  <Image style={{ padding: 5, width: 25, height: 25, resizeMode: 'contain', margin: 2, }}
                    source={require('../img/h3.png')}></Image>
                  <Text style={styles.txtHea}> pH</Text>
                </View>
                <View style={{ flexDirection: 'row', faex: 1, margin: 10, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <Image style={{ padding: 5, width: 72, height: 24, resizeMode: 'contain', margin: 2, }}
                    source={require('../img/normal.png')}></Image>
                </View>
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'flex-start', width: 343, marginLeft: 25, marginBottom: 10
              }}>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: 151.5, borderEndWidth: 1, borderEndColor: '#000000', marginEnd: 15 }}>
                  <Text style={styles.txtTitle}>ค่าตั้งต้น</Text>
                  <Text style={styles.txtData}>5-7</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: 171.5, marginBottom: 10 }}>
                  <Text style={styles.txtTitle}>ค่าที่ได้</Text>
                  <Text style={styles.txtData}>6</Text>
                </View>
              </View>
            </View>
            <Text style={styles.txtHea2}>
              การวิเคราะห์  </Text>
            <View style={{ height: 60 }}>
            </View>

          </View>
          <View style={{
            flexDirection: 'column', width: 343, borderRadius: 6, backgroundColor: '#E0F3FF',
            margin: 5, justifyContent: 'flex-start', alignItems: 'flex-start',
          }}>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: 343, alignItems: 'flex-start' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 343, }}>
                <View style={{ flexDirection: 'row', faex: 1, margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                  <Image style={{ padding: 5, width: 25, height: 25, resizeMode: 'contain', margin: 2, }}
                    source={require('../img/h2.png')}></Image>
                  <Text style={styles.txtHea}> ความชื้น</Text>
                </View>
                <View style={{ flexDirection: 'row', faex: 1, margin: 10, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <Image style={{ padding: 5, width: 72, height: 24, resizeMode: 'contain', margin: 2, }}
                    source={require('../img/normal.png')}></Image>
                </View>
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'flex-start', width: 343, marginLeft: 25, marginBottom: 10
              }}>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: 151.5, borderEndWidth: 1, borderEndColor: '#000000', marginEnd: 15 }}>
                  <Text style={styles.txtTitle}>ค่าตั้งต้น</Text>
                  <Text style={styles.txtData}>5-7</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: 171.5, marginBottom: 10 }}>
                  <Text style={styles.txtTitle}>ค่าที่ได้</Text>
                  <Text style={styles.txtData}>6</Text>
                </View>
              </View>
            </View>
            <Text style={styles.txtHea2}>
              การวิเคราะห์
                </Text>
            <View style={{ height: 60 }}>
            </View>
          </View>
          <View style={{
            flexDirection: 'column', width: 343, borderRadius: 6, backgroundColor: '#C0E1B9',
            margin: 5, justifyContent: 'flex-start', alignItems: 'flex-start',
          }}>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: 343, alignItems: 'flex-start' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 343, }}>
                <View style={{ flexDirection: 'row', faex: 1, margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                  <Image style={{ padding: 5, width: 25, height: 25, resizeMode: 'contain', margin: 2, }}
                    source={require('../img/h4.png')}></Image>
                  <Text style={styles.txtHea}>่ที่ตั้งอุปกรณ์</Text>
                </View>
                
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'flex-start', width: 343, marginLeft: 25, marginBottom: 10
              }}>
               
              </View>
            </View>
            
            <View style={{ height: 60 }}>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
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
  txtTitle: {
    fontSize: 15,
    color: '#000000',

  },
  txtHea: {
    fontSize: 16,
    color: '#000000',

  },
  txtData: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 5
  },
  txtHea2: {
    fontSize: 16,
    color: '#5BB95A',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 20
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
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    // margin: 10 ,
    // marginRight:10, 
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff'
  }
});


export default DevicedataScreen;