import React from "react";
import { View, StyleSheet, TextInput, ScrollView} from "react-native";
import {  Button, Text, Toast } from 'native-base';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import Loading from 'react-native-whc-loading'
import AsyncStorage from '@react-native-community/async-storage'
import services from './../services';
import DateTimePicker from '@react-native-community/datetimepicker';
// import DatePicker from "react-native-datepicker"



export default class Register extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      firstName: '',
			lastName: '',
			email: '',
			password: '',
      phone: '', 
      dob: new Date(),

      date: new Date()
    }
  }
  
  
  _signUp = () => {
		if(this.state.firstName === ''){
			Toast.show({
                text: "First Name required",
                position: "bottom"
            })
		}else if(this.state.lastName === ''){
			Toast.show({
                text: "Last Name required",
                position: "bottom"
            })
		}else if(this.state.phone === ''){
			Toast.show({
                text: "Phone # required",
                position: "bottom"
            })
		}else if(this.state.email === ''){
			Toast.show({
                text: "Email required",
                position: "bottom"
            })
		}else if(this.state.password === ''){
			Toast.show({
                text: "Password required",
                position: "bottom"
            })
		}else {
      alert(this.state);
			// this.refs.loading.show()
			// services.axios.post(services.endpoints.SIGNUP,{
			// 	firstName: this.state.firstName,
			//   	lastName: this.state.lastName,
			//   	password: this.state.password,
      //     email: this.state.email,
      //     phone: this.state.phone
			// }).then((res) => {
			// 	if(res.data){
      //     console.log(res.data);
			// 		this.refs.loading.close()
			// 		AsyncStorage.setItem('User', JSON.stringify(res.data.data))
			// 		AsyncStorage.setItem('isAuth', 'true')
			// 		this.props.navigation.navigate('Main')
			// 	}
			// }).catch((err) => {
			// 	if(err.response){
			// 		alert(err.response.data.error.message)
			// 		console.log(err)
			// 		this.refs.loading.close()
			// 	}
			// })
		}
		
  }
  

  render() {
    const { dob } = this.state
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          ...StyleSheet.absoluteFillObject,
        }}>
        <Loading
          ref="loading"
          backgroundColor="transparent"
          indicatorColor="white"
        />

        <View>
          <TextInput
            placeholder="FIRSTNAME"
            style={styles.input}
            onChangeText={(firstName) => this.setState({firstName})}
            value={this.state.firstName}
          />
          <TextInput
            placeholder="LASTNAME"
            style={styles.input}
            onChangeText={(lastName) => this.setState({lastName})}
            value={this.state.lastName}
          />
          <TextInput
            placeholder="PHONE NUMBER"
            style={styles.input}
            keyboardType={'phone-pad'}
            returnKeyType="done"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={false}
            onChangeText={(phone) => this.setState({phone})}
            value={this.state.phone}
          />
          
          <TextInput
            placeholder="EMAIL"
            style={styles.input}
            keyboardType={'email-address'}
            returnKeyType="done"
            autoCapitalize="none"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <View>

          <DateTimePicker
          value={dob} mode="date"
          display="default" onDateChange={ dob => this.setState({ dob })} 
           placeholder="select date" format="YYYY-MM-DD"
          style={{...styles.input,  borderWidth: 0 }}/>
          </View>
          <TextInput
            placeholder="PASSWORD"
            style={styles.input}
            secureTextEntry
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />

        </View>
        <View>
          <View>
            <Button
              bordered
              warning
              style={{borderRadius: 50, width: 150, marginLeft: 25}}
              // onPress={() => this.props.navigation.navigate('Verify')}
              onPress={this._signUp}>
              <Text style={{marginLeft: 30}}>Submit</Text>
            </Button>
          </View>
          {/* <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#BCBCBC', marginRight: 5}}>or</Text>
            <View>
              <Text
                style={{color: '#05389D'}}
                onPress={() => this.props.navigation.navigate('Professional Signup')}>
                REGISTER AS A PROFESSIONAL
              </Text>
            </View>
          </View> */}
        </View>
        {/* {this.state.show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={this.state.date}
          mode={this.state.mode}
          is24Hour={true}
          display="default"
          onChange={this.onChange}
        />
      )} */}
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
    input: {
        height: 50, 
        borderColor: '#BCBCBC', 
        borderWidth: 1, 
        backgroundColor: "#F9F9F9", 
        width: 330, 
        paddingHorizontal: 20, 
        borderRadius: 50,
        marginBottom: 20
    }
})