import React from "react";
import { useState } from "react";
import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import styles from "./styles";
import feed from "../../../assets/data/feed";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";


export default function DestinationSearch() {
  const [inputText, setInputText] = useState("");
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.searchBar}>
        <Entypo
          style={styles.backIcon}
          name="arrow-with-circle-left"
          size={30}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Kaha jana hai"
          value={inputText}
          onChangeText={setInputText}
        />
        <AntDesign style={styles.closeIcon} name="closecircle" size={30} />
      </View>

      {/* List of Auto Complete features */}

      {inputText.length !== 0 && (
        <FlatList
          style={styles.container}
          data={feed}
          key={Math.random()}
          renderItem={({ item }) => (
            <Pressable style={styles.searchrows} onPress={()=>(navigation.navigate("Guests Screen"))} >
              <View style={styles.iconContainer}>
                <Entypo name={"location-pin"} size={35} />
              </View>
              <Text style={styles.locationText}>{item.type}</Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}
