import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      ScreenOptions={{
        animationEnabled: false,
        headerStyle: {
          backgroundColor: '#FFF',
          shadowOpacity: 0, // remove shadow on iOS
          elevation: 0, // remove shadow on Android
        },
      }}>
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
  
    </Stack.Navigator>
  );
};

export default MainStackNavigator;