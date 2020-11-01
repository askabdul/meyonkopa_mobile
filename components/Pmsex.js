import React from "react";

import {  View, Text, ScrollView } from "react-native"
import { Icon } from "native-base"

export default function Pmsex({navigation}) {
    return (
        <View style={{flex: 1, alignItems: "center"}}>
            <View style={{marginTop: 20, flexDirection: "row"}}>
                <Icon name="arrow-left" type="FontAwesome" 
                    style={{padding: 20}}
                    onPress={() => navigation.goBack()}/>
                <Text style={{fontSize: 22, padding: 20}}>Pre-Marital Sex</Text>
            </View>
            <ScrollView  >
                <View style={{paddingHorizontal: 30, marginVertical: 20 }}>
                    <Text style={{borderWidth: 0.9, padding: 20, textAlign: "justify", fontSize: 18, borderRadius: 10}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed ac semper eros, nec molestie diam. Praesent ut congue 
                        eros. Vivamus ultricies velit vitae vestibulum aliquam. 
                        Sed sit amet suscipit leo. Sed lobortis urna vel maximus 
                        lacinia. Donec euismod nulla posuere arcu pulvinar, eget 
                        viverra ipsum auctor. Phasellus fermentum egestas nibh 
                        quis efficitur. Quisque egestas lorem a purus iaculis 
                        cursus.Duis non velit sed tortor ornare vulputate vitae 
                        sit amet eros. Pellentesque eget ligula non nunc efficitur consequat. Sed at sapien euismod, egestas dui eget, venenatis turpis. In elementum sem eros, eu condimentum velit blandit nec. Nunc rhoncus consectetur venenatis. Ut vel ullamcorper diam. Fusce congue justo
                    </Text>
                </View>
                <View style={{paddingHorizontal: 30, marginVertical: 20 }}>
                    <Text style={{borderWidth: 0.9, padding: 20, textAlign: "justify", fontSize: 18, borderRadius: 10}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed ac semper eros, nec molestie diam. Praesent ut congue 
                        eros. Vivamus ultricies velit vitae vestibulum aliquam. 
                        Sed sit amet suscipit leo. Sed lobortis urna vel maximus 
                        lacinia. Donec euismod nulla posuere arcu pulvinar, eget 
                        viverra ipsum auctor. Phasellus fermentum egestas nibh 
                        quis efficitur. Quisque egestas lorem a purus iaculis 
                        cursus.Duis non velit sed tortor ornare vulputate vitae 
                        sit amet eros. Pellentesque eget ligula non nunc efficitur consequat. Sed at sapien euismod, egestas dui eget, venenatis turpis. In elementum sem eros, eu condimentum velit blandit nec. Nunc rhoncus consectetur venenatis. Ut vel ullamcorper diam. Fusce congue justo
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}