import React, { Component } from "react";
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert, fontFamily, AsyncStorage } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
//import ChartScreenfrom from './ChartScreen';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { withNavigation } from 'react-navigation';
import ShowreportScreen from './ShowreportScreen';
import { hasPrefixSuffix } from "antd/lib/input/ClearableLabeledInput";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DatePicker from 'react-native-datepicker'
var moment = require('moment');
var PH = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var HM = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var PH_NUM = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var HM_NUM = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var PH_DATA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var HM_DATA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var graph = {
  labels: [],
  datasets: [
    {
      data: PH_DATA
    }
  ]
};

var graph1 = {
  labels: [],
  datasets: [
    {
      data: PH_DATA
    }
  ]
};

var num = 0;
var device_select = '';
var date = '';
var qty_day = '';
var date_lable = [];
var date_lable2 = [];

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
      // Month: '',
      // Year: '',
      start: '',
      end: '',
      day: '',
      date: '',
      qty_day: ''
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
          date: '',
          qty_day: ''
          // Month: '',
          // Year: ''
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
              // console.log(device_senser);
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
    PH = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    HM = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    PH_NUM = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    HM_NUM = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    PH_DATA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    HM_DATA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
    date_lable = [];
    date_lable2 = [];
  }

  showdata() {
    // console.log(this.state.device_select);
    // console.log(this.state.Month);
    // console.log(this.state.Year);
    if ((this.state.device_select != device_select) || (this.state.date != date) || (this.state.qty_day != qty_day)) {
      device_select = this.state.device_select;
      date = this.state.date;
      qty_day = this.state.qty_day;
      date_lable = [];
      this.cls_data();
    }

    // console.log(num)

    if ((this.state.device_select != '') && (this.state.date != '') && (this.state.qty_day != '') && (num <= 2)) {
      num += 1;
      if (this.state.qty_day == '7') {
        var end = moment(this.state.date).subtract(1, 'days').format('YYYY-MM-DD') + "T17:00:00Z";
        var start = moment(this.state.date).subtract(8, 'days').format('YYYY-MM-DD') + "T17:00:00Z";
        for (let z = 0; z < 7; z++) {
          date_lable[z] = moment(this.state.date).subtract(z, 'days').format('YYYY-MM-DD');
          date_lable2[z] = moment(this.state.date).subtract(z, 'days').format('DD');
        }
        PH = [0, 0, 0, 0, 0, 0, 0];
        HM = [0, 0, 0, 0, 0, 0, 0];
        PH_NUM = [0, 0, 0, 0, 0, 0, 0];
        HM_NUM = [0, 0, 0, 0, 0, 0, 0];
        PH_DATA = [0, 0, 0, 0, 0, 0, 0];
        HM_DATA = [0, 0, 0, 0, 0, 0, 0];
      } else if (this.state.qty_day == '14') {
        var end = moment(this.state.date).subtract(1, 'days').format('YYYY-MM-DD') + "T17:00:00Z";
        var start = moment(this.state.date).subtract(15, 'days').format('YYYY-MM-DD') + "T17:00:00Z";
        for (let z = 0; z < 14; z++) {
          date_lable[z] = moment(this.state.date).subtract(z, 'days').format('YYYY-MM-DD');
          date_lable2[z] = moment(this.state.date).subtract(z, 'days').format('DD');
        }
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
          // console.log(this.state.Report);
          for (let i = 0; i < this.state.Report.length; i++) {
            var day = moment(this.state.Report[i].date).format('DD');
            // console.log(day);
            if (this.state.qty_day == '7') {
              for (let m = 0; m < 7; m++) {
                if (moment(date_lable[m]).format('DD') == day)
                  var row = m;
              }
            } else {
              for (let m = 0; m < 14; m++) {
                if (moment(date_lable[m]).format('DD') == day)
                  var row = m;
              }
            }
            // console.log(row);
            PH[row] += parseFloat(this.state.Report[i].pH);
            PH_NUM[row] += 1;
            PH_DATA[row] = PH[row] / PH_NUM[row];
            HM[row] += parseFloat(this.state.Report[i].moisture);
            HM_NUM[row] += 1;
            HM_DATA[row] = HM[row] / HM_NUM[row];
          }

          // console.log(date_lable)
          graph = {
            labels: date_lable2,
            datasets: [
              {
                data: PH_DATA
              }
            ]
          }

          graph1 = {
            labels: date_lable2,
            datasets: [
              {
                data: HM_DATA
              }
            ]
          }

          this.setState({ day: date_lable2 });

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
    if ((this.state.device_select != '') && (this.state.date != '') && (this.state.qty_day != '')) {
      // var month = '';
      // if (this.state.Month == '1')
      //   month = 'ม.ค.';
      // else if (this.state.Month == '2')
      //   month = 'ก.พ.';
      // else if (this.state.Month == '3')
      //   month = 'มี.ค.';
      // else if (this.state.Month == '4')
      //   month = 'เม.ย.';
      // else if (this.state.Month == '5')
      //   month = 'พ.ค.';
      // else if (this.state.Month == '6')
      //   month = 'มิ.ย.';
      // else if (this.state.Month == '7')
      //   month = 'ก.ค.';
      // else if (this.state.Month == '8')
      //   month = 'ส.ค.';
      // else if (this.state.Month == '9')
      //   month = 'ก.ย.';
      // else if (this.state.Month == '10')
      //   month = 'ต.ค.';
      // else if (this.state.Month == '11')
      //   month = 'พ.ย.';
      // else if (this.state.Month == '12')
      //   month = 'ธ.ค.';
      // var year = parseInt(this.state.Year) + 543;
      // console.log("dayyyy:" + this.state.day.length);
      if (this.state.day.length > 0) {
        return this.state.day.map(function (object, i) {
          // console.log("i: " + i);
          // return <ShowreportScreen ph={PH_DATA[i]} hm={HM_DATA[i]} day={i + 1} month={month} year={year} />
          return <ShowreportScreen ph={PH_DATA[i]} hm={HM_DATA[i]} date={date_lable[i]} />
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

        <View style={{ height: hp('50%'), alignItems: 'center' }}>
          {/* <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
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
          </View> */}

          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
            <Text style={styles.txtname}>
              เลือกจำนวนวัน :
            </Text>
            <View style={styles.select}>
              <RNPickerSelect
                onValueChange={(qty_day) => this.setState({ qty_day })}
                title="จำนวนวัน"
                placeholder={{
                  label: 'จำนวนวัน',
                  value: '',
                }}
                items={[
                  { label: '7 วัน', value: '7' },
                  { label: '14 วัน', value: '14' },
                ]}
                value={this.state.qty_day}
              />
            </View>
          </View>

          <DatePicker
            style={{ width: wp('50%'), }}
            date={this.state.date}
            mode="date"
            placeholder="เลือกวันที่"
            format="YYYY-MM-DD"
            minDate="2020-01-01"
            maxDate={moment().format("YYYY-MM-DD")}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
                
              },
              dateInput: {
                marginLeft: 36,
                borderRadius: 10,borderColor: '#878787',borderWidth: 1,
              }
            }}
            onDateChange={(date) => { this.setState({ date: date }) }}
          />
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
          </View>
          <View>
            {this.showdata()}
            <Text style={styles.header2}>ค่า pH</Text>
            <LineChart
              data={graph}
              width={wp('90%')} // from react-native
              height={hp('35%')}
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
            <Text style={styles.header2}>ค่าความชื้น</Text>
            <LineChart
              data={graph1}
              width={wp('90%')} // from react-native
              height={hp('35%')}
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

        <View style={{ faex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: hp('56%') }}>
          <View style={{ width: wp('90%'), flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Text style={styles.header2}>
              ประวัติ
            </Text>
          </View>
          <View style={{ flexDirection: 'column', width: wp('80%'), borderRadius: 6, margin: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
            {this.reportList()}
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
  header2: {
    fontSize: hp('2.5%'),
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
    fontSize: hp('2.4%'),
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
    paddingLeft: wp('1%'),

    width: wp('35%'),
    height: hp('6%'),
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