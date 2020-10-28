import React from "react";
import { View, StyleSheet, TextInput} from "react-native";
import {  Button, Text } from 'native-base';



export default function Register({navigation}) {
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
                    style={styles.input} secureTextEntry={true}/>
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
                        <Text style={{color: "#05389D"}} onPress={() => navigation.navigate("Register")}>Register as a professional</Text>
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