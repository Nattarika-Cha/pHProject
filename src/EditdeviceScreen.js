import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

var itempH = [
  { label: '1.0', value: '1.0' },
  { label: '1.1', value: '1.1' },
  { label: '1.2', value: '1.2' },
  { label: '1.3', value: '1.3' },
  { label: '1.4', value: '1.4' },
  { label: '1.5', value: '1.5' },
  { label: '1.6', value: '1.6' },
  { label: '1.7', value: '1.7' },
  { label: '1.8', value: '1.8' },
  { label: '1.9', value: '1.9' },
  { label: '2.0', value: '2.0' },
  { label: '2.1', value: '2.1' },
  { label: '2.2', value: '2.2' },
  { label: '2.3', value: '2.3' },
  { label: '2.4', value: '2.4' },
  { label: '2.5', value: '2.5' },
  { label: '2.6', value: '2.6' },
  { label: '2.7', value: '2.7' },
  { label: '2.8', value: '2.8' },
  { label: '2.9', value: '2.9' },
  { label: '3.1', value: '3.1' },
  { label: '3.2', value: '3.2' },
  { label: '3.3', value: '3.3' },
  { label: '3.4', value: '3.4' },
  { label: '3.5', value: '3.5' },
  { label: '3.6', value: '3.6' },
  { label: '3.7', value: '3.7' },
  { label: '3.8', value: '3.8' },
  { label: '3.9', value: '3.9' },
  { label: '4.0', value: '4.0' },
  { label: '4.1', value: '4.1' },
  { label: '4.2', value: '4.2' },
  { label: '4.3', value: '4.3' },
  { label: '4.4', value: '4.4' },
  { label: '4.5', value: '4.5' },
  { label: '4.6', value: '4.6' },
  { label: '4.7', value: '4.7' },
  { label: '4.8', value: '4.8' },
  { label: '4.9', value: '4.9' },
  { label: '5.0', value: '5.0' },
  { label: '5.1', value: '5.1' },
  { label: '5.2', value: '5.2' },
  { label: '5.3', value: '5.3' },
  { label: '5.4', value: '5.4' },
  { label: '5.5', value: '5.5' },
  { label: '5.6', value: '5.6' },
  { label: '5.7', value: '5.7' },
  { label: '5.8', value: '5.8' },
  { label: '5.9', value: '5.9' },
  { label: '6.0', value: '6.0' },
  { label: '6.1', value: '6.1' },
  { label: '6.2', value: '6.2' },
  { label: '6.3', value: '6.3' },
  { label: '6.4', value: '6.4' },
  { label: '6.5', value: '6.5' },
  { label: '6.6', value: '6.6' },
  { label: '6.7', value: '6.7' },
  { label: '6.8', value: '6.8' },
  { label: '6.9', value: '6.9' },
  { label: '7.0', value: '7.0' },
  { label: '7.1', value: '7.1' },
  { label: '7.2', value: '7.2' },
  { label: '7.3', value: '7.3' },
  { label: '7.4', value: '7.4' },
  { label: '7.5', value: '7.5' },
  { label: '7.6', value: '7.6' },
  { label: '7.7', value: '7.7' },
  { label: '7.8', value: '7.8' },
  { label: '7.9', value: '7.9' },
  { label: '8.0', value: '8.0' },
  { label: '8.1', value: '8.1' },
  { label: '8.2', value: '8.2' },
  { label: '8.3', value: '8.3' },
  { label: '8.4', value: '8.4' },
  { label: '8.5', value: '8.5' },
  { label: '8.6', value: '8.6' },
  { label: '8.7', value: '8.7' },
  { label: '8.8', value: '8.8' },
  { label: '8.9', value: '8.9' },
  { label: '9.0', value: '9.0' },
];

