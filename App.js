import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsScreen from './Screens/SettingsScreen';
import HomeScreen from './Screens/HomeScreen';
import ActivityScreen from './Screens/ActivityScreen';
import CreateScreen from './Screens/CreateScreen';


// Plus...
import plus from './assets/plus.png'

// Font Awesome Icons...
import { FontAwesome5 } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

// Hiding Tab Names...
export default function App() {

  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        showLabel: false,
        // Floating Tab Bar...
        style: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 15,
          marginHorizontal: 20,
          // Max Height...
          height: 60,
          borderRadius: 10,
          // Shadow...
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          paddingHorizontal: 20,
        }
      }}>

        {
          // Tab Screens....

          // Tab ICons....
        }
        <Tab.Screen name={"Home"} component={HomeScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="stopwatch"
                size={20}
                color={focused ? 'blue' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          // tabPress: e => {
          //   Animated.spring(tabOffsetValue, {
          //     toValue: 10,
          //     useNativeDriver: true
          //   }).start();
          // }
        })}></Tab.Screen>

        <Tab.Screen name={"Search"} component={ActivityScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="dumbbell"
                size={20}
                color={focused ? 'blue' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          // tabPress: e => {
          //   Animated.spring(tabOffsetValue, {
          //     toValue: getWidth() + 20,
          //     useNativeDriver: true
          //   }).start();
          // }
        })}></Tab.Screen>


        {

          // Extra Tab Screen For Action Button..
        }

        {/* <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <View style={{
                width: 55,
                height: 55,
                backgroundColor: 'blue',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 50 : 30
              }}>
                <Image source={plus} style={{
                  width: 22,
                  height: 22,
                  tintColor: 'white',
                }}></Image>
              </View>
            </TouchableOpacity>
          )
        }}></Tab.Screen> */}

        <Tab.Screen name={"Notifications"} component={CreateScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="plus"
                size={20}
                color={focused ? 'blue' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          // tabPress: e => {
          //   Animated.spring(tabOffsetValue, {
          //     toValue: getWidth() * 2 + 40,
          //     useNativeDriver: true
          //   }).start();
          // }
        })}></Tab.Screen>

        <Tab.Screen name={"Settings"} component={SettingsScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="cog"
                size={20}
                color={focused ? 'blue' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          // tabPress: e => {
          //   Animated.spring(tabOffsetValue, {
          //     toValue: getWidth() * 3 + 60,
          //     useNativeDriver: true
          //   }).start();
          // }
        })}></Tab.Screen>

      </Tab.Navigator>

      {/* <Animated.View style={{
        width: getWidth() - 20,
        height: 3,
        backgroundColor: 'blue',
        position: 'absolute',
        bottom: 73,
        // Horizontal Padding = 20...
        left: 50,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View> */}
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 80

  // Total five Tabs...
  return width / 5
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
