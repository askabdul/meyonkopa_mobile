import React, { useRef, useState } from "react";
import { View, StyleSheet, TextInput, SafeAreaView, } from "react-native";
import { Text, Button } from 'native-base';
import ReactNativePickerModule from "react-native-picker-module"




export default function ProfSignup({navigation}) {
    const pickerRef = useRef()
  const [value, setValue] = useState()
  const dataset_1 = ["Urologist", "General Physician", "Psychologist", "Midwife", "Gynaecologist"]
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
    return (
        <View style={{flex: 1, justifyContent: "space-evenly", alignItems: "center", backgroundColor: "white"}}>
            <View>
                <TextInput placeholder="USERNAME"
                    style={styles.input}/>
                <TextInput placeholder="PHONE NUMBER"
                    style={styles.input}/>
                <TextInput placeholder="EMAIL"
                    style={styles.input}/>
                <TextInput placeholder="PASSWORD"
                    style={styles.input} secureTextEntry/>
                <SafeAreaView>
                    <Button bordered warning onPress={() => pickerRef.current.show()} style={styles.input}><Text>Choose Profession</Text></Button>
                    <Text>You selected {value} as a Profession</Text>
                </SafeAreaView>
                <ReactNativePickerModule
                    pickerRef={pickerRef}
                    value={value}
                    title={"Select a language"}
                    items={dataset_1}
                    titleStyle={{ color: "white" }}
                    itemStyle={{ color: "grey" }}
                    selectedColor="#FC0"
                    confirmButtonEnabledTextStyle={{ color: "black" }}
                    confirmButtonDisabledTextStyle={{ color: "grey" }}
                    cancelButtonTextStyle={{ color: "black" }}
                    confirmButtonStyle={{
                    backgroundColor: "white",
                    }}
                    cancelButtonStyle={{
                    backgroundColor: "white",
                    }}
                    contentContainerStyle={{
                    backgroundColor: "white",
                    }}
                    onCancel={() => {
                    console.log("Cancelled")
                    }}
                    onValueChange={value => {
                    console.log("value: ", value)
                    setValue(value)
                    }}
                />
            </View>
            <View>
                <View >
                    <Button bordered warning style={{borderRadius: 50, width: 150, marginLeft: 30, marginBottom: 10}}
                    onPress={() => navigation.navigate("Verify")}>
                        <Text style={{marginLeft: 30}}
                        >Submit</Text>
                    </Button>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text style={{color: "#BCBCBC", marginRight: 5}}>or</Text>
                    <View>
                        <Text style={{color: "#05389D"}} onPress={() => navigation.navigate("Register")}>REGISTER AS AN INDIVIDUAL</Text>
                    </View>
                </View>
            </View>
        </View>
    )
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