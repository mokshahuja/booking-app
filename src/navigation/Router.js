import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DestinationSearch from "../screens/DestinationSearch/DestinationSearchScreen";
import Homescreen from "../screens/Home/Home";
import Guests from "../screens/GuestScreen/Guests";
import HomeTabNavigator from "./HomeTabNavigator";
import SearchResultScreen from "../screens/SearchResultScreen/SearchResultScreen";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearch}
          options={{
            title: "Search your Destination",
          }}
        />

        <Stack.Screen
          name={"Guests Screen"}
          component={Guests}
          options={{
            title: "How many people?",
          }}
        />

        <Stack.Screen
          name={"Search results"}
          component={SearchResultScreen}
          options={{
            title: "How many people?",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
