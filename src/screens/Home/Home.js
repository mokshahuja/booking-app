import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";

const Homescreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.homeView}>
      {/* Search bar */}
      <Pressable
        style={styles.search}
        onPress={() => {
          return navigation.navigate("Destination Search")
        }}
      >
        <Fontisto name="search" size={25} color={"#f15454"} />

        <Text style={styles.searchText}>Where are you going?</Text>
      </Pressable>

      {/* body of home screen */}

      <ImageBackground
        source={require("../../../assets/images/mike-palmowski-ynNMPkohOqo-unsplash.jpg")}
        style={styles.image}
      >
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => {
            console.warn("button clicked");
          }}
        >
          <Text style={styles.buttonText}>Explore Nearby Stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Homescreen;
