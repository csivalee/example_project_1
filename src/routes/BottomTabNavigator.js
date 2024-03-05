import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//bottom tabs screens
import HomeStackScreen from '../views/HomeScreen';
import SecondScreen from '../views/SecondScreen';
import ThirdScreen from '../views/ThirdScreen';

import {
  SIZES,
  COLORS,
  fontPixel,
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../styles';
import HeaderComponent from '../components/HeaderComponent';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {

  return (
    <Tab.Navigator
      initialRouteName="HomeBT"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFF',
          shadowOpacity: 0, // remove shadow on iOS
          elevation: 0, // remove shadow on Android
        },

        //headerShown: false,
        headerTitleAlign: 'Left',
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#999999',
        tabBarLabelStyle: {
          fontFamily: 'Taviraj-SemiBold',
          fontSize: 12,
          //lineHeight: 32,
        },
      }}>
      <Tab.Screen
        name="HomeBT"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          headerLeft: () => <HeaderComponent />,
          headerTitle: () => false,
          headerRight: () => (
            <View
              style={{
                //backgroundColor: COLORS.badge,
                width: widthPixel(30),
                height: heightPixel(30),
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: pixelSizeHorizontal(10),
              }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  resizeMode="contain"
                  source={require('../../src/assets/icons/home_exit.png')}
                  style={{
                    width: widthPixel(20),
                    height: heightPixel(20),
                    tintColor: COLORS.black,
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarItemContainer}>
              <Image
                resizeMode="contain"
                source={require('../assets/icons/bottomtab_home.png')}
                style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SecondBT"
        component={SecondScreen}
        options={{
          tabBarLabel: 'Second',
          headerLeft: () => <HeaderComponent />,
          headerTitle: () => {
            false;
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarItemContainer}>
              <Image
                resizeMode="contain"
                source={require('../assets/icons/bottomtab_second.png')}
                style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ThirdBT"
        component={ThirdScreen}
        options={{
          tabBarLabel: 'Third',
          headerLeft: () => <HeaderComponent />,
          headerTitle: () => false,
          headerTitle: () => {
            false;
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarItemContainer}>
              <Image
                resizeMode="contain"
                source={require('../assets/icons/bottomtab_third.png')}
                style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
              />
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                //backgroundColor: COLORS.badge,
                width: widthPixel(30),
                height: heightPixel(30),
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: pixelSizeHorizontal(10),
              }}>
              <TouchableOpacity>
                <Image
                  resizeMode="contain"
                  source={require('../assets/icons/search.png')}
                  style={{
                    width: widthPixel(20),
                    height: heightPixel(20),
                    tintColor: COLORS.black,
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    bottom: -5,
  },
  tabBarIcon: {
    tintColor: '#999999',
    width: 18,
    height: 18,
  },
  tabBarIconFocused: {
    tintColor: '#000000',
  },
});

export default BottomTabNavigator;
