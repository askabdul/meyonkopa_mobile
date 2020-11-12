import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { Button, Icon } from "native-base";



export default function StartPage({navigation}) {
        return (
            <View style={{flex: 1, justifyContent: "space-evenly", alignItems: "center"}}>
                <View>
                    <Text style={{fontSize: 32}}>WELCOME !</Text>
                    <Text style={{fontSize: 20}}>Godslove Kwabi</Text>
                </View>
                <View>
                    <Text style={{fontSize: 18, fontWeight: "bold"}}>How may we help you ?</Text>
                </View>
                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center"}}>
                    <Button vertical style={{backgroundColor: "white", padding: 56, margin: 10}}
                    onPress={() => navigation.navigate("OtherTopic")}>
                        <Icon name="home" type="FontAwesome" style={{color: "#F98E06", fontSize: 50, padding: 10}}/>
                        <Text style={styles.iconText}>Choose a Topic</Text>
                    </Button>
                    <Button vertical style={{backgroundColor: "white", padding: 40,margin: 10}}
                    onPress={() => navigation.navigate("Professional")}>
                        <Icon name="plus-square" type="FontAwesome" style={{color: "#F98E06", fontSize: 50, padding: 10}}/>
                        <Text style={styles.iconText}>Talk to a professional</Text>
                    </Button>
                </View>
            </View>
        )
    }

const styles = StyleSheet.create({
    icon: {
        color: "#B8AFAF"
    },

    iconText: {
        color: "#AC9D9D"
    }
})