var itemHM = [
  { label: '00', value: '00' },
  { label: '01', value: '01' },
  { label: '02', value: '02' },
  { label: '03', value: '03' },
  { label: '04', value: '04' },
  { label: '05', value: '05' },
  { label: '06', value: '06' },
  { label: '07', value: '07' },
  { label: '08', value: '08' },
  { label: '09', value: '09' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
  { label: '13', value: '13' },
  { label: '14', value: '14' },
  { label: '15', value: '15' },
  { label: '16', value: '16' },
  { label: '17', value: '17' },
  { label: '18', value: '18' },
  { label: '19', value: '19' },
  { label: '20', value: '20' },
  { label: '21', value: '21' },
  { label: '22', value: '22' },
  { label: '23', value: '23' },
  { label: '24', value: '24' },
  { label: '25', value: '25' },
  { label: '26', value: '26' },
  { label: '27', value: '27' },
  { label: '28', value: '28' },
  { label: '29', value: '29' },
  { label: '31', value: '31' },
  { label: '32', value: '32' },
  { label: '33', value: '33' },
  { label: '34', value: '34' },
  { label: '35', value: '35' },
  { label: '36', value: '36' },
  { label: '37', value: '37' },
  { label: '38', value: '38' },
  { label: '39', value: '39' },
  { label: '40', value: '40' },
  { label: '41', value: '41' },
  { label: '42', value: '42' },
  { label: '43', value: '43' },
  { label: '44', value: '44' },
  { label: '45', value: '45' },
  { label: '46', value: '46' },
  { label: '47', value: '47' },
  { label: '48', value: '48' },
  { label: '49', value: '49' },
  { label: '50', value: '50' },
  { label: '51', value: '51' },
  { label: '52', value: '52' },
  { label: '53', value: '53' },
  { label: '54', value: '54' },
  { label: '55', value: '55' },
  { label: '56', value: '56' },
  { label: '57', value: '57' },
  { label: '58', value: '58' },
  { label: '59', value: '59' },
  { label: '60', value: '60' },
  { label: '61', value: '61' },
  { label: '62', value: '62' },
  { label: '63', value: '63' },
  { label: '64', value: '64' },
  { label: '65', value: '65' },
  { label: '66', value: '66' },
  { label: '67', value: '67' },
  { label: '68', value: '68' },
  { label: '69', value: '69' },
  { label: '70', value: '70' },
  { label: '71', value: '71' },
  { label: '72', value: '72' },
  { label: '73', value: '73' },
  { label: '74', value: '74' },
  { label: '75', value: '75' },
  { label: '76', value: '76' },
  { label: '77', value: '77' },
  { label: '78', value: '78' },
  { label: '79', value: '79' },
  { label: '80', value: '80' },
  { label: '81', value: '81' },
  { label: '82', value: '82' },
  { label: '83', value: '83' },
  { label: '84', value: '84' },
  { label: '85', value: '85' },
  { label: '86', value: '86' },
  { label: '87', value: '87' },
  { label: '88', value: '88' },
  { label: '89', value: '89' },
  { label: '90', value: '90' },
  { label: '91', value: '91' },
  { label: '92', value: '92' },
  { label: '93', value: '93' },
  { label: '94', value: '94' },
  { label: '95', value: '95' },
  { label: '96', value: '96' },
  { label: '97', value: '97' },
  { label: '98', value: '98' },
  { label: '99', value: '99' },
  { label: '100', value: '100' },
];



class EditdeviceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      age_type: '',
      area: '',
      area_type: '',
      soil_type: '',
      pH_low: '',
      pH_hight: '',
      humidity_low: '',
      humidity_hight: ''
    };
  }

  onEdit() {
    axios.post('http://165.22.250.24:3030/config/add', {
      name: this.state.name,
      age: this.state.age,
      age_type: this.state.age_type,
      area: this.state.area,
      area_type: this.state.area_type,
      soil_type: this.state.soil_type,
      pH_low: this.state.pH_low,
      pH_hight: this.state.pH_hight,
      humidity_low: this.state.humidity_low,
      humidity_hight: this.state.humidity_hight,
      serialDevice: this.props.navigation.state.params.serialDevice
    })
      .then((response) => {
        if (response.data == "Save success") {
          Alert.alert(
            'Success',
            'Edit success',
            [
              { text: 'OK', onPress: () => this.props.navigation.navigate('Devicedata') },
            ],
            { cancelable: false }
          )
        } else {
          Alert.alert(
            'Error',
            response.data,
            [
              { text: 'OK' },
            ],
            { cancelable: false }
          )
        }
        //console.log(response.data);
      }, (error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#FAFAFA' }}>
        <View style={{ flex: 1, backgroundColor: '#FAFAFA', alignItems: 'stretch', flexDirection: 'column' }}>
          <View style={{ faex: 1, flexDirection: 'column', justifyContent: 'flex-start', }}>
            <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '', }}>
              <Image style={{ padding: 10, width: 30, height: 30, resizeMode: 'contain', margin: 10 }}
                source={require('../img/back.png')}></Image>
            </View>
            <View style={{ faex: 1, flexDirection: 'column', justifyContent: 'flex-start', }}>
              <View style={{ faex: 1, justifyContent: 'center', backgroundColor: '', alignItems: 'center', }}>
                <Text style={styles.header}>Edit Device</Text>
              </View>

              <View style={{ faex: 1, justifyContent: 'center', alignItems: 'center', }} >
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Image style={{ padding: 5, width: 80, height: 80, resizeMode: 'contain', margin: 5, borderWidth: 1, borderColor: '#5BB95A', }}
                    source={require('../img/device.png')}></Image>
                </TouchableOpacity>
              </View>
              <View style={{ faex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', margin: 5, fontSize: 15, }} >
                <Text style={{ fontSize: 18 }}>Serial Number :</Text>
                <Text style={{ fontSize: 18 }}> {this.props.navigation.state.params.serialDevice}</Text>
              </View>
            </View>
          </View>
          <View style={{ faex: 1, flexDirection: 'column', justifyContent: 'flex-start', marginTop: 10, marginLeft: 30, padding: 10, }}>
            <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
              <Text style={styles.txtname}>
                ชนิดพืช :
            </Text>
              <View style={styles.select}>
                <RNPickerSelect
                  onValueChange={(name) => this.setState({ name })}
                  placeholder={{
                    label: 'พืช',
                    value: '',
                  }}
                  items={[
                    { label: 'ลำไย', value: 'ลำไย' },
                    { label: 'ส้มโอ', value: 'ส้มโอ' },
                    { label: 'ฝรั่ง', value: 'ฝรั่ง' },
                  ]}

                  value={this.state.name}
                />
              </View>
            </View>
            <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
              <Text style={styles.txtname}>
                อายุ :
            </Text>
              <TextInput
                style={{ backgroundColor: "#FFFFFF", height: 50, padding: 10, fontSize: 15 }}
                placeholder="อายุ"
                onChangeText={(age) => this.setState({ age })}
                value={this.state.age}
              />
              <View style={{ width: 100, borderRadius: 10, borderWidth: 1, height: 44, borderColor: '#000000', paddingLeft: 10, }}>
                <RNPickerSelect
                  onValueChange={(age_type) => this.setState({ age_type })}
                  placeholder={{
                    label: 'อายุ',
                    value: '',
                  }}
                  items={[
                    { label: 'วัน', value: 'D' },
                    { label: 'เดือน', value: 'M' },
                    { label: 'ปี', value: 'Y' },
                  ]}
                  value={this.state.age_type}
                />
              </View>
            </View>
            <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10, }}>
              <Text style={styles.txtname}>
                พื้นที่ :
            </Text>
              <TextInput
                style={{ backgroundColor: "#FFFFFF", height: 50, padding: 10, fontSize: 15 }}
                placeholder="พื้นที่"
                onChangeText={(area) => this.setState({ area })}
                value={this.state.area}
              />
              <View style={{ width: 100, borderRadius: 10, borderWidth: 1, height: 44, borderColor: '#000000', paddingLeft: 10, }}>
                <RNPickerSelect
                  onValueChange={(area_type) => this.setState({ area_type })}
                  placeholder={{
                    label: 'ขนาดพื้นที่',
                    value: '',
                  }}
                  items={[
                    { label: 'ตารางวา', value: 'V' },
                    { label: 'ตารางเมตร', value: 'M' },
                    { label: 'ไร่', value: 'R' },
                  ]}
                  value={this.state.area_type}
                />
              </View>
            </View>
            <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
              <Text style={styles.txtname}>
                ชนิดดิน :
            </Text>
              <View style={styles.select}>
                <RNPickerSelect
                  onValueChange={(soil_type) => this.setState({ soil_type })}
                  placeholder={{
                    label: 'ชนิดดิน',
                    value: '',
                  }}
                  items={[
                    { label: 'ดินร่วน', value: 'ดินร่วน' },
                    { label: 'ดินทราย', value: 'ดินทราย' },
                    { label: 'ดินเหนียว', value: 'ดินเหนียว' },
                  ]}
                  value={this.state.soil_type}
                />
              </View>
            </View>
            <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
              <Text style={styles.txtname}>
                ค่า pH :
            </Text>
              <View style={{ width: 100, borderRadius: 10, borderWidth: 1, height: 44, borderColor: '#000000', paddingLeft: 10, }}>
                <RNPickerSelect
                  onValueChange={(pH_low) => this.setState({ pH_low })}
                  placeholder={{
                    label: 'ค่า pH ต่ำสุด',
                    value: '',
                  }}
                  items={itempH}
                  value={this.state.pH_low}
                />
              </View>
              <Text style={styles.txtname}> ถึง </Text>
              <View style={{ width: 100, borderRadius: 10, borderWidth: 1, height: 44, borderColor: '#000000', paddingLeft: 10, }}>
                <RNPickerSelect
                  onValueChange={(pH_hight) => this.setState({ pH_hight })}
                  placeholder={{
                    label: 'ค่า pH สูงสุด',
                    value: '',
                  }}
                  items={itempH}
                  value={this.state.pH_hight}
                />
              </View>
            </View>
            <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
              <Text style={styles.txtname}>
                ความชื้น :
            </Text>
              <View style={{ width: 100, borderRadius: 10, borderWidth: 1, height: 44, borderColor: '#000000', paddingLeft: 10, }}>
                <RNPickerSelect
                  onValueChange={(humidity_low) => this.setState({ humidity_low })}
                  placeholder={{
                    label: 'ค่าความชื้นต่ำสุด',
                    value: '',
                  }}
                  items={itemHM}
                  value={this.state.humidity_low}
                />
              </View>
              <Text style={styles.txtname}> ถึง </Text>
              <View style={{ width: 100, borderRadius: 10, borderWidth: 1, height: 44, borderColor: '#000000', paddingLeft: 10, }}>
                <RNPickerSelect
                  onValueChange={(humidity_hight) => this.setState({ humidity_hight })}
                  placeholder={{
                    label: 'ค่าความชื้นสูงสุด',
                    value: '',
                  }}
                  items={itemHM}
                  value={this.state.humidity_hight}
                />
              </View>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
            <View style={styles.buttonContainer}>
              <Button title="OK" color="#5BB95A" onPress={this.onEdit.bind(this)} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    color: '#5BB95A',
    fontWeight: 'bold',
    paddingVertical: 14,
    alignItems: 'center',
    // padding: 10,
    // margin: 20,
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
    width: 180,
    height: 45,
    borderColor: '#000000',
    borderWidth: 1,
    fontSize: 15,

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
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: 40,
  },
  buttonContainer: {

    margin: 10,
    borderRadius: 30,


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
});

export default EditdeviceScreen;
