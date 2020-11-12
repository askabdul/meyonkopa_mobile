import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "native-base"

export default class Topic extends React.Component {
  render() {

    return (
      <View
        style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Icon
          name="arrow-left"
          type="FontAwesome"
          onPress={() => this.props.navigation.goBack()}
        />
        <View>
          <Text style={{fontSize: 20}}>Find out more about a topic</Text>
        </View>
        <View>
          <Button
            warning
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Pre-Marital Sex')}>
            <Text style={styles.btnText}> Pre-Marital sex </Text>
          </Button>
          <Button warning style={styles.btn}>
            <Text style={{...styles.btnText}}> Menstruation</Text>
          </Button>
          <Button warning style={styles.btn}>
            <Text style={styles.btnText}> Ovulation </Text>
          </Button>
          <Button warning style={styles.btn}>
            <Text style={styles.btnText}> Pregnancy </Text>
          </Button>
          <Button warning style={styles.btn}>
            <Text style={styles.btnText}> Sex Education </Text>
          </Button>
        </View>
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