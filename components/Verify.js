import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Icon, Button, Toast} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

class Verify extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
      pin5: '',

      User: ''
    };
  }

  componentDidMount = async () => {
    this.setState({
      User: JSON.parse(await AsyncStorage.getItem('User')),
    });
    // alert(JSON.stringify(this.state.User.pin.charAt(0)))
  };

  render() {
    const {pin1, pin2, pin3, pin4, pin5} = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Icon name="lock" type="FontAwesome" style={{fontSize: 70}} />
          <Text style={{textAlign: 'center', paddingHorizontal: 15}}>
            ENTER THE PASSCODE IN THE MESSAGE TO CONFIRM YOUR ACCOUNT
          </Text>
        </View>
        <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <TextInput
            maxLength={1}
            style={styles.input}
            ref={'pin1ref'}
            onChangeText={(pin1) => {
              this.setState({pin1});
              if (pin1 != this.state.User.pin.charAt(0)) {
                Toast.show({
                  text: 'input figure wrong',
                  position: 'bottom',
                  type: 'danger',
                  textStyle: {
                    textAlign: 'center',
                  },
                });
              } else {
                this.refs.pin2ref.focus();
              }
            }}
            value={pin1}
          />
          <TextInput
            maxLength={1}
            style={styles.input}
            ref={'pin2ref'}
            onChangeText={(pin2) => {
              this.setState({pin2});
              if (pin2 != this.state.User.pin.charAt(1)) {
                Toast.show({
                  text: 'input figure wrong',
                  position: 'bottom',
                  type: 'danger',
                  textStyle: {
                    textAlign: 'center',
                  },
                });
              } else {
                this.refs.pin3ref.focus();
              }
            }}
            value={pin2}
          />
          <TextInput
            maxLength={1}
            style={styles.input}
            ref={'pin3ref'}
            onChangeText={(pin3) => {
              this.setState({pin3});
              if (pin3 != this.state.User.pin.charAt(2)) {
                Toast.show({
                  text: 'input figure wrong',
                  position: 'bottom',
                  type: 'danger',
                  textStyle: {
                    textAlign: 'center',
                  },
                });
              } else {
                this.refs.pin4ref.focus();
              }
            }}
            value={pin3}
          />
          <TextInput
            maxLength={1}
            style={styles.input}
            ref={'pin4ref'}
            onChangeText={(pin4) => {
              this.setState({pin4});
              if (pin4 != this.state.User.pin.charAt(3)) {
                Toast.show({
                  text: 'input figure wrong',
                  position: 'bottom',
                  type: 'danger',
                  textStyle: {
                    textAlign: 'center',
                  },
                });
              } else {
                this.refs.pin5ref.focus();
              }
            }}
            value={pin4}
          />
          <TextInput
            maxLength={1}
            style={styles.input}
            ref={'pin5ref'}
            onChangeText={(pin5) => {
              this.setState({pin5});
              if (pin5 != this.state.User.pin.charAt(4)) {
                Toast.show({
                  text: 'input figure wrong',
                  position: 'bottom',
                  type: 'danger',
                  textStyle: {
                    textAlign: 'center',
                  },
                });
              } else {
                this.state.User.cat === 'gold'
                  ? this.props.navigation.navigate('Main')
                  : this.props.navigation.navigate('OtherAgeGroup');
              }
            }}
            value={pin5}
          />
        </View>
        {/* <View>
          <Button
            bordered
            warning
            style={{
              borderRadius: 50,
              width: 150,
              marginBottom: 10,
              alignItems: 'center',
            }}
            onPress={() => this.props.navigation.navigate('OtherAgeGroup')}>
            <Text style={{marginLeft: 50, color: '#F98E06'}}>
              Proceed
              <Icon name='arrow-right' type="FontAwesome" />
            </Text>
          </Button>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    fontWeight: '600',
    // padding: 10,
    marginHorizontal: 10,
    height: 55,
    alignSelf: 'center',
    width: '10%',
    // borderRadius: 10,
    // borderWidth: 0.5,
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Verify;
