import React from "react";
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from "react-native"

import OtherPage from './OtherStartPage';
import OtherTopics from "./OtherTopic";
import Prof from "./Professional"
import Pmsex from "./Pmsex";
import Urologist from "./Urologist";



const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator()


function OtherHomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="OtherHome" component={OtherPage} />
      <HomeStack.Screen name="OtherTopic" component={OtherTopics} />
      <HomeStack.Screen name="Professional" component={Prof} />
      <HomeStack.Screen name="Pre-Marital Sex" component={Pmsex} />
      <HomeStack.Screen name="Urologist" component={Urologist} />
    </HomeStack.Navigator>
  );
}
// const Incident = createStackNavigator()

function OtherMain() {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          }
          return (
            <Icon
              name={iconName}
              type="FontAwesome"
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#F98E06',
        inactiveTintColor: '#AC9D9D',
      }}>
      <Tabs.Screen name="Home" component={OtherHomeStackScreen} />
    </Tabs.Navigator>
  );
}

export default OtherMain;
