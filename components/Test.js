// import React, { useRef, useState } from "react"
// import { Button, SafeAreaView, Text } from "react-native"
// import ReactNativePickerModule from "react-native-picker-module"

// const Test = () => {
//   const pickerRef = useRef()
//   const [value, setValue] = useState()
//   const dataset_1 = [1, 2, "Java", "Kotlin", "C++", "C#", "PHP"]
//   const dataset_2 = [
//     {
//       value: 101,
//       label: "Javascript",
//     },
//     {
//       value: "golang_101",
//       label: "Go",
//     },
//     {
//       value: "kotlin_dsl",
//       label: "Kotlin",
//     },
//     {
//       value: "java_101",
//       label: "Java",
//     },
//     {
//       value: "cplusplus",
//       label: "C++",
//     },
//     {
//       value: "csharp_201",
//       label: "C#",
//     },
//     {
//       value: "php_201",
//       label: "PHP",
//     },
//   ]
//   return (
//     <>
//       <SafeAreaView>
//         <Button title="Select a language" onPress={() => pickerRef.current.show()} />
//         <Text>Selected Item Text: {value}</Text>
//       </SafeAreaView>
//       <ReactNativePickerModule
//         pickerRef={pickerRef}
//         value={value}
//         title={"Select a language"}
//         items={dataset_1}
//         titleStyle={{ color: "white" }}
//         itemStyle={{ color: "white" }}
//         selectedColor="#FC0"
//         confirmButtonEnabledTextStyle={{ color: "white" }}
//         confirmButtonDisabledTextStyle={{ color: "grey" }}
//         cancelButtonTextStyle={{ color: "white" }}
//         confirmButtonStyle={{
//           backgroundColor: "rgba(0,0,0,1)",
//         }}
//         cancelButtonStyle={{
//           backgroundColor: "rgba(0,0,0,1)",
//         }}
//         contentContainerStyle={{
//           backgroundColor: "rgba(0,0,0,1)",
//         }}
//         onCancel={() => {
//           console.log("Cancelled")
//         }}
//         onValueChange={value => {
//           console.log("value: ", value)
//           setValue(value)
//         }}
//       />
//     </>
//   )
// }

// export default Test


import React, { useState } from "react";

import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

import { Textarea} from "native-base"

const Test = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View >
                <Textarea rowSpan={5} bordered placeholder="Textarea" 
                style={styles.modalView}/>
                <View style={{flexDirection: "row"}}>
                <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                    setModalVisible(!modalVisible);
                }}
                >
                <Text style={styles.textStyle}>Cancel</Text>
                </TouchableHighlight>
                <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                // onPress={() => {
                //     setModalVisible(!modalVisible);
                // }}
                >
                <Text style={styles.textStyle}>Send</Text>
                </TouchableHighlight>

            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

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
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 300,
    height: 300
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
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

export default Test;