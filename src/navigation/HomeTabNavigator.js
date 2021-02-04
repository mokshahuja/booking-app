import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";
import Fontisto from "react-native-vector-icons/Fontisto";

const Tab = createBottomTabNavigator();

export default function HomeTabNavigator(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#f15454",
      }}
    >
      <Tab.Screen
        name={"Explore"}
        component={Home}
        options={{
          tabBarIcon: () => (
            <Fontisto name={"search"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={"moksh"}
        component={Home}
        options={{
          tabBarIcon: ({ color: string }) => (
            <Fontisto name={"search"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={"ahuja"}
        component={Home}
        options={{
          tabBarIcon: ({ color: string }) => (
            <Fontisto name={"search"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={"pro"}
        component={Home}
        options={{
          tabBarIcon: ({ color: string }) => (
            <Fontisto name={"search"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={"csgo"}
        component={Home}
        options={{
          tabBarIcon: ({ color: string }) => (
            <Fontisto name={"search"} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
