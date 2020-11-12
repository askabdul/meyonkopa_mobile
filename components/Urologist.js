import React, {useState} from "react";

import {  View, Text, ScrollView, Modal, StyleSheet, TouchableOpacity } from "react-native"
import { Icon, Textarea, Button } from "native-base";
import UserAvatar from 'react-native-user-avatar';

export default function Urologist({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <Icon
            name="arrow-left"
            type="FontAwesome"
            style={{padding: 20}}
            onPress={() => navigation.goBack()}
          />
          <Text style={{fontSize: 22, padding: 20}}>Urologists</Text>
        </View>
        <ScrollView>
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
                // style={styles.openButton}
                onPress={() => {
                  setModalVisible(true);
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
                // style={styles.openButton}
                onPress={() => {
                  setModalVisible(true);
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
            visible={modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={styles.centeredView}>
              <View>
                <Textarea
                  rowSpan={4}
                  bordered
                  placeholder="Send a message..."
                  style={styles.modalView}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    position: 'relative',
                    bottom: 70,
                  }}>
                  <TouchableOpacity
                    style={{...styles.openButton, backgroundColor: '#F98E06'}}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <Text style={styles.textStyle}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{...styles.openButton, backgroundColor: '#F98E06'}}
                    // onPress={() => {
                    //     setModalVisible(!modalVisible);
                    // }}
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
    //   paddingBottom: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      padding: 20,
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: 300,
      height: 300
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      width: 100,
      padding: 10,
      marginBottom: 30,
      elevation: 2
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