import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

import { Icon } from "native-base"
import services from "./../services"


export default class SettingScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings'
};

  state = {
    User: null
  }

  componentDidMount = async () => {
        
    this.setState({
        User: JSON.parse(await AsyncStorage.getItem('User'))
    })
    alert(JSON.stringify(this.state.User))
}


  logOut = async (tokenId) => {
    tokenId = this.state.User.token
    await services.axios.post(services.endpoints.LOG_OUT+`?access_token=${tokenId}`).then()
    await AsyncStorage.removeItem('User')
    await AsyncStorage.setItem('isAuth', 'false')
    await this.props.navigation.navigate('Login')
  }
  
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
        onPress={this.logOut}>
          
          <Icon
            name="lock"
            type="FontAwesome"
            style={{color: '#F98E06', fontSize: 50, padding: 10}}
          />
          <Text>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}