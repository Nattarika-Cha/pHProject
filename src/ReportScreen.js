import React, { Component } from "react";
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert, fontFamily } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
//import ChartScreenfrom from './ChartScreen';
import {LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";

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
class ReportScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Report: []
    };
  }

  reportList() {
    return this.state.Report.map(function (object, i) {
      return <ShowreportScreen obj={object} key={i} />
    });
  }
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column',  }}>
        <View style={{ faex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: 7 }}>
          <Text style={styles.header}>รายงาน</Text>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
            <Text style={styles.txtname}>
              เลือกอุปกรณ์ :
            </Text>
            <View style={styles.select}>
              <RNPickerSelect
                  onValueChange={(device) => this.setState({ device })}
                  title="อุปกรณ์"
                  placeholder={{
                    label: 'อุปกรณ์',
                    value: '',
                  }}
                  items={[
                    { label: 'อุปกรณ์1', value: 'อุปกรณ์1' },
                    { label: 'อุปกรณ์2', value: 'อุปกรณ์2' },
                  ]}
                  value={this.state.device}
                />
            </View>
          </View>
        </View>

        <View style={{ height: 250, backgroundColor: '#FFFFFF' }}>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <View style={styles.selectmonth}>
              <RNPickerSelect
                  onValueChange={(Month) => this.setState({ Month })}
                  title="เดือน"
                  placeholder={{
                    label: 'เดือน',
                    value: '',
                  }}
                  items={[
                    { label: 'มกราคม', value: 'January' },
                    { label: 'กุมภาพันธ์', value: 'Febryary' },
                    { label: 'มีนาคม', value: 'March' },
                    { label: 'เมษายน', value: 'April' },
                    { label: 'พฤษภาคม', value: 'May' },
                    { label: 'มิถุนายน', value: 'June' },
                    { label: 'กรกฎาคม', value: 'July' },
                    { label: 'สิงหาคม', value: 'August' },
                    { label: 'กันยายน', value: 'September' },
                    { label: 'ตุาคม', value: 'October' },
                    { label: 'พฤศจิกายน', value: 'November' },
                    { label: 'ธันวาคม', value: 'December' },
                  ]}
                  value={this.state.Month}
                />
              </View>
              
              <View style={styles.selectweek}>
                
                <RNPickerSelect
                  onValueChange={(Week) => this.setState({ Week })}
                  title="สัปดาห์"
                  placeholder={{
                    label: 'สัปดาห์',
                    value: '',
                  }}
                  items={[
                    { label: '1', value: '1' },
                    { label: '2', value: '2' },
                    { label: '3', value: '3' },
                    { label: '4', value: '4' },
                  ]}
                  value={this.state.Week}
                />
              </View> 
          </View> 
        <View>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  5,
                  2,
                  3,
                  4,
                  5,
                  6
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix="k"
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

        <View style={{ faex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: 20 }}>
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

export default ReportScreen;