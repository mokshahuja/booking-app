import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import 'react-native-gesture-handler';
import Homescreen from "./src/screens/Home/Home";
import Post from "./src/components/Post";
import feeds from "./assets/data/feed";
import SearchResultScreen from "./src/screens/SearchResultScreen/SearchResultScreen";
import DestinationSearch from "./src/screens/DestinationSearch/DestinationSearchScreen";
import Guests from "./src/screens/GuestScreen/Guests";
import Router from "./src/navigation/Router";
import { FlatList } from "react-native-gesture-handler";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
      <FlatList  />
    </>
  );
}
