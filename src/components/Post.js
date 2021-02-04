import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function Post({
  feed
}) {
  const {id,
    image,
    type,
    title,
    description,
    bed,
    bedroom,
    oldPrice,
    newPrice,
    totalPrice,
    coordinate} = feed;
  return (
    <View style={styles.post}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>

      <Text style={styles.bedrooms}>
        {bed} bed | {bedroom} bedrooms
      </Text>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{title} </Text>

      <Text style={styles.descriptions} numberOfLines={2}>
        {description}
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${oldPrice} </Text>
        <Text style={styles.newPrice}> ${newPrice} /night</Text>
      </Text>
      <Text style={styles.totalPrice}> ${totalPrice}</Text>
    </View>
  );
}
