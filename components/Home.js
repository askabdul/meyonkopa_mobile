import React, { useState }from "react";
import { Container, Form, Header,Item, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { SafeAreaView, StyleSheet, View, Picker} from "react-native"

function Home() {
    const [selectedValue, setSelectedValue] = useState("java")
      
        return (
          <Container style={{backgroundColor: '#ffffff', flex: 1}}>
            {/* <Header Title="this is it"/> */}
            <Content>
              <View>
                <Picker
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }>
                  <Picker.Item label="Java" value="java"></Picker.Item>
                  <Picker.Item label="Javascript" value="js"></Picker.Item>
                  <Picker.Item label="Angular" value="ang"></Picker.Item>
                </Picker>
              </View>
            </Content>
            <Footer>
              <FooterTab>
                <Button active badge vertical>
                  <Badge style={{backgroundColor: '#707070'}}>
                    <Text>2</Text>
                  </Badge>
                  <Icon name="home" style={styles.icon} />
                  <Text style={styles.iconText}>Home</Text>
                </Button>
                <Button vertical>
                  <Icon name="bell" type="FontAwesome" style={styles.icon} />
                  <Text>Alert</Text>
                </Button>
                <Button badge vertical>
                  <Badge style={{backgroundColor: '#707070'}}>
                    <Text>51</Text>
                  </Badge>
                  <Icon
                    active
                    name="user"
                    type="FontAwesome"
                    style={styles.icon}
                  />
                  <Text>Profile</Text>
                </Button>
                <Button vertical>
                  <Icon name="gear" type="FontAwesome" style={styles.icon} />
                  <Text>Settings</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        );
}


const styles = StyleSheet.create({
    icon: {
        color: "#F98E06"
    },

    iconText: {
        color: "#000000"
    }
})

export default Home;