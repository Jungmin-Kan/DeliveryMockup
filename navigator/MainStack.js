import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen'
import AllFunctionsScreen from '../screen/AllFunctionsScreen'
  
const Stack = createStackNavigator();

const MainStack = () => {
    return(
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AllFunctionsScreen" component={AllFunctionsScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
    )
}

export default MainStack;
