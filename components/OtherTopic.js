import React from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, Icon } from "native-base"

export default class OtherTopic extends React.Component {
    render() {
        return (
          <View
            style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
            <Icon
            style={{marginVertical: 20}}
              name="arrow-left"
              type="FontAwesome"
              onPress={() => this.props.navigation.goBack()}
            />
        
            <ScrollView>
            <View>
              <Button
                warning
                style={styles.btn}
                onPress={() => this.props.navigation.navigate('Pre-Marital Sex')}>
                <Text style={styles.btnText}> Body Changes </Text>
              </Button>
              <Button warning style={styles.btn}>
                <Text style={{...styles.btnText}}>
                  Menstruation
                </Text>
              </Button>
              <Button warning style={styles.btn}>
                <Text style={styles.btnText}> Morning Wood </Text>
              </Button>
              <Button warning style={styles.btn}>
                <Text style={styles.btnText}> Abortion </Text>
              </Button>
              <Button warning style={styles.btn}>
                <Text style={styles.btnText}> Sex Education </Text>
              </Button>
              <Button warning style={styles.btn}>
                <Text style={styles.btnText}> Personal Hygiene </Text>
              </Button>
              <Button warning style={styles.btn}>
                <Text style={styles.btnText}> Masturbation </Text>
              </Button>
              <Button warning style={styles.btn}>
                <Text style={{ marginHorizontal: 140,  color: "#ffffff",fontSize: 22,}}> Dating </Text>
              </Button>
              <Button warning style={styles.btn}>
                <Text style={styles.btnText}> Self Awareness </Text>
              </Button>
              <Button warning style={styles.btn}>
                <Text style={styles.btnText}> Temperaments </Text>
              </Button>
              <Button warning style={styles.btn}>
                <Text style={styles.btnText}> Drug/Alcohol Abuse </Text>
              </Button>
              <Button warning style={styles.btn}>
                <Text style={styles.btnText}> Veneral Disease(STIs) </Text>
              </Button>
            </View>
            </ScrollView>
          </View>
        );
    }
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
        marginLeft: 100
    }

})