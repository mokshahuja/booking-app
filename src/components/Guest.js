import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function Guest({title,age}) {
  const [Adults, setAdults] = useState(0);
  return (
    <View style={styles.mainRow}>
      <View>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        {
            age>=2 &&
                 <Text>Ages {age} or Above</Text>
        }
        {
            age<2 &&
                 <Text>Below 2</Text>
        }
      </View>
      <View style={styles.row}>
        <Pressable
          style={styles.button}
          onPress={() => {
            if(Adults !== 0){
                setAdults(Adults-1)
            }
          }}
          style={styles.button}
        >
          <Text style = {{fontSize : 20}}>-</Text>
        </Pressable>
        <Text>{Adults}</Text>
        <Pressable
          style={styles.button}
          onPress={() => {
            if(Adults < 5){
                setAdults(Adults+1)
            }
          }}
          style={styles.button}
        >
          <Text style = {{fontSize : 20}}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}
