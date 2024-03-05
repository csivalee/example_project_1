import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Library
import SplashScreen from 'react-native-splash-screen';
//View
import LoginScreen from './src/views/LoginScreen';
//Route
import MainStackNavigator from './src/routes/MainStackNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, animationEnabled: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={MainStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
