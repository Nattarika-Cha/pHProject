import React, { Component } from "react";
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert, fontFamily, AsyncStorage } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
//import ChartScreenfrom from './ChartScreen';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { withNavigation } from 'react-navigation';
import ShowreportScreen from './ShowreportScreen';
var moment = require('moment');
var PH = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var HM = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var PH_NUM = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var HM_NUM = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var PH_DATA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var HM_DATA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var graph = {
  // labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
  labels: [],
  datasets: [
    {
      data: PH_DATA
    }
  ]
};

var graph1 = {
  // labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
  labels: [],
  datasets: [
    {
      data: PH_DATA
    }
  ]
};
var num = 0;
var device_select = '';
var Month = '';
var Year = '';

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
};

var device_senser = [];
var status;
class ReportScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Report: [],
      Device: [],
      device_select: '',
      Month: '',
      Year: '',
      start: '',
      end: '',
      day: ''
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
        // We have data!!
        var data = JSON.parse(value);
        this.setState({
          token: data.token,
          fname: data.fname,
          lname: data.lname,
          device_select: '',
          Month: '',
          Year: ''
        });
        if (this.state.token != '') {
          status = 0;
          axios.get('http://165.22.250.24:3030/device/device_list', {
            params: {
              token: this.state.token
            }
          })
            .then(response => {
              const Device = response.data;
              this.setState({ Device: Device });
              for (let i = 0; i < this.state.Device.length; i++) {
                device_senser[i] = { label: this.state.Device[i].serialDevice, value: this.state.Device[i].serialDevice };
              }
              console.log(device_senser);
            })
            .catch(function (error) {
              // console.log(error);
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
      this.cls_data();
    });
  }

  cls_data() {
    PH = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    HM = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    PH_NUM = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    HM_NUM = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    PH_DATA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    HM_DATA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    graph = {
      labels: [],
      datasets: [
        {
          data: PH_DATA
        }
      ]
    };

    graph1 = {
      labels: [],
      datasets: [
        {
          data: PH_DATA
        }
      ]
    };
    num = 0;
  }

  showdata() {
    // console.log(this.state.device_select);
    // console.log(this.state.Month);
    // console.log(this.state.Year);
    if ((this.state.device_select != device_select) || (this.state.Month != Month) || (this.state.Year != Year)) {
      device_select = this.state.device_select;
      Month = this.state.Month;
      Year = this.state.Year;
      // console.log("testttt");
      this.cls_data();
    }

    // console.log(num)

    if ((this.state.device_select != '') && (this.state.Month != '') && (this.state.Year != '') && (num <= 2)) {
      num += 1;
      if (this.state.Month == '1') {
        var start = (this.state.Year - 1) + "-12-31T17:00:00Z";
        var end = this.state.Year + "-01-31T17:00:00Z";
      } else if (this.state.Month == '2') {
        var start = this.state.Year + "-01-31T17:00:00Z";
        var end = this.state.Year + "-02-29T17:00:00Z";
      } else if (this.state.Month == '3') {
        var start = this.state.Year + "-02-29T17:00:00Z";
        var end = this.state.Year + "-03-31T17:00:00Z";
      } else if (this.state.Month == '4') {
        var start = this.state.Year + "-03-31T17:00:00Z";
        var end = this.state.Year + "-04-30T17:00:00Z";
      } else if (this.state.Month == '5') {
        var start = this.state.Year + "-04-30T17:00:00Z";
        var end = this.state.Year + "-05-31T17:00:00Z";
      } else if (this.state.Month == '6') {
        var start = this.state.Year + "-05-31T17:00:00Z";
        var end = this.state.Year + "-06-30T17:00:00Z";
      } else if (this.state.Month == '7') {
        var start = this.state.Year + "-06-30T17:00:00Z";
        var end = this.state.Year + "-07-31T17:00:00Z";
      } else if (this.state.Month == '8') {
        var start = this.state.Year + "-07-31T17:00:00Z";
        var end = this.state.Year + "-08-31T17:00:00Z";
      } else if (this.state.Month == '9') {
        var start = this.state.Year + "-08-31T17:00:00Z";
        var end = this.state.Year + "-09-30T17:00:00Z";
      } else if (this.state.Month == '10') {
        var start = this.state.Year + "-09-30T17:00:00Z";
        var end = this.state.Year + "-10-31T17:00:00Z";
      } else if (this.state.Month == '11') {
        var start = this.state.Year + "-10-31T17:00:00Z";
        var end = this.state.Year + "-11-30T17:00:00Z";
      } else if (this.state.Month == '12') {
        var start = this.state.Year + "-11-30T17:00:00Z";
        var end = this.state.Year + "-12-31T17:00:00Z";
      }
      this.setState({
        start: start,
        end: end
      });

      // console.log(this.state.device_select);
      // console.log(this.state.start);
      // console.log(this.state.end);
      axios.get('http://165.22.250.24:3030/senser/senser_history', {
        params: {
          serialDevice: this.state.device_select,
          start: this.state.start,
          end: this.state.end
        }
      })
        .then(response => {
          const Report = response.data;
          this.setState({ Report: Report });
          for (let i = 0; i < this.state.Report.length; i++) {
            var day = moment(this.state.Report[i].date).format('DD');
            // console.log(day);
            PH[day - 1] += parseFloat(this.state.Report[i].pH);
            PH_NUM[day - 1] += 1;
            PH_DATA[day - 1] = PH[day - 1] / PH_NUM[day - 1];
            HM[day - 1] += parseFloat(this.state.Report[i].moisture);
            HM_NUM[day - 1] += 1;
            HM_DATA[day - 1] = HM[day - 1] / HM_NUM[day - 1];
          }

          if (this.state.Month == 2) {
            if ((this.state.Year % 4) == 0) {
              graph = {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
                datasets: [
                  {
                    data: PH_DATA
                  }
                ]
              }

              graph1 = {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
                datasets: [
                  {
                    data: HM_DATA
                  }
                ]
              }

              this.setState({ day: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"] });
            } else {
              graph = {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
                datasets: [
                  {
                    data: PH_DATA
                  }
                ]
              }

              graph1 = {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
                datasets: [
                  {
                    data: HM_DATA
                  }
                ]
              }
              this.setState({ day: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"] });
            }
          } else if ((this.state.Month == 1) || (this.state.Month == 3) || (this.state.Month == 5) || (this.state.Month == 7) || (this.state.Month == 8) || (this.state.Month == 10) || (this.state.Month == 12)) {
            graph = {
              labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
              datasets: [
                {
                  data: PH_DATA
                }
              ]
            }

            graph1 = {
              labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
              datasets: [
                {
                  data: HM_DATA
                }
              ]
            }

            this.setState({ day: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"] });
          } else if ((this.state.Month == 4) || (this.state.Month == 6) || (this.state.Month == 9) || (this.state.Month == 11)) {
            graph = {
              labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
              datasets: [
                {
                  data: PH_DATA
                }
              ]
            }

            graph1 = {
              labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
              datasets: [
                {
                  data: HM_DATA
                }
              ]
            }

            this.setState({ day: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"] });
          }

          // console.log(PH_DATA);
          // console.log(HM_DATA);
          // console.log(PH);
          // console.log(HM);
          // console.log(PH_NUM);
          // console.log(HM_NUM);

        })
        .catch(function (error) {
          // console.log(error);
        })
    }
  }

  reportList() {
    if ((this.state.device_select != '') && (this.state.Month != '') && (this.state.Year != '')) {
      var month = '';
      if (this.state.Month == '1')
        month = 'ม.ค.';
      else if (this.state.Month == '2')
        month = 'ก.พ.';
      else if (this.state.Month == '3')
        month = 'มี.ค.';
      else if (this.state.Month == '4')
        month = 'เม.ย.';
      else if (this.state.Month == '5')
        month = 'พ.ค.';
      else if (this.state.Month == '6')
        month = 'มิ.ย.';
      else if (this.state.Month == '7')
        month = 'ก.ค.';
      else if (this.state.Month == '8')
        month = 'ส.ค.';
      else if (this.state.Month == '9')
        month = 'ก.ย.';
      else if (this.state.Month == '10')
        month = 'ต.ค.';
      else if (this.state.Month == '11')
        month = 'พ.ย.';
      else if (this.state.Month == '12')
        month = 'ธ.ค.';
      var year = parseInt(this.state.Year) + 543;
      // console.log("dayyyy:" + this.state.day.length);
      if (this.state.day.length > 0) {
        return this.state.day.map(function (object, i) {
          // console.log("i: " + i);
          return <ShowreportScreen ph={PH_DATA[i]} hm={HM_DATA[i]} day={i + 1} month={month} year={year} />
        });
      }

    }
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', }}>
        <View style={{ faex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: 7 }}>
          <Text style={styles.header}>รายงาน</Text>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
            <Text style={styles.txtname}>
              เลือกอุปกรณ์ :
            </Text>
            <View style={styles.select}>
              <RNPickerSelect
                onValueChange={(device_select) => this.setState({ device_select })}
                title="อุปกรณ์"
                placeholder={{
                  label: 'อุปกรณ์',
                  value: '',
                }}
                items={device_senser}
                value={this.state.device_select}
              />
            </View>
          </View>
        </View>

        <View style={{ height: 250, alignItems: 'center' }}>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
            <Text style={styles.txtname}>
              เลือกเดือน :
            </Text>
            <View style={styles.select}>
              <RNPickerSelect
                onValueChange={(Month) => this.setState({ Month })}
                title="เดือน"
                placeholder={{
                  label: 'เดือน',
                  value: '',
                }}
                items={[
                  { label: 'มกราคม', value: '1' },
                  { label: 'กุมภาพันธ์', value: '2' },
                  { label: 'มีนาคม', value: '3' },
                  { label: 'เมษายน', value: '4' },
                  { label: 'พฤษภาคม', value: '5' },
                  { label: 'มิถุนายน', value: '6' },
                  { label: 'กรกฎาคม', value: '7' },
                  { label: 'สิงหาคม', value: '8' },
                  { label: 'กันยายน', value: '9' },
                  { label: 'ตุลาคม', value: '10' },
                  { label: 'พฤศจิกายน', value: '11' },
                  { label: 'ธันวาคม', value: '12' },
                ]}
                value={this.state.Month}
              />
            </View>
          </View>

          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
            <Text style={styles.txtname}>
              เลือกปี :
            </Text>
            <View style={styles.select}>
              <RNPickerSelect
                onValueChange={(Year) => this.setState({ Year })}
                title="ปี"
                placeholder={{
                  label: 'ปี',
                  value: '',
                }}
                items={[
                  { label: '2018', value: '2018' },
                  { label: '2019', value: '2019' },
                  { label: '2020', value: '2020' },
                  { label: '2021', value: '2021' },
                  { label: '2022', value: '2022' },
                  { label: '2023', value: '2023' },
                  { label: '2024', value: '2024' },
                  { label: '2025', value: '2025' },
                  { label: '2026', value: '2026' },
                  { label: '2027', value: '2027' },
                  { label: '2028', value: '2028' },
                  { label: '2029', value: '2029' },
                  { label: '2030', value: '2030' },
                ]}
                value={this.state.Year}
              />
            </View>
          </View>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
            {/* <Button title="ค้นหา" color="#5BB95A" type="clear" onPress={this.showdata.bind(this)} /> */}
          </View>
          <View>
            {this.showdata()}
            <Text>ค่า pH</Text>
            <LineChart
              data={graph}
              width={Dimensions.get("window").width} // from react-native
              height={220}
              yAxisLabel=""
              yAxisSuffix=""
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </View>

          <View>
            <Text>ค่าความชื้น</Text>
            <LineChart
              data={graph1}
              width={Dimensions.get("window").width} // from react-native
              height={220}
              yAxisLabel=""
              yAxisSuffix=""
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </View>
        </View>

        <View style={{ faex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: 370 }}>
          <View style={{ width: 343, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Text style={styles.header2}>
              ประวัติ
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', width: 360, borderRadius: 6, backgroundColor: '#FFFFFF', margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
          {this.reportList()}
        </View>
      </ScrollView>
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
    width: 150,
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    fontSize: 15,
  },
  selectmonth: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingLeft: 10,
    width: 150,
    height: 40,
    fontSize: 15,
  },
  selectweek: {
    justifyContent: 'space-between',
    alignContent: 'center',
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingLeft: 10,
    width: 150,
    height: 40,
    fontSize: 15,
  },

});

export default withNavigation(ReportScreen);