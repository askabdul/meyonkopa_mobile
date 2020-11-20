import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

export default class StartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      User: '',
    };
  }

  componentDidMount = async () => {
    this.setState({
      User: JSON.parse(await AsyncStorage.getItem('User')),
    });
    alert(JSON.stringify(this.state.User))
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{fontSize: 32}}>WELCOME !</Text>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            {this.state.User.firstname} {this.state.User.lastname}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            How may we help you ?
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Button
            vertical
            style={{backgroundColor: 'white', padding: 56, margin: 10}}
            onPress={() => this.props.navigation.navigate('Topics')}>
            <Icon
              name="home"
              type="FontAwesome"
              style={{color: '#F98E06', fontSize: 50, padding: 10}}
            />
            <Text style={styles.iconText}>Choose a Topic</Text>
          </Button>
          <Button
            vertical
            style={{backgroundColor: 'white', padding: 40, margin: 10}}
            onPress={() => this.props.navigation.navigate('Professional')}>
            <Icon
              name="plus-square"
              type="FontAwesome"
              style={{color: '#F98E06', fontSize: 50, padding: 10}}
            />
            <Text style={styles.iconText}>Talk to a professional</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: '#B8AFAF',
  },

  iconText: {
    color: '#AC9D9D',
  },
});
