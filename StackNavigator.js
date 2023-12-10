import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './screens/LandingPage';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="WELCOME" component={LandingPage}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default StackNavigator;