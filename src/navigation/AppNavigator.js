import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';
const Stack=createStackNavigator()
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name={'Splash'}
                component={Splash}
                options= {{headerShown:false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator