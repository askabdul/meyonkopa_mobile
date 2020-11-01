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


const Stack = createStackNavigator();


function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Welcome" component={Welcome} />
       <Stack.Screen name="Register" component={Signup} />
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Verify" component={Verify} />
       <Stack.Screen name="Main" component={Main} />
       <Stack.Screen name="Professional Signup" component={ProfSignup} />
       <Stack.Screen name="Topics" component={Topic} />
     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App