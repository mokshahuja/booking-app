import React from "react";
import { View, Text, Pressable } from "react-native";
import Guest from "../../components/Guest";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";

export default function Guests() {
  const navigation = useNavigation();
  return (
    <View style={styles.guestPage}>
      <View>
        <Guest title={"Adults"} age={13} />
        <Guest title={"Children"} age={2} />
        <Guest title={"Infants"} age={0} />
      </View>
      <View style={styles.searchbutton}>
        <Pressable onPress={()=>(navigation.navigate("Search results"))}>
          <Text>Search</Text>
        </Pressable>
      </View>
    </View>
  );
}
