import React from 'react';
import {View, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
import {Button, Text, Toast} from 'native-base';
import Loading from 'react-native-whc-loading';
import AsyncStorage from '@react-native-community/async-storage';
import services from './../services';
import moment from 'moment';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      password: '',
      email: '',
      dob: '',
      phone: '',

      visibility: false,
    };
  }

  handleConfirm = (date) => {
    this.setState({dob: moment(date).format('YYYY-MM-DD')});
    this.setState({visibility: false});
  };

  onPressCancel = () => {
    this.setState({visibility: false});
  };

  onPressButton = () => {
    this.setState({visibility: true});
  };

  _signUp = () => {
    if (this.state.firstname === '') {
      Toast.show({
        text: 'First Name required',
        position: 'bottom',
      });
    } else if (this.state.lastname === '') {
      Toast.show({
        text: 'Last Name required',
        position: 'bottom',
      });
    } else if (this.state.phone === '') {
      Toast.show({
        text: 'Phone # required',
        position: 'bottom',
      });
    } else if (this.state.email === '') {
      Toast.show({
        text: 'Email required',
        position: 'bottom',
      });
    } else if (this.state.dob === '') {
      Toast.show({
        text: 'Date of Birth required',
        position: 'bottom',
      });
    } else if (this.state.password === '') {
      Toast.show({
        text: 'Password required',
        position: 'bottom',
      });
    } else {
      this.refs.loading.show();
      services.axios
        .post(services.endpoints.SIGNUP, {
          firstName: this.state.firstname,
          lastName: this.state.lastname,
          password: this.state.password,
          email: this.state.email,
          dob: this.state.dob,
          phone: this.state.phone,
        })
        .then((res) => {
          if (res.data) {
            console.log(res.data);
            this.refs.loading.close();
            AsyncStorage.setItem('User', JSON.stringify(res.data.data));
            AsyncStorage.setItem('isAuth', 'true');

            res.data.data.cat === 'gold'
              ? this.props.navigation.navigate('Main')
              : this.props.navigation.navigate('OtherAgeGroup');

            this.setState({
              firstname: '',
              lastname: '',
              password: '',
              email: '',
              dob: '',
              phone: '',
            });
          }
        })
        .catch((err) => {
          if (err.response) {
            // alert(err.response.data.error.message);
            Toast.show({
              text: err.response.data.error.message,
              position: 'bottom',
              type: 'danger',
              textStyle: {
                textAlign: 'center',
              },
            });
            console.log(err);
            this.refs.loading.close();
          }
        });
    }
  };

  render() {
    const {firstname, lastname, password, email, dob, phone} = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
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
            onChangeText={(firstname) => this.setState({firstname})}
            value={firstname}
          />
          <TextInput
            placeholder="LASTNAME"
            style={styles.input}
            onChangeText={(lastname) => this.setState({lastname})}
            value={lastname}
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
            value={phone}
          />

          <TextInput
            placeholder="EMAIL"
            style={styles.input}
            keyboardType={'email-address'}
            returnKeyType="done"
            autoCapitalize="none"
            onChangeText={(email) => this.setState({email})}
            value={email}
          />
          <View>
            <Button onPress={this.onPressButton} style={styles.input}>
              <Text
                style={{color: '#BCBCBC', marginVertical: 10, fontSize: 14}}>
                DATE OF BIRTH: {dob}
              </Text>
            </Button>

            <DateTimePickerModal
              isVisible={this.state.visibility}
              onConfirm={this.handleConfirm}
              onCancel={this.onPressCancel}
              mode="date"
            />
          </View>
          <TextInput
            placeholder="PASSWORD"
            style={styles.input}
            secureTextEntry
            onChangeText={(password) => this.setState({password})}
            value={password}
          />
        </View>
        <View>
          <View>
            <Button
              bordered
              warning
              style={{borderRadius: 50, width: 150, marginHorizontal: 60}}
              // onPress={() => this.props.navigation.navigate('Verify')}
              onPress={this._signUp}>
              <Text style={{marginLeft: 30}}>Submit</Text>
            </Button>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Text style={{color: '#BCBCBC', marginRight: 5}}>or</Text>
            <View>
              <Text
                style={{color: '#05389D'}}
                onPress={() => this.props.navigation.navigate('Login')}>
                LOGIN IF YOU HAVE AN ACCOUNT
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#BCBCBC',
    borderWidth: 1,
    backgroundColor: '#F9F9F9',
    width: 330,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 20,
  },
});
