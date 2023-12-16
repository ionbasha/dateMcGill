import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './screens/LandingPage';
import CreateAccount from './screens/CreateAccount';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={LandingPage}></Stack.Screen>
        <Stack.Screen name="Create Account" component={CreateAccount}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default StackNavigator;