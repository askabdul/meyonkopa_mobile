import React, {useState} from "react";

import {  View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import { Icon, Textarea, Button, Toast } from "native-base";
import UserAvatar from 'react-native-user-avatar';
import Modal from 'react-native-modal';
import services from './../services';



export default class Urologist extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       modalVisible: false,
       message: "",
       profesionalId: ""
    }
  }

send = () => {
  if (this.state.message == '') {
    Toast.show({
      text: 'message cannot be empty',
      position: 'bottom',
    });
  } else {
    services.axios.post(services.endpoints.SEND, {
      message: this.state.message
    })
    .then((res) => {
      if(res.data) {
        console.log(res.data);
      }
    })
    this.setState({
      modalVisible: !this.state.modalVisible
    })
    Toast.show({
      text: 'message sent',
      position: 'top',
      type: "success"
    });
    
  }
  
}


  
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <Icon
            name="arrow-left"
            type="FontAwesome"
            style={{padding: 20}}
            onPress={() => this.props.navigation.goBack()}
          />
          <Text style={{fontSize: 22, padding: 20}}>Urologists</Text>
        </View>
        <ScrollView style={{position: "relative"}}>
          <View
            style={{
              paddingHorizontal: 30,
              marginVertical: 20,
              flexDirection: 'row',
              borderWidth: 0.9,
              padding: 20,
              borderRadius: 10,
            }}>
            <View style={{paddingHorizontal: 10}}>
              <UserAvatar
                size={100}
                name="Avishay Bar"
                src="https://dummyimage.com/100x100/000/fff"
              />
            </View>
            <View style={{paddingVertical: 10}}>
              <Text>Dr. Emmanuel Asante</Text>
              <Text>Speciality: Urologist</Text>
              <Text>Bio: Lorem Ipsum</Text>
              <Text>Working Days: Mon-Sun</Text>
              <TouchableOpacity
                // onPress={this.send}
                onPress={() => this.setState({
                  modalVisible: !this.state.modalVisible
                })}
                >
                <Text
                  style={{
                    color: '#F98E06',
                    textAlign: 'right',
                    paddingTop: 10,
                    fontWeight: 'bold',
                  }}>
                  Send Message
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 30,
              marginVertical: 20,
              flexDirection: 'row',
              borderWidth: 0.9,
              padding: 20,
              borderRadius: 10,
            }}>
            <View style={{paddingHorizontal: 10}}>
              <UserAvatar
                size={100}
                name="Avishay Bar"
                src="https://dummyimage.com/100x100/000/fff"
              />
            </View>
            <View style={{paddingVertical: 10}}>
              <Text>Dr. Michael Boadi</Text>
              <Text>Speciality: Urologist</Text>
              <Text>Bio: Lorem Ipsum</Text>
              <Text>Working Days: Mon-Sun</Text>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    modalVisible: !this.state.modalVisible
                  })
                }}>
                <Text
                  style={{
                    color: '#F98E06',
                    textAlign: 'right',
                    paddingTop: 10,
                    fontWeight: 'bold',
                  }}>
                  Send Message
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            >
            <View style={styles.centeredView}>
              <View>
              {/* <Textarea rowSpan={5} bordered placeholder="Textarea" /> */}
                <Textarea
                  onChangeText={(message) => this.setState({message})}
                  value={this.state.message}
                  bordered
                  rowSpan={5}
                  placeholder="Send a message..."
                  style={{width: 300,height: 200, backgroundColor: "#fff",}}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems:"center",
                    backgroundColor: "grey",
                    height: 50
                  }}>
                  <TouchableOpacity
                    style={{...styles.openButton, backgroundColor: '#F98E06'}}
                    onPress={() => {
                      this.setState({
                        modalVisible: !this.state.modalVisible
                      })
                    }}>
                    <Text style={styles.textStyle}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{...styles.openButton, backgroundColor: '#F98E06'}}
                    onPress={this.send}
                  >
                    <Text style={styles.textStyle}>Send</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      alignItems: "center",
      shadowColor: "#000",
      position: "relative", zIndex: 999,
      shadowOffset: {
        width: 0,
        height: 2
      },
      padding: 20,
      width: 300,
      height: 300
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      width: 100,
      padding: 10,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });