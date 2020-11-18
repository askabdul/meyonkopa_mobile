import React from "react";
import { Icon, Tab } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import OtherPage from './OtherStartPage';
import OtherTopics from "./OtherTopic";
import Prof from "./Professional"
import Pmsex from "./Pmsex";
import Urologist from "./Urologist";
// import Setting from "./Settings"
import Test from "./Test"




const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator()
const Settings = createStackNavigator()


function SettingsScreen() {
  return (
    <Settings.Navigator>
      <Settings.Screen name="Test" component={Test} />
    </Settings.Navigator>
  )
}

function OtherHomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="OtherHome" component={OtherPage} 
      options={{headerLeft: null, headerShown: false}}/>
      <HomeStack.Screen name="OtherTopic" component={OtherTopics} />
      <HomeStack.Screen name="Professional" component={Prof} />
      <HomeStack.Screen name="Pre-Marital Sex" component={Pmsex} />
      <HomeStack.Screen name="Urologist" component={Urologist} />
    </HomeStack.Navigator>
  );
}

function OtherMain() {
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
      <Tabs.Screen name="Home" component={OtherHomeStackScreen} />
      <Tabs.Screen name="Settings" component= {SettingsScreen} />
    </Tabs.Navigator>
  );
}

export default OtherMain;
