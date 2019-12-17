import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, TouchableOpacity, ImageBackground, Image, FontSize, ScrollView, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';


class EditdeviceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      area: '',
      soil_type: '',
      pH: '',
      humidity: ''
    };
  }

  onEdit() {
    axios.post('http://165.22.250.24:3030/config/add', {
      name: this.state.name,
      age: this.state.age,
      area: this.state.area,
      soil_type: this.state.soil_type,
      pH: this.state.pH,
      humidity: this.state.humidity
    })
      .then((response) => {
        if (response.data == "Save success") {
          Alert.alert(
            'Success',
            'Edit success',
            [
              { text: 'OK', onPress: () => this.props.navigation.navigate('Home') },
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
              <Text style={{ fontSize: 18 }}>s000000000000</Text>
            </View>
          </View>
        </View>
        <View style={{ faex: 1, flexDirection: 'column', justifyContent: 'flex-start', marginTop: 10, marginLeft: 30, padding: 10, }}>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
            <Text style={styles.txtname}>
              Name Plant :
            </Text>
            <View style={styles.select}>
              <RNPickerSelect
                onValueChange={(name) => this.setState({name})}
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
              Age :
            </Text>
            <View style={{ width: 100, borderRadius: 10, borderWidth: 1, height: 44, borderColor: '#000000', paddingLeft: 10, }}>
              <RNPickerSelect
                onValueChange={(age) => this.setState({age})}
                items={[
                  { label: '1', value: '1' },
                  { label: '2', value: '2' },
                  { label: '3', value: '3' },
                  { label: '4', value: '4' },
                  { label: '5', value: '5' },
                  { label: '6', value: '6' },
                  { label: '7', value: '7' },
                  { label: '8', value: '8' },
                  { label: '9', value: '9' },
                ]}
                value={this.state.age}
              />
            </View>
            <Text style={styles.txtname}>
              week
            </Text>
          </View>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10, }}>
            <Text style={styles.txtname}>
              Area :
            </Text>
            <View style={{ width: 100, borderRadius: 10, borderWidth: 1, height: 44, borderColor: '#000000', paddingLeft: 10, }}>
              <RNPickerSelect
                onValueChange={(area) => this.setState({area})}
                items={[
                  { label: '1', value: '1' },
                  { label: '2', value: '2' },
                  { label: '3', value: '3' },
                  { label: '4', value: '4' },
                  { label: '5', value: '5' },
                  { label: '6', value: '6' },
                  { label: '7', value: '7' },
                  { label: '8', value: '8' },
                  { label: '9', value: '9' },
                ]}
                value={this.state.area}
              />
            </View>
            <Text style={styles.txtname}>
              rai
            </Text>
          </View>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
            <Text style={styles.txtname}>
              Soil type :
            </Text>
            <View style={styles.select}>
              <RNPickerSelect
                onValueChange={(soil_type) => this.setState({soil_type})}
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
              pH :
            </Text>
            <View style={{ width: 100, borderRadius: 10, borderWidth: 1, height: 44, borderColor: '#000000', paddingLeft: 10, }}>
              <RNPickerSelect
                onValueChange={(pH) => this.setState({pH})}
                items={[
                  { label: '1', value: '1' },
                  { label: '2', value: '2' },
                  { label: '3', value: '3' },
                  { label: '4', value: '4' },
                  { label: '5', value: '5' },
                  { label: '6', value: '6' },
                  { label: '7', value: '7' },
                  { label: '8', value: '8' },
                  { label: '9', value: '9' },
                ]}
                value={this.state.pH}
              />
            </View>
          </View>
          <View style={{ faex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
            <Text style={styles.txtname}>
              Humidity :
            </Text>
            <View style={{ width: 100, borderRadius: 10, borderWidth: 1, height: 44, borderColor: '#000000', paddingLeft: 10, }}>
              <RNPickerSelect
                onValueChange={(humidity) => this.setState({humidity})}
                items={[
                  { label: '1', value: '1' },
                  { label: '2', value: '2' },
                  { label: '3', value: '3' },
                  { label: '4', value: '4' },
                  { label: '5', value: '5' },
                  { label: '6', value: '6' },
                  { label: '7', value: '7' },
                  { label: '8', value: '8' },
                  { label: '9', value: '9' },
                ]}
                value={this.state.humidity}
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
