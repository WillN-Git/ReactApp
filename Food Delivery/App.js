/**
 * Author: Wilfried Ndefo
 * Inspiration: https://dribbble.com/shots/17031663-Food-Delivery-App-UI-design
*/

//Basics
import * as React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Screens
import HomeScreen from './screens/HomeScreen'

//Constants
import { icons, images, COLORS, SIZES } from'./utils'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarColor: COLORS.text,
          tabBarStyle: {
            backgroundColor: COLORS.secondary,
            borderColor: 'transparent',
            height: 70
          }
        }}>
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarColor: COLORS.text,
            tabBarIcon: () => (
              <Image source={icons.roomService} style={{width: 30, height: 30, borderRadius: 5}} />
            )
          }}
        />

        <Tab.Screen
          name="Favorite"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <Image source={icons.love} style={{width: 30, height: 30, borderRadius: 5}} />
            )
          }}
        />

        <Tab.Screen 
          name="Post"
          options={{
            tabBarShowLabel: false,
            tabBarBadge: 3,
            tabBarBadgeStyle: {
              fonSize: SIZES.base,
              borderColor: COLORS.white,
              borderWidth: 2,
              marginLeft: 10,
              marginTop: -5
            },
            tabBarIcon: () => (
              <View style={{padding: 10, backgroundColor: COLORS.tertiary, borderRadius: 100, marginTop: -5}}>
                <Image source={icons.chef} style={{width: 40, height: 40}} />
              </View>
            )
          }}
        />

        <Tab.Screen 
          name="MyBag"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <Image source={icons.myBag} style={{width: 30, height: 30, borderRadius: 5}} />
            )
          }}
        />

        <Tab.Screen
          name="Profile"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <Image source={images.profilePhoto} style={{width: 40, height: 40, borderRadius: 5}} />
            )
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
