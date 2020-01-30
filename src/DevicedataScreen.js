import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Linking, AppRegistry, Image, FontSize, ScrollView, Alert, AsyncStorage, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';
import axios from 'axios';
import MapView from "react-native-maps";
import { RNNotificationBanner } from 'react-native-notification-banner';
import Icon from 'react-native-vector-icons/FontAwesome'

var status = 0;
var num = 0;

class DevicedataScreen extends Component {
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
      latitude: '',
      longitude: '',
      Humidity: '',
      pH: '',
      date: '',
      area_analyze: '',
      pH_getdata: '',
      text_analyze_ph: '',
      text_analyze_ph1: '',
      text_analyze_ph2: '',
      text_analyze_ph3: '',
      text_analyze_ph4: ''
    };
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  _retrieveData = async () => {
    status += 1;
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        var data = JSON.parse(value);
        this.setState({ token: data.token });
        if (this.state.token != '') {
          status = 0;
          axios.get('http://165.22.250.24:3030/config/device_config', {
            params: {
              serialDevice: this.props.navigation.state.params.serialDevice
            }
          })
            .then(response => {
              const device_config = response.data;
              //console.log(device_config);
              this.setState({
                age: device_config.age,
                area: device_config.area,
                area_type: device_config.area_type,
                humidity_low: device_config.humidity_low,
                humidity_hight: device_config.humidity_hight,
                name: device_config.name,
                ph_low: device_config.pH_low,
                ph_hight: device_config.pH_hight,
                soil_type: device_config.soil_type
              });
            })
            .catch(function (error) {
              // console.log(error);
            })
          axios.get('http://165.22.250.24:3030/senser/data_senser', {
            params: {
              serialDevice: this.props.navigation.state.params.serialDevice
            }
          })
            .then(data_senser => {
              this.setState({
                latitude: data_senser.data.latitude,
                longitude: data_senser.data.longitude,
                Humidity: data_senser.data.moisture,
                pH: data_senser.data.pH,
                date: data_senser.data.date
              });
            })
            .catch(function (error) {
              console.log(error);
            })
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
      this._retrieveData();
      num = 0;
    });
  }

  onEditdevice() {
    this.props.navigation.navigate('Editdevice', {
      serialDevice: this.props.navigation.state.params.serialDevice
    })
  }

  img_pH() {
    if ((parseFloat(this.state.pH) <= parseFloat(this.state.ph_low)) && (parseFloat(this.state.pH) >= parseFloat(this.state.ph_hight))) {
      return <Image style={{ padding: 5, width: 72, height: 24, resizeMode: 'contain', margin: 2, }} source={require('../img/normal.png')}></Image>
    }
    else {
      return <Image style={{ padding: 5, width: 72, height: 24, resizeMode: 'contain', margin: 2, }} source={require('../img/no-normal.png')}></Image>
    }
  }

  img_Humidity() {
    if ((parseFloat(this.state.Humidity) <= parseFloat(this.state.humidity_low)) && (parseFloat(this.state.pH) >= parseFloat(this.state.humidity_hight))) {
      return <Image style={{ padding: 5, width: 72, height: 24, resizeMode: 'contain', margin: 2, }} source={require('../img/normal.png')}></Image>
    } else {
      return <Image style={{ padding: 5, width: 72, height: 24, resizeMode: 'contain', margin: 2, }} source={require('../img/no-normal.png')}></Image>
    }
  }

  pH_analyze() {

    if ((parseFloat(this.state.pH) <= parseFloat(this.state.ph_low)) && (parseFloat(this.state.pH) >= parseFloat(this.state.ph_hight))) {
      var text = "ค่าปกติ";
      this.setState({ text_analyze_ph: text });
    } else {
      var pH_getdata = -1;
      var area_analyze = 0;
      if((parseFloat(this.state.pH) < 3.5)) {
        pH_getdata = 3;
      } else if ((parseFloat(this.state.pH) >= 3.5) && (parseFloat(this.state.pH) < 4)) {
        pH_getdata = 3.5;
      } else if ((parseFloat(this.state.pH) >= 4) && (parseFloat(this.state.pH) < 4.5)) {
        pH_getdata = 4;
      } else if ((parseFloat(this.state.pH) >= 4.5) && (parseFloat(this.state.pH) < 5)) {
        pH_getdata = 4.5;
      } else if ((parseFloat(this.state.pH) >= 5) && (parseFloat(this.state.pH) < 6)) {
        pH_getdata = 5;
      } else if ((parseFloat(this.state.pH) >= 6) && (parseFloat(this.state.pH) < 6.5)) {
        pH_getdata = 6;
      } else if ((parseFloat(this.state.pH) >= 6.5) && (parseFloat(this.state.pH) < 7.9)) {
        pH_getdata = 7;
      } else if ((parseFloat(this.state.pH) >= 8)) {
        pH_getdata = 8;
      }

      if ((pH_getdata == 3.5) || (pH_getdata == 4) || (pH_getdata == 4.5) || (pH_getdata == 5)) {
        axios.get('http://165.22.250.24:3030/analyze/analyze', {
          params: {
            pH: pH_getdata,
            soil_type: this.state.soil_type
          }
        })
          .then(analyze_data => {
            const analyze = analyze_data.data;
            if (this.state.area_type == "R") {
              area_analyze = this.state.area * analyze.limestone;
            } else if (this.state.area_type == "TrV") {
              area_analyze = (this.state.area / 400) * analyze.limestone;
            } else if (this.state.area_type == "K") {
              area_analyze = (this.state.area / 4) * analyze.limestone;
            } else if (this.state.area_type == "M") {
              area_analyze = (this.state.area / 1600) * analyze.limestone;
            }
            var text = "ดินเป็นกรด สามารถเลือกปรับค่าดืนได้ ดังนี้";
            var text1 = "1. ควรเติมหินปูนบดละเอียด " + area_analyze + " กก.";
            var text2 = "2. เติมหินปูนขาว " + (area_analyze * 0.74) + " กก.";
            var text3 = "3. เติมหินปูนโดโลไมต์ " + (area_analyze * 0.92) + " กก.";
            var text4 = "4. เติมหินปูนมร์ล " + (area_analyze * 1.25) + " กก.";
            this.setState({
              text_analyze_ph: text,
              text_analyze_ph1: text1,
              text_analyze_ph2: text2,
              text_analyze_ph3: text3,
              text_analyze_ph4: text4
            });
          })
          .catch(function (error) {
            // console.log(error);
          })
      } else if ((pH_getdata == 6) && (num == 0) && (pH_getdata != -1)) {
        var text = "ดินของคุณเป็นกรด ควรเติมสารปรับค่าหรือปุ๋ยที่มีฤทธิ์เป็นด่าง";
        this.setState({ text_analyze_ph: text });
        num++;
      } else if ((pH_getdata == 7) && (num == 0) && (pH_getdata != -1)) {
        var text = "ดินของคุณมีความผิดปรกติจากค่าที่ตั้งไว้ แต่มีความอุดมสมบูรณ์ดี";
        this.setState({ text_analyze_ph: text });
        num++;
      } else if ((pH_getdata == 8) && (num == 0) && (pH_getdata != -1)) {
        var text = "ดินของคุณเป็นด่าง ควรเติมสารปรับค่าหรือปุ๋ยที่มีฤทธิ์เป็นกรด";
        this.setState({ text_analyze_ph: text });
        num++;
      } else {
        if ((num == 0) && (pH_getdata != -1)) {
          var text = "ดินของคุณเป็นกรดมาก ไม่ควรปลูกพืช";
          this.setState({ text_analyze_ph: text });
          num++;
        }
      }
    }
  }

  Humidity_analyze() {
    if ((parseFloat(this.state.Humidity) <= parseFloat(this.state.humidity_low)) && (parseFloat(this.state.Humidity) >= parseFloat(this.state.humidity_hight))) {
      return <Text>ความชื้นปรกติ</Text>
    } else {
      return <Text>ความชื้นผิดปรกติ </Text>
    }
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#FAFAFA' }}>
        <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginTop: 10 }}>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Image style={{ padding: 10, width: 27, height: 27, resizeMode: 'contain', margin: 10, marginTop: 21 }}
                source={require('../img/back.png')}></Image>
            </TouchableOpacity>
          </View>
          <Text style={styles.header}>{this.props.navigation.state.params.serialDevice}</Text>
          <TouchableOpacity >
            <Text style={{ fontSize: 17, color: '#00000', margin: 10, marginTop: 21, fontWeight: 'bold' }} onPress={this.onEditdevice.bind(this)}>แก้ไข</Text>
          </TouchableOpacity>
        </View>


        <View style={{ justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
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
                  {this.img_pH()}
                </View>
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'flex-start', width: 343, marginLeft: 25, marginBottom: 10
              }}>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: 151.5, borderEndWidth: 1, borderEndColor: '#000000', marginEnd: 15 }}>
                  <Text style={styles.txtTitle}>ค่าตั้งต้น</Text>
                  <Text style={styles.txtData}>{this.state.ph_low} - {this.state.ph_hight}</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: 171.5, marginBottom: 10 }}>
                  <Text style={styles.txtTitle}>ค่าที่ได้</Text>
                  <Text style={styles.txtData}>{this.state.pH}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.txtHea2}> การวิเคราะห์  </Text>

            <ScrollView>
              <View style={{ height: 60, marginLeft: 30 }}>
                {this.pH_analyze()}

                <Text>{this.state.text_analyze_ph}</Text>
                <Text>{this.state.text_analyze_ph1}</Text>
                <Text>{this.state.text_analyze_ph2}</Text>
                <Text>{this.state.text_analyze_ph3}</Text>
                <Text>{this.state.text_analyze_ph4}</Text>

              </View>
            </ScrollView>

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
                  {this.img_Humidity()}
                </View>
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'flex-start', width: 343, marginLeft: 25, marginBottom: 10
              }}>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: 151.5, borderEndWidth: 1, borderEndColor: '#000000', marginEnd: 15 }}>
                  <Text style={styles.txtTitle}>ค่าตั้งต้น</Text>
                  <Text style={styles.txtData}>{this.state.humidity_low} - {this.state.humidity_hight}</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: 171.5, marginBottom: 10 }}>
                  <Text style={styles.txtTitle}>ค่าที่ได้</Text>
                  <Text style={styles.txtData}>{this.state.Humidity}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.txtHea2}>
              การวิเคราะห์
                </Text>
            <View style={{ height: 60, marginLeft: 25 }}>
              {this.Humidity_analyze()}
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
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: 343, marginLeft: 25, marginTop: 10 }}>
                <MapView
                  ref={map => this.map = map}
                  initialRegion={this.state.region}
                  style={styles.maphight}>
                  <MapView.Marker coordinate={{ latitude: 13.8194926, longitude: 100.5137078 }}>
                    <Animated.View style={[styles.markerWrap]}>
                      <Animated.View style={[styles.ring]} />
                      <View style={styles.marker} />
                    </Animated.View>
                  </MapView.Marker>
                </MapView>
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
  maphight: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default withNavigation(DevicedataScreen);