import React from "react"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Verify from "./components/Verify";
import Home from "./components/Home";


const Stack = createStackNavigator();


function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Welcome" component={Welcome} />
       <Stack.Screen name="Register" component={Signup} />
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Verify" component={Verify} />
       <Stack.Screen name="Home" component={Home} />
     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App