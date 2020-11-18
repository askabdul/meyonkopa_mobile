import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "native-base"

export class Settings extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity>
                    <Text>
                        <Icon type="FontAwesome" name="home" />
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Settings
