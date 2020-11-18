import React from "react";
import { Icon } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import StartPage from './StartPage';
import Topic from "./Topic";
import Prof from "./Professional"
import Pmsex from "./Pmsex";
import Urologist from "./Urologist";
import Test from "./Test"



const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const Settings = createStackNavigator()



function SettingsScreen() {
  return (
    <Settings.Navigator>
      <Settings.Screen name="Test" component={Test} />
    </Settings.Navigator>
  )
}


function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={StartPage}
        options={{headerLeft: null, headerShown: false}}
      />
      <HomeStack.Screen
        name="Topics"
        component={Topic}
        options={{headerLeft: null, headerShown: false}}
      />
      <HomeStack.Screen
        name="Professional"
        component={Prof}
        options={{headerLeft: null, headerShown: false}}
      />
      <HomeStack.Screen
        name="Pre-Marital Sex"
        component={Pmsex}
        options={{headerLeft: null, headerShown: false}}
      />
      <HomeStack.Screen
        name="Urologist"
        component={Urologist}
        options={{headerLeft: null, headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

function Main() {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          }

          else if(route.name === 'Settings') {
            iconName = focused ? 'gear' : 'gear';
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
      <Tabs.Screen name="Settings" component= {SettingsScreen} />

    </Tabs.Navigator>
  );
}

export default Main;
