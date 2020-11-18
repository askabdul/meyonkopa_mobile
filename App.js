import React from "react"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Verify from "./components/Verify";
import Main from "./components/Main";
import ProfSignup from "./components/ProfSignup";
import Topic from "./components/Topic";
import { Root } from "native-base"
import Splash from "./components/Splash";
import OtherMain from "./components/OtherMain";


const Stack = createStackNavigator();


function App() {
  return (
    <Root>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Welcome" component={Welcome} 
          options={{headerLeft: null}}/>
          <Stack.Screen name="Register" component={Signup} 
          options={{headerLeft: null}}/>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerLeft: null}}
          />
          <Stack.Screen
            name="Verify"
            component={Verify}
            options={{headerLeft: null}}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerLeft: null, headerShown: false,}}
          />
          <Stack.Screen
            name="OtherAgeGroup"
            component={OtherMain}
            options={{headerLeft: null, headerShown: null}}
          />
          <Stack.Screen name="Professional Signup" component={ProfSignup} />
          <Stack.Screen name="Topics" component={Topic} />
          <Stack.Screen name="Splash" component={Splash} options={{headerShown: false,}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Root>
  );
}

export default App