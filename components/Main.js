import React from "react";
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import StartPage from './StartPage';
import Topic from "./Topic";
import Prof from "./Professional"
import Pmsex from "./Pmsex";
import Urologist from "./Urologist";



const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator()


function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={StartPage} />
      <HomeStack.Screen name="Topics" component={Topic} />
      <HomeStack.Screen name="Professional" component={Prof} />
      <HomeStack.Screen name="Pre-Marital Sex" component={Pmsex} />
      <HomeStack.Screen name="Urologist" component={Urologist} />
    </HomeStack.Navigator>
  );
}
// const Incident = createStackNavigator()

function Main() {
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
      <Tabs.Screen name="Home" component={HomeStackScreen} />
    </Tabs.Navigator>
  );
}

export default Main;
