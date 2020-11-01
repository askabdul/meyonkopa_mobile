import React from "react";
import { View, StyleSheet, TextInput} from "react-native";
import {  Button, Text } from 'native-base';



export default function Login({navigation}) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <View>
          <TextInput placeholder="EMAIL" style={styles.input} />
          <TextInput
            placeholder="PASSWORD"
            style={styles.input}
            secureTextEntry
          />
          <View>
            <Button
              bordered
              warning
              style={{borderRadius: 50, width: 150, marginLeft: 100}}
              onPress={() => navigation.navigate('Main')}>
              <Text style={{marginLeft: 35}}>Login</Text>
            </Button>
          </View>
        </View>
      </View>
    );
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