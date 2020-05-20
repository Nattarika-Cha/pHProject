import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Linking, AppRegistry, Image, FontSize, Dimensions, ScrollView, Alert, AsyncStorage, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';
import axios from 'axios';
import MapView from "react-native-maps";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 8;
const CARD_WIDTH = CARD_HEIGHT - 70;

var status = 0;
var num = 0;
var pump = '';
var old_status_pump = '';
var count_status_pump = 0;

class DevicedataWaterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      age: '',
      area: '',
      area_type: '',
      humidity_low: '',
      humidity_hight: '',
      name: '',
      ph_low: '',
      ph_hight: '',
      soil_type: '',
      region: {
        latitude: 13.8194926,
        longitude: 100.5137078,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068,
      },
      latitude: 0.0,
      longitude: 0.0,
      Humidity: '',
      pH: '',
      waterpH: '',
      pump: '',
      date: '',
      area_analyze: '',
      pH_getdata: '',
      text_analyze_ph: '',
      text_analyze_ph1: '',
      text_analyze_ph2: '',
      text_analyze_ph3: '',
      text_analyze_ph4: '',
      text_analyze_hm: '',
      text_status_ph: '',
      text_status_hm: '',
      status_pump: '',
      gps: true,
      status_buttom_pump: 'auto'
    };
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  _retrieveData = async () => {
    status += 1;
    try {
      const value = await AsyncStorage.getItem('user');
      if (value != null) {
        var data = JSON.parse(value);
        this.setState({ token: data.token });
        if (this.state.token != '') {
          status = 0;
        //   axios.get('http://165.22.250.24:3030/config/device_config', {
        //     params: {
        //       serialDevice: this.props.navigation.state.params.serialDevice
        //     }
        //   })
        //     .then(response => {
        //       const device_config = response.data;
        //       //console.log(device_config);
        //       this.setState({
        //         age: device_config.age,
        //         area: device_config.area,
        //         area_type: device_config.area_type,
        //         humidity_low: device_config.humidity_low,
        //         humidity_hight: device_config.humidity_hight,
        //         name: device_config.name,
        //         ph_low: device_config.pH_low,
        //         ph_hight: device_config.pH_hight,
        //         soil_type: device_config.soil_type
        //       });
        //     })
        //     .catch(function (error) {
        //       // console.log(error);
        //     })

          axios.get('http://165.22.250.24:3030/setting/get_setting', {
            params: {
              token: this.state.token
            }
          })
            .then(response => {
              const setting = response.data;
              this.setState({
                gps: setting.gps
              });
            })
            .catch(function (error) {
              // console.log(error);
            })

          this.intervalId = setInterval(() => {
            axios.get('http://165.22.250.24:3030/senser/data_senser', {
              params: {
                serialDevice: this.props.navigation.state.params.serialDevice
              }
            })
              .then(data_senser => {
                // console.log(data_senser.data);
                this.setState({
                  latitude: parseFloat(data_senser.data.latitude),
                  longitude: parseFloat(data_senser.data.longitude),
                  // Humidity: data_senser.data.moisture,
                  // pH: data_senser.data.pH,
                  waterpH: data_senser.data.WaterpH,
                  // pump: data_senser.data.pump,
                  date: data_senser.data.date
                });
                // num = 0;
                // this.Humidity_analyze();
                // this.pH_analyze();
                // // console.log("Pump  " + pump);
                // // console.log("Old   " + old_status_pump);
                // // console.log("Conut " + count_status_pump)
                // if (pump == '2' && old_status_pump == data_senser.data.pump && count_status_pump != 60) {
                //   count_status_pump = count_status_pump + 1;
                // } else {
                //   this.status_pump();
                //   count_status_pump = 0;
                // }
              })
              .catch(function (error) {
                console.log(error);
              })
          }, 1000);
        } else {
          if (status == 2) {
            status = 0;
            Alert.alert(
              'Error',
              'หมดอายุเข้าใช้งาน',
              [
                { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
              ],
              { cancelable: false }
            )
          }
        }
      } else {
        console.log("test3");
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      // setInterval(() => {
      this._retrieveData();
      // }, 3000);
    });
  }

//   onEditdevice() {
//     this.props.navigation.navigate('Editdevice', {
//       serialDevice: this.props.navigation.state.params.serialDevice
//     })
//   }

  // img_pH() {
  //   setInterval(() => {
  //     if ((parseFloat(this.state.pH) >= parseFloat(this.state.ph_low)) && (parseFloat(this.state.pH) <= parseFloat(this.state.ph_hight))) {
  //       this.setState({ text_status_ph: require('../img/normal.png') });
  //       //return <Image style={{ padding: 5, width: 72, height: 24, resizeMode: 'contain', margin: 2, }} source={require('../img/normal.png')}></Image>
  //     }
  //     else {
  //       this.setState({ text_status_ph: require('../img/no-normal.png') });
  //       //return <Image style={{ padding: 5, width: 72, height: 24, resizeMode: 'contain', margin: 2, }} source={require('../img/no-normal.png')}></Image>
  //     }
  //   }, 1000);
  // }

//   Humidity_analyze() {
//     // this.intervalId1 = setInterval(() => {
//     if ((parseFloat(this.state.Humidity) >= parseFloat(this.state.humidity_low)) && (parseFloat(this.state.Humidity) <= parseFloat(this.state.humidity_hight))) {
//       this.setState({
//         text_status_hm: require('../img/normal.png'),
//         text_analyze_hm: 'ความชื้นปรกติ'
//       });
//       // console.log("testttt1");
//       // clearInterval(this.intervalId1);
//       // return <Image style={{ padding: 5, width: 72, height: 24, resizeMode: 'contain', margin: 2, }} source={require('../img/normal.png')}></Image>
//     } else {
//       this.setState({
//         text_status_hm: require('../img/no-normal.png'),
//         text_analyze_hm: 'ความชื้นผิดปรกติ'
//       });
//       // console.log("testttt2");
//       // clearInterval(this.intervalId1);
//       // return <Image style={{ padding: 5, width: 72, height: 24, resizeMode: 'contain', margin: 2, }} source={require('../img/no-normal.png')}></Image>
//     }
//     // }, 3000);
// //   }

//   pH_analyze() {
//     // setInterval(() => {
//     // console.log(num);
//     if ((parseFloat(this.state.pH) >= parseFloat(this.state.ph_low)) && (parseFloat(this.state.pH) <= parseFloat(this.state.ph_hight))) {
//       var text = "ค่าปกติ";
//       this.setState({
//         text_analyze_ph: text,
//         text_analyze_ph1: '',
//         text_analyze_ph2: '',
//         text_analyze_ph3: '',
//         text_analyze_ph4: '',
//         text_status_ph: require('../img/normal.png')
//       });
//     } else {
//       this.setState({ text_status_ph: require('../img/no-normal.png') });
//       var pH_getdata = -1;
//       var area_analyze = 0;
//       if ((parseFloat(this.state.pH) < 3.5)) {
//         pH_getdata = 3;
//       } else if ((parseFloat(this.state.pH) >= 3.5) && (parseFloat(this.state.pH) < 4)) {
//         pH_getdata = 3.5;
//       } else if ((parseFloat(this.state.pH) >= 4) && (parseFloat(this.state.pH) < 4.5)) {
//         pH_getdata = 4;
//       } else if ((parseFloat(this.state.pH) >= 4.5) && (parseFloat(this.state.pH) < 5)) {
//         pH_getdata = 4.5;
//       } else if ((parseFloat(this.state.pH) >= 5) && (parseFloat(this.state.pH) < 6)) {
//         pH_getdata = 5;
//       } else if ((parseFloat(this.state.pH) >= 6) && (parseFloat(this.state.pH) < 6.5)) {
//         pH_getdata = 6;
//       } else if ((parseFloat(this.state.pH) >= 6.5) && (parseFloat(this.state.pH) < 8)) {
//         pH_getdata = 7;
//       } else if ((parseFloat(this.state.pH) >= 8)) {
//         pH_getdata = 8;
//       }

//       if ((pH_getdata == 3.5) || (pH_getdata == 4) || (pH_getdata == 4.5) || (pH_getdata == 5)) {
//         axios.get('http://165.22.250.24:3030/analyze/analyze', {
//           params: {
//             pH: pH_getdata,
//             soil_type: this.state.soil_type
//           }
//         })
//           .then(analyze_data => {
//             const analyze = analyze_data.data;
//             if (this.state.area_type == "R") {
//               area_analyze = this.state.area * analyze.limestone;
//             } else if (this.state.area_type == "TrV") {
//               area_analyze = (this.state.area / 400) * analyze.limestone;
//             } else if (this.state.area_type == "K") {
//               area_analyze = (this.state.area / 4) * analyze.limestone;
//             } else if (this.state.area_type == "M") {
//               area_analyze = (this.state.area / 1600) * analyze.limestone;
//             }
//             var text = "ดินเป็นกรด สามารถเลือกปรับค่าคืนได้ ดังนี้";
//             var text1 = "1. เติมหินปูนบดละเอียด " + area_analyze + " กก.";
//             var text2 = "2. เติมหินปูนขาว " + (area_analyze * 0.74) + " กก.";
//             var text3 = "3. เติมหินปูนโดโลไมต์ " + (area_analyze * 0.92) + " กก.";
//             var text4 = "4. เติมหินปูนมร์ล " + (area_analyze * 1.25) + " กก.";
//             this.setState({
//               text_analyze_ph: text,
//               text_analyze_ph1: text1,
//               text_analyze_ph2: text2,
//               text_analyze_ph3: text3,
//               text_analyze_ph4: text4
//             });
//           })
//           .catch(function (error) {
//             // console.log(error);
//           })
//       } else if ((pH_getdata == 6) && (num == 0) && (pH_getdata != -1)) {
//         var text = "ดินของคุณเป็นกรด ควรเติมสารปรับค่าหรือปุ๋ยที่มีฤทธิ์เป็นด่าง";
//         this.setState({
//           text_analyze_ph: text,
//           text_analyze_ph1: '',
//           text_analyze_ph2: '',
//           text_analyze_ph3: '',
//           text_analyze_ph4: ''
//         });
//         num++;
//       } else if ((pH_getdata == 7) && (num == 0) && (pH_getdata != -1)) {
//         var text = "ดินของคุณมีความผิดปรกติจากค่าที่ตั้งไว้ แต่มีความอุดมสมบูรณ์ดี";
//         this.setState({
//           text_analyze_ph: text,
//           text_analyze_ph1: '',
//           text_analyze_ph2: '',
//           text_analyze_ph3: '',
//           text_analyze_ph4: ''
//         });
//         num++;
//       } else if ((pH_getdata == 8) && (num == 0) && (pH_getdata != -1)) {
//         var text = "ดินของคุณเป็นด่าง ควรเติมสารปรับค่าหรือปุ๋ยที่มีฤทธิ์เป็นกรด";
//         this.setState({
//           text_analyze_ph: text,
//           text_analyze_ph1: '',
//           text_analyze_ph2: '',
//           text_analyze_ph3: '',
//           text_analyze_ph4: ''
//         });
//         num++;
//       } else {
//         if ((num == 0) && (pH_getdata != -1)) {
//           var text = "ดินของคุณเป็นกรดมาก ไม่ควรปลูกพืช";
//           this.setState({
//             text_analyze_ph: text,
//             text_analyze_ph1: '',
//             text_analyze_ph2: '',
//             text_analyze_ph3: '',
//             text_analyze_ph4: ''
//           });
//           num++;
//         }
//       }
//     }
//     // }, 1000);
//   }

//   pump() {
//     if (this.state.pump == '0')
//       var status = '1111';
//     else if (this.state.pump == '1')
//       var status = '0000'
//     pump = '2';
//     this.setState({
//       pump: '2',
//       status_pump: require('../img/w-w.png'),
//       status_buttom_pump: 'none'
//     });
//     axios.post('http://165.22.250.24:3030/senser/pump', {
//       devive_EUI: this.props.navigation.state.params.devive_EUI,
//       port: this.props.navigation.state.params.port,
//       status: status
//     })
//       .then(response => {
//         // console.log(response.data.substring(1, 4));
//         //console.log(response.data.status)
//         if (response.data.status != 'QUEUED') {
//           pump = old_status_pump;
//         }
//         //this.status_pump();
//         // console.log(response)
//       })
//       .catch(function (error) {
//         // console.log(error);
//       })
//   }

//   status_pump() {
//     if (this.state.pump == '0') {
//       pump = '0';
//       old_status_pump = '0';
//       this.setState({
//         status_pump: require('../img/w-off.png'),
//         status_buttom_pump: 'auto'
//       });
//     }
//     else if (this.state.pump == '1') {
//       pump = '1';
//       old_status_pump = '1';
//       this.setState({
//         status_pump: require('../img/w-on.png'),
//         status_buttom_pump: 'auto'
//       });
//     } else {
//       pump = '2';
//       this.setState({
//         status_pump: require('../img/w-w.png'),
//         status_buttom_pump: 'none'
//       });
//     }
//   }
  // Humidity_analyze() {
  //   setInterval(() => {
  //     if ((parseFloat(this.state.Humidity) >= parseFloat(this.state.humidity_low)) && (parseFloat(this.state.Humidity) <= parseFloat(this.state.humidity_hight))) {
  //       this.setState({ text_analyze_hm: 'ความชื้นปรกติ' });
  //       // return <Text></Text>
  //     } else {
  //       this.setState({ text_analyze_hm: 'ความชื้นผิดปรกติ' });
  //       // return <Text>ความชื้นผิดปรกติ </Text>
  //     }
  //   }, 1000);
  // }
  showGPS() {
    if (this.state.gps == true) {
      return <MapView.Marker coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}
        title={this.props.navigation.state.params.serialDevice}>
        <Image style={{ width: wp("10%"), height: hp("5%"), }} source={require('../img/devce.png')}></Image>
        {/* <View style={styles.marker} /> */}
      </MapView.Marker>
    }
  }

  render() {
    const { navigation } = this.props;
    this.didBlurListener = navigation.addListener('didBlur', () => {
      clearInterval(this.intervalId);
    });
    return (
      <ScrollView style={{ backgroundColor: '#FAFAFA' }}>
        <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginTop: 10 }}>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Image style={{ padding: 10, width: wp("6%"), height: hp("6%"), resizeMode: 'contain', margin: hp('0.3%'), marginLeft: hp('2%') }}
                source={require('../img/back.png')} ></Image>
            </TouchableOpacity>
          </View>
          <View style={{flex:1 , flexDirection:'row', justifyContent:'flex-start', paddingLeft: wp('24%')}}>
          <Text style={styles.header}>{this.props.navigation.state.params.serialDevice}</Text>
          </View>

         
          {/* <TouchableOpacity >
            <Text style={{ fontSize: hp('2.5%'), color: '#00000', margin: 10, marginTop: hp('2.5%'), fontWeight: 'bold' }} onPress={this.onEditdevice.bind(this)}>คั้งค่า</Text>
          </TouchableOpacity> */}
        </View>


        <View style={{ justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
          {/* <View style={{ flexDirection: 'column', width: wp('85%'), borderRadius: 6, backgroundColor: '#FFFBE9',
            margin: 5, justifyContent: 'flex-start', alignItems: 'flex-start', shadowColor: "#000", shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            elevation: 2,
          }}>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: wp('80%'), alignItems: 'flex-start', }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('80%'), }}>
                <View style={{ flexDirection: 'row', faex: 1, margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                  <Image style={{ padding: 5, width: wp('8%'), height: hp('4%'), resizeMode: 'contain', margin: 2, }}
                    source={require('../img/h3.png')}></Image>
                  <Text style={styles.txtHea}> pH ในดิน</Text>
                </View>
                <View style={{ flexDirection: 'row', faex: 1, margin: 10, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <Image style={{ padding: 5, width: wp('13%'), height: hp('4%'), resizeMode: 'contain', margin: 2, }} source={this.state.text_status_ph}></Image>
                </View>
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'flex-start', width: wp('80%'), marginLeft: 25, marginBottom: 10
              }}>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: wp('37%'), borderEndWidth: 1, borderEndColor: '#000000', marginEnd: wp('5%') }}>
                  <Text style={styles.txtTitle}>ค่าตั้งต้น</Text>
                  <Text style={styles.txtData}>{this.state.ph_low} - {this.state.ph_hight}</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: wp('37%'), marginBottom: hp('1%') }}>
                  <Text style={styles.txtTitle}>ค่าที่ได้</Text>
                  <Text style={styles.txtData}>{this.state.pH}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.txtHea2}> การวิเคราะห์  </Text>

            <ScrollView>
              <View style={{ height: hp('15%'), marginLeft: wp('6'), marginRight: wp('5%') }}>
                <Text>{this.state.text_analyze_ph}</Text>
                <Text>{this.state.text_analyze_ph1}</Text>
                <Text>{this.state.text_analyze_ph2}</Text>
                <Text>{this.state.text_analyze_ph3}</Text>
                <Text>{this.state.text_analyze_ph4}</Text>
              </View>
            </ScrollView>

          </View> */}
          <View style={{ flexDirection: 'column', width: wp('85%'), borderRadius: 6, backgroundColor: '#baf1e4',
            margin: 5, justifyContent: 'flex-start', alignItems: 'flex-start', shadowColor: "#000", shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            elevation: 2,
          }}>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: wp('80%'), alignItems: 'flex-start', }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('80%'), }}>
                <View style={{ flexDirection: 'row', faex: 1, margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                  <Image style={{ padding: 5, width: wp('8%'), height: hp('4%'), resizeMode: 'contain', margin: 2, }}
                    source={require('../img/w-ph2.png')}></Image>
                  <Text style={styles.txtHea}> pH ในน้ำ</Text>
                </View>
                <View style={{ flexDirection: 'row', faex: 1, margin: 10, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  {/* {this.pH_analyze()} */}
                  <Image style={{ padding: 5, width: wp('13%'), height: hp('4%'), resizeMode: 'contain', margin: 2, }} source={this.state.text_status_ph}></Image>
                </View>
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'flex-start', width: wp('80%'), marginLeft: 25, marginBottom: 10
              }}>
                {/* <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: wp('37%'), borderEndWidth: 1, borderEndColor: '#000000', marginEnd: wp('5%') }}> */}
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: wp('37%'), marginEnd: wp('5%') }}>
                  <Text style={styles.txtTitle}>ค่าที่ได้</Text>
                  <Text style={styles.txtData}>{this.state.waterpH}</Text>
                </View>
                {/* <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: wp('37%'), marginBottom: hp('1%') }}>
                  <Text style={styles.txtTitle}>ค่าที่ได้</Text>
                  <Text style={styles.txtData}>{this.state.waterpH}</Text>
                </View> */}
              </View>
            </View>
            {/* <Text style={styles.txtHea2}> การวิเคราะห์  </Text>

            <ScrollView>
              <View style={{ height: hp('15%'), marginLeft: wp('6'), marginRight: wp('5%') }}>

                <Text>{this.state.text_analyze_ph}</Text>
                <Text>{this.state.text_analyze_ph1}</Text>
                <Text>{this.state.text_analyze_ph2}</Text>
                <Text>{this.state.text_analyze_ph3}</Text>
                <Text>{this.state.text_analyze_ph4}</Text>

              </View>
            </ScrollView> */}

          </View>
          {/* <View style={{
            flexDirection: 'column', width: wp('85%'), borderRadius: 6, backgroundColor: '#E0F3FF',
            margin: 5, justifyContent: 'flex-start', alignItems: 'flex-start',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            elevation: 2,
          }}>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: wp('80%'), alignItems: 'flex-start' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('80%'), }}>
                <View style={{ flexDirection: 'row', faex: 1, margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                  <Image style={{ padding: 5, width: wp('8%'), height: hp('4%'), resizeMode: 'contain', margin: 2, }}
                    source={require('../img/h2.png')}></Image>
                  <Text style={styles.txtHea}> ความชื้น</Text>
                </View>
                <View style={{ flexDirection: 'row', faex: 1, margin: 10, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <Image style={{ padding: 5, width: wp('13%'), height: hp('4%'), resizeMode: 'contain', margin: 2, }} source={this.state.text_status_hm}></Image>
                </View>
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'flex-start', width: wp('80%'), marginLeft: 25, marginBottom: 10
              }}>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: wp('37%'), borderEndWidth: 1, borderEndColor: '#000000', marginEnd: wp('5%') }}>
                  <Text style={styles.txtTitle}>ค่าตั้งต้น</Text>
                  <Text style={styles.txtData}>{this.state.humidity_low} - {this.state.humidity_hight}</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: wp('37%'), marginBottom: hp('1%') }}>
                  <Text style={styles.txtTitle}>ค่าที่ได้</Text>
                  <Text style={styles.txtData}>{this.state.Humidity}</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('80%'), }}>
              <View style={{ flexDirection: 'row', faex: 1, margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.txtHea2}>การวิเคราะห์</Text>
              </View>
              <View style={{ flexDirection: 'row', faex: 1, margin: 10, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <View pointerEvents={this.state.status_buttom_pump}>
                  <TouchableOpacity onPress={this.pump.bind(this)}>
                    <Image style={{ padding: 5, width: wp('13%'), height: hp('4%'), resizeMode: 'contain', margin: 2, }} source={this.state.status_pump}></Image>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{ height: hp('10%'), marginLeft: wp('6%') }}>
              <Text>{this.state.text_analyze_hm}</Text>
            </View>
          </View> */}
          <View style={{
            flexDirection: 'column', width: wp('85%'), borderRadius: 6, backgroundColor: '#C0E1B9',
            margin: 5, justifyContent: 'flex-start', alignItems: 'flex-start',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            elevation: 2,
          }}>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: wp('80%'), alignItems: 'flex-start' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('80%'), }}>
                <View style={{ flexDirection: 'row', faex: 1, margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                  <Image style={{ padding: 5, width: wp('8%'), height: hp('4%'), resizeMode: 'contain', margin: 2, }}
                    source={require('../img/h4.png')}></Image>
                  <Text style={styles.txtHea}> ที่ตั้งอุปกรณ์</Text>

                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: wp('80%'), marginLeft: wp('6%'), marginTop: 10 }}>
                <MapView
                  ref={map => this.map = map}
                  initialRegion={this.state.region}
                  style={styles.maphight}>
                  {this.showGPS()}
                </MapView>
              </View>
            </View>

            <View style={{ height: hp('3%') }}>
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
    alignItems: 'flex-start',
    
  },
  headerDevice: {
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  txtcanON: {
    fontSize: hp('2%'),
    color: '#51B1FB',
    alignItems: 'center',
    marginLeft: 10
  },
  txtcanOFF: {
    fontSize: hp('2%'),
    color: '#b7b7b7',
    alignItems: 'center',
    marginLeft: 10
  },
  txtTitle: {
    fontSize: hp('2%'),
    color: '#000000',
  },
  maphight: {
    width: wp('70%'),
    height: wp('50%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtHea: {
    fontSize: hp('2.2%'),
    color: '#000000',

  },
  txtData: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 5
  },
  txtHea2: {
    fontSize: hp('2.2%'),
    color: '#5BB95A',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: wp('6%')
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
  },
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
    width: wp('73.5%'),
    height: hp('40%'),
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default withNavigation(DevicedataWaterScreen);