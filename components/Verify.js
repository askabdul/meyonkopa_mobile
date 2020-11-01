import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Icon, Button } from 'native-base';


function Verify({navigation}) {

    return (
        <View style={{flex: 1, backgroundColor: "#ffffff", justifyContent: "space-evenly", alignItems: "center"}}>
            <View style={{alignItems: "center"}}>
                <Icon name='lock' type="FontAwesome" 
                style={{fontSize: 70, marginBottom: 60}}/>
                <Text style={{textAlign: "center", paddingHorizontal: 15}}>
                    ENTER THE PASSCODE IN THE MESSAGE TO CONFIRM YOUR ACCOUNT
                </Text>
            </View>
            <View style={{justifyContent: "space-evenly", flexDirection: "row"}}>
                <TextInput maxLength={1}
                style={styles.input} />
                <TextInput maxLength={1} 
                    style={styles.input}/>
                <TextInput maxLength={1}
                    style={styles.input}/>
                <TextInput maxLength={1} 
                    style={styles.input} />
                    <TextInput maxLength={1} 
                    style={styles.input} />
            </View>
            <View>
                <Button bordered warning style={{borderRadius: 50, width: 150, marginBottom: 10,alignItems: "center" }}
                onPress={() => navigation.navigate("Main")}>
                    <Text style={{marginLeft: 50, color: "#F98E06"}}
                    >Proceed
                    {/* <Icon name='arrow-right' type="FontAwesome" /> */}
                    </Text>
                </Button>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        fontWeight: "600", 
        // padding: 10,
        marginHorizontal: 10, 
        height: 55, 
        alignSelf:"center", 
        width: "10%", 
        // borderRadius: 10, 
        // borderWidth: 0.5, 
        borderBottomColor: "#000000",
        borderBottomWidth: 2, 
        textAlign:"center",
        fontSize: 20
    }
})

export default  Verify