import React from "react"
import { Container, Button, Text } from 'native-base';

import { Image, View, StyleSheet } from "react-native"


export default function Login({navigation}) {
    return (
        <Container style={styles.container}>
            <View style={styles.image}>
                <Image source={require('./../images/logo_1.jpg')} 
                style= {styles.img}/>
            </View>
            <View>
                <View >
                    <Button bordered warning style={{borderRadius: 50, width: 150, marginLeft: 40, marginBottom: 10}}
                    onPress={() => navigation.navigate("Register")}>
                        <Text style={{marginLeft: 30}}>Register</Text>
                    </Button>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text style={{color:"#707070", fontSize: 15, marginRight: 5 }}>Already have an account?</Text>
                    <View>
                        <Text style={{color: "#05389D"}}
                        onPress={() => navigation.navigate("Login")}>LOGIN</Text>
                    </View>
                </View>
            </View>
      </Container>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-evenly"

    },
  
    image: {
      alignItems: "center",
      justifyContent: "center",
      shadowColor: '#707070',
      shadowOffset: {width: 0, height: 1},
      shadowRadius: 10,
      shadowOpacity: 0.6,
    },
  
    img: {
      width: 170,
      height: 170,
      borderRadius: 100,
    },
  
    form: {
      marginBottom: 20
    },
  
    header: {
      marginTop: 30
    },
  
    headerText: {
      backgroundColor: "#1AA08A",
      width: 420,
      paddingTop: 15,
      color: "#ffffff"
    },
  
    btn: {
        marginLeft: 10, 
        marginRight: 10, 
        backgroundColor: "#1AA08A", 
        borderRadius: 20
      }
  })