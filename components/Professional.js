import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "native-base"

export default function Professional({navigation}) {
    return (
      <View
        style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Icon
          name="arrow-left"
          type="FontAwesome"
          onPress={() => navigation.goBack()}
        />
        <View>
          <Text style={{fontSize: 20}}>
            Talk to a Professional if you got Questions
          </Text>
        </View>
        <View>
          <Button
            warning
            style={styles.btn}
            onPress={() => navigation.navigate('Urologist')}>
            <Text style={{marginHorizontal: 120, color: "#ffffff", fontSize: 22}}> Urologist </Text>
          </Button>
          <Button warning style={styles.btn}>
            <Text style={styles.btnText}> General Physician</Text>
          </Button>
          <Button warning style={styles.btn}>
            <Text style={styles.btnText}> Psychologist </Text>
          </Button>
          <Button warning style={styles.btn}>
            <Text style={{marginHorizontal: 120, color: "#ffffff", fontSize: 22}}> Midwife </Text>
          </Button>
          <Button warning style={styles.btn}>
            <Text style={styles.btnText}> Gynaecologist </Text>
          </Button>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        height: 80, 
        width: 350, 
        borderRadius: 20, 
        marginBottom: 10
    },

    btnText: {
        color: "#ffffff", 
        fontSize: 22, 
        marginLeft: 90
    }

})