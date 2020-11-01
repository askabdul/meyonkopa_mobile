import React from "react";
import { View, StyleSheet, TextInput, ScrollView} from "react-native";
import {  Button, Text } from 'native-base';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"



export default function Register({navigation}) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          ...StyleSheet.absoluteFillObject,
        }}>
        <View>
          <TextInput placeholder="USERNAME" style={styles.input} />
          <TextInput placeholder="PHONE NUMBER" style={styles.input} />
          <TextInput placeholder="EMAIL" style={styles.input} />
          <TextInput
            placeholder="PASSWORD"
            style={styles.input}
            secureTextEntry
          />
        </View>
        <View>
          <View>
            <Button
              bordered
              warning
              style={{borderRadius: 50, width: 150, marginLeft: 30}}
              onPress={() => navigation.navigate('Verify')}>
              <Text style={{marginLeft: 30}}>Submit</Text>
            </Button>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#BCBCBC', marginRight: 5}}>or</Text>
            <View>
              <Text
                style={{color: '#05389D'}}
                onPress={() => navigation.navigate('Professional Signup')}>
                REGISTER AS A PROFESSIONAL
              </Text>
            </View>
